<?php

/**
 * Class SimpleXLSXGen
 * Export data to MS Excel.
 *
 * @author   shuchkin
 * @version  3.0.0
 * @license  MIT
 */

namespace Shuchkin;

use Exception;
use ZipArchive;

class SimpleXLSXGen
{
    public const
        VERSION = '3.0.0';

    protected
        $sheets = [],
        $sheet_names = [],
        $hyperlinks = [],
        $package = [
            'types' => [],
            'rels' => [],
            'root_rels' => [],
            'sheets' => [],
            'shared_strings' => [],
            'styles' => []
        ],
        $content_types = [
            'rels' => 'application/vnd.openxmlformats-package.relationships+xml',
            'xml' => 'application/xml',
            'xlsx' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'xlsm' => 'application/vnd.ms-excel.sheet.macroEnabled.12',
            'xltx' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.template',
            'xltm' => 'application/vnd.ms-excel.template.macroEnabled.12',
            'xlsb' => 'application/vnd.ms-excel.sheet.binary.macroEnabled.12',
            'xlam' => 'application/vnd.ms-excel.addin.macroEnabled.12',
            'bmp' => 'image/bmp',
            'jpeg' => 'image/jpeg',
            'png' => 'image/png',
            'gif' => 'image/gif',
            'tif' => 'image/tiff',
            'emf' => 'image/x-emf',
            'wmf' => 'image/x-wmf'
        ],
        $drawing_rels = [],
        $drawings = [],
        $charts = [],
        $images = [],
        $tmp_fname,
        $cur_sheet_name,
        $cur_sheet_index = -1,
        $cur_row_index = 0,
        $cols_width = [],
        $rows_height = [],
        $rows_hidden = [],
        $default_font_size = 12,
        $default_font_name = 'Calibri',
        $default_row_height = 15,
        $default_col_width = 10,
        $is_write = false,
        $debug = false,
        $active_sheet_id = 0,
        $tab_color = [],
        $paper_size = 0,
        $page_orientation = '',
        $page_margins = [],
        $right_to_left = [],
        $show_grid_lines = [],
        $freeze_rows = [],
        $freeze_columns = [],
        $validation = [],
        $autofilter = [],
        $merges = [],
        $vml_drawings = [],
        $vml_drawing_rels = [],
        $comments = [],
        $book_view = '',
        $doc_title = '',
        $doc_subject = '',
        $doc_keywords = '',
        $doc_category = '',
        $doc_description = '',
        $doc_company = '',
        $doc_manager = '',
        $doc_created = 0,
        $doc_creator = 'SimpleXLSXGen',
        $doc_last_modified_by = 'SimpleXLSXGen';

    public function __construct()
    {
        $this->tmp_fname = tempnam(sys_get_temp_dir(), 'xlsx');
        $this->doc_created = time();
    }

    public static function fromArray(array $data, $sheet_name = null)
    {
        $xlsx = new static();
        $xlsx->addSheet($data, $sheet_name);
        return $xlsx;
    }

    public function addSheet(array $data, $sheet_name = null)
    {
        $this->cur_sheet_index++;
        $this->cur_sheet_name = $sheet_name ?: 'Sheet' . ($this->cur_sheet_index + 1);
        $this->sheet_names[$this->cur_sheet_index] = $this->cur_sheet_name;
        $this->sheets[$this->cur_sheet_index] = $data;
        $this->cur_row_index = 0;
        return $this;
    }

    public function __destruct()
    {
        if (file_exists($this->tmp_fname)) {
            unlink($this->tmp_fname);
        }
    }

    public function saveAs($filename)
    {
        if ($this->is_write) {
            return false;
        }
        $this->prepare();

        if (!copy($this->tmp_fname, $filename)) {
            return false;
        }
        $this->is_write = true;
        return true;
    }

    public function downloadAs($filename)
    {
        if ($this->is_write) {
            return false;
        }
        $this->prepare();

        header('Content-type: ' . $this->content_types['xlsx']);
        header('Content-Disposition: attachment; filename="' . $filename . '"');
        header('Content-Transfer-Encoding: binary');
        header('Expires: 0');
        header('Cache-Control: must-revalidate');
        header('Pragma: public');
        header('Content-Length: ' . filesize($this->tmp_fname));

        if (ob_get_contents()) {
            ob_end_clean();
        }
        readfile($this->tmp_fname);
        $this->is_write = true;
        return true;
    }

    public function getSheets()
    {
        return $this->sheets;
    }

    protected function prepare()
    {
        if (empty($this->sheets)) {
            $this->addSheet([]);
        }

        $zip = new ZipArchive();
        if (!$zip->open($this->tmp_fname, ZipArchive::CREATE | ZipArchive::OVERWRITE)) {
            throw new Exception('Cannot open ' . $this->tmp_fname . '. It may be in use or protected.');
        }

        $this->package['root_rels'][] = ['Id' => 'rId1', 'Type' => 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument', 'Target' => 'xl/workbook.xml'];
        $this->package['types'][] = ['PartName' => '/xl/workbook.xml', 'ContentType' => $this->content_types['xlsx']];

        $this->package['styles'] = $this->getStyles();

        foreach ($this->sheets as $sheet_index => $sheet_data) {
            $this->package['sheets'][$sheet_index] = $this->getSheetData($sheet_index, $sheet_data);
        }

        $zip->addFromString('[Content_Types].xml', $this->buildContentTypes());
        $zip->addFromString('_rels/.rels', $this->buildRootRels());
        $zip->addFromString('docProps/app.xml', $this->buildApp());
        $zip->addFromString('docProps/core.xml', $this->buildCore());
        $zip->addFromString('xl/_rels/workbook.xml.rels', $this->buildWorkbookRels());
        $zip->addFromString('xl/workbook.xml', $this->buildWorkbook());
        $zip->addFromString('xl/styles.xml', $this->buildStyles());

        if (!empty($this->package['shared_strings'])) {
            $zip->addFromString('xl/sharedStrings.xml', $this->buildSharedStrings());
        }

        foreach ($this->package['sheets'] as $sheet_index => $sheet_xml) {
            $zip->addFromString('xl/worksheets/sheet' . ($sheet_index + 1) . '.xml', $sheet_xml);
        }

        $zip->close();
    }

    protected function getSheetData($sheet_index, array $sheet_data)
    {
        $ws_abs_path = '/xl/worksheets/sheet' . ($sheet_index + 1) . '.xml';
        $ws_path = 'worksheets/sheet' . ($sheet_index + 1) . '.xml';

        $this->package['types'][] = ['PartName' => $ws_abs_path, 'ContentType' => 'application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml'];
        $this->package['rels'][] = ['Id' => 'rId' . ($sheet_index + 1), 'Type' => 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet', 'Target' => $ws_path];

        $cols = '';
        if (isset($this->cols_width[$sheet_index])) {
            $cols .= '<cols>';
            foreach ($this->cols_width[$sheet_index] as $c => $w) {
                $cols .= '<col min="' . ($c + 1) . '" max="' . ($c + 1) . '" width="' . $w . '" customWidth="1" />';
            }
            $cols .= '</cols>';
        }

        $xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' . "\n";
        $xml .= '<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">';
        $xml .= $cols;
        $xml .= '<sheetData>';

        if (!empty($sheet_data)) {
            foreach ($sheet_data as $r => $row) {
                $xml .= '<row r="' . ($r + 1) . '">';
                foreach ($row as $c => $val) {
                    $xml .= $this->cell($r, $c, $val);
                }
                $xml .= '</row>';
            }
        }

        $xml .= '</sheetData>';
        $xml .= '</worksheet>';

        return $xml;
    }

    protected function cell($r, $c, $val)
    {
        $cell_coord = $this->num2name($c) . ($r + 1);
        $s_type = ' s="0"';

        if (is_string($val)) {
            if (strpos($val, '<') !== false) { // rich text
                $val = $this->esc($val);
                $s_type = ' t="inlineStr"';
                $xml = '<c r="' . $cell_coord . '"' . $s_type . '><is><t>' . $val . '</t></is></c>';
            } else {
                $s_type = ' t="s"';
                $val = $this->addSharedString($val);
                $xml = '<c r="' . $cell_coord . '"' . $s_type . '><v>' . $val . '</v></c>';
            }
        } elseif (is_numeric($val)) {
            $xml = '<c r="' . $cell_coord . '"' . $s_type . '><v>' . $val . '</v></c>';
        } elseif ($val instanceof \DateTime) {
            $val = $this->convertDateTime($val);
            $s_type = ' s="1"';
            $xml = '<c r="' . $cell_coord . '"' . $s_type . '><v>' . $val . '</v></c>';
        } else { // bool, null
            $xml = '<c r="' . $cell_coord . '"' . $s_type . '/>';
        }

        return $xml;
    }

    protected function addSharedString($val)
    {
        if (!in_array($val, $this->package['shared_strings'])) {
            $this->package['shared_strings'][] = $val;
        }
        return array_search($val, $this->package['shared_strings']);
    }

    protected function getStyles()
    {
        $styles = [
            'fonts' => [
                ['size' => $this->default_font_size, 'name' => $this->default_font_name, 'family' => 2],
            ],
            'fills' => [
                ['pattern' => 'none'],
                ['pattern' => 'gray125'],
            ],
            'borders' => [
                [],
            ],
            'cell_xfs' => [
                ['font_id' => 0, 'fill_id' => 0, 'border_id' => 0, 'num_fmt_id' => 0],
                ['font_id' => 0, 'fill_id' => 0, 'border_id' => 0, 'num_fmt_id' => 14],
            ]
        ];
        return $styles;
    }

    protected function buildContentTypes()
    {
        $xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' . "\n";
        $xml .= '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">';
        $xml .= '<Default Extension="rels" ContentType="' . $this->content_types['rels'] . '"/>';
        $xml .= '<Default Extension="xml" ContentType="' . $this->content_types['xml'] . '"/>';

        foreach ($this->package['types'] as $type) {
            $xml .= '<Override PartName="' . $type['PartName'] . '" ContentType="' . $type['ContentType'] . '"/>';
        }

        $xml .= '</Types>';
        return $xml;
    }

    protected function buildRootRels()
    {
        $xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' . "\n";
        $xml .= '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">';
        foreach ($this->package['root_rels'] as $rel) {
            $xml .= '<Relationship Id="' . $rel['Id'] . '" Type="' . $rel['Type'] . '" Target="' . $rel['Target'] . '"/>';
        }
        $xml .= '</Relationships>';
        return $xml;
    }

    protected function buildWorkbookRels()
    {
        $xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' . "\n";
        $xml .= '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">';
        foreach ($this->package['rels'] as $rel) {
            $xml .= '<Relationship Id="' . $rel['Id'] . '" Type="' . $rel['Type'] . '" Target="' . $rel['Target'] . '"/>';
        }
        $xml .= '</Relationships>';
        return $xml;
    }

    protected function buildApp()
    {
        $xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' . "\n";
        $xml .= '<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">';
        $xml .= '<Application>Microsoft Excel</Application>';
        $xml .= '<DocSecurity>0</DocSecurity>';
        $xml .= '<ScaleCrop>false</ScaleCrop>';
        $xml .= '<HeadingPairs><vt:vector size="2" baseType="variant"><vt:variant><vt:lpstr>Worksheets</vt:lpstr></vt:variant><vt:variant><vt:i4>' . count($this->sheets) . '</vt:i4></vt:variant></vt:vector></HeadingPairs>';
        $xml .= '<TitlesOfParts><vt:vector size="' . count($this->sheets) . '" baseType="lpstr">';
        foreach ($this->sheet_names as $s_name) {
            $xml .= '<vt:lpstr>' . $this->esc($s_name) . '</vt:lpstr>';
        }
        $xml .= '</vt:vector></TitlesOfParts>';
        $xml .= '<Company>' . $this->esc($this->doc_company) . '</Company>';
        $xml .= '<Manager>' . $this->esc($this->doc_manager) . '</Manager>';
        $xml .= '<LinksUpToDate>false</LinksUpToDate>';
        $xml .= '<SharedDoc>false</SharedDoc>';
        $xml .= '<HyperlinksChanged>false</HyperlinksChanged>';
        $xml .= '<AppVersion>16.0300</AppVersion>';
        $xml .= '</Properties>';
        return $xml;
    }

    protected function buildCore()
    {
        $xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' . "\n";
        $xml .= '<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">';
        $xml .= '<dc:title>' . $this->esc($this->doc_title) . '</dc:title>';
        $xml .= '<dc:subject>' . $this->esc($this->doc_subject) . '</dc:subject>';
        $xml .= '<dc:creator>' . $this->esc($this->doc_creator) . '</dc:creator>';
        $xml .= '<cp:keywords>' . $this->esc($this->doc_keywords) . '</cp:keywords>';
        $xml .= '<dc:description>' . $this->esc($this->doc_description) . '</dc:description>';
        $xml .= '<cp:lastModifiedBy>' . $this->esc($this->doc_last_modified_by) . '</cp:lastModifiedBy>';
        $xml .= '<dcterms:created xsi:type="dcterms:W3CDTF">' . gmdate('Y-m-d\TH:i:s\Z', $this->doc_created) . '</dcterms:created>';
        $xml .= '<dcterms:modified xsi:type="dcterms:W3CDTF">' . gmdate('Y-m-d\TH:i:s\Z') . '</dcterms:modified>';
        $xml .= '<cp:category>' . $this->esc($this->doc_category) . '</cp:category>';
        $xml .= '<cp:contentStatus>Final</cp:contentStatus>';
        $xml .= '</cp:coreProperties>';
        return $xml;
    }

    protected function buildWorkbook()
    {
        $xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' . "\n";
        $xml .= '<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">';
        $xml .= '<fileVersion appName="xl" lastEdited="6" lowestEdited="6" rupBuild="14420"/>';
        $xml .= '<workbookPr defaultThemeVersion="164011"/>';
        $xml .= '<bookViews><workbookView activeTab="' . $this->active_sheet_id . '"/></bookViews>';
        $xml .= '<sheets>';
        foreach ($this->sheet_names as $s_idx => $s_name) {
            $xml .= '<sheet name="' . $this->esc($s_name) . '" sheetId="' . ($s_idx + 1) . '" r:id="rId' . ($s_idx + 1) . '"/>';
        }
        $xml .= '</sheets>';
        $xml .= '<definedNames/>';
        $xml .= '</workbook>';
        return $xml;
    }

    protected function buildStyles()
    {
        $xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' . "\n";
        $xml .= '<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">';
        $xml .= '<numFmts count="0"/>';
        $xml .= '<fonts count="' . count($this->package['styles']['fonts']) . '">';
        foreach ($this->package['styles']['fonts'] as $font) {
            $xml .= '<font><sz val="' . $font['size'] . '"/><color theme="1"/><name val="' . $font['name'] . '"/><family val="' . $font['family'] . '"/><scheme val="minor"/></font>';
        }
        $xml .= '</fonts>';
        $xml .= '<fills count="' . count($this->package['styles']['fills']) . '">';
        foreach ($this->package['styles']['fills'] as $fill) {
            $xml .= '<fill><patternFill patternType="' . $fill['pattern'] . '"/></fill>';
        }
        $xml .= '</fills>';
        $xml .= '<borders count="' . count($this->package['styles']['borders']) . '">';
        foreach ($this->package['styles']['borders'] as $border) {
            $xml .= '<border><left/><right/><top/><bottom/><diagonal/></border>';
        }
        $xml .= '</borders>';
        $xml .= '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>';
        $xml .= '<cellXfs count="' . count($this->package['styles']['cell_xfs']) . '">';
        foreach ($this->package['styles']['cell_xfs'] as $xf) {
            $xml .= '<xf numFmtId="' . $xf['num_fmt_id'] . '" fontId="' . $xf['font_id'] . '" fillId="' . $xf['fill_id'] . '" borderId="' . $xf['border_id'] . '" xfId="0" applyNumberFormat="1"/>';
        }
        $xml .= '</cellXfs>';
        $xml .= '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>';
        $xml .= '<dxfs count="0"/>';
        $xml .= '<tableStyles count="0" defaultTableStyle="TableStyleMedium2" defaultPivotStyle="PivotStyleLight16"/>';
        $xml .= '</styleSheet>';
        return $xml;
    }

    protected function buildSharedStrings()
    {
        $xml = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' . "\n";
        $xml .= '<sst xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" count="' . count($this->package['shared_strings']) . '" uniqueCount="' . count($this->package['shared_strings']) . '">';
        foreach ($this->package['shared_strings'] as $s) {
            $xml .= '<si><t>' . $this->esc($s) . '</t></si>';
        }
        $xml .= '</sst>';
        return $xml;
    }

    protected function esc($str)
    {
        return htmlspecialchars($str, ENT_QUOTES | ENT_XML1, 'UTF-8');
    }

    protected function num2name($num)
    {
        $numeric = ($num - 1) % 26;
        $letter = chr(65 + $numeric);
        $num2 = (int) (($num - 1) / 26);
        if ($num2 > 0) {
            return $this->num2name($num2) . $letter;
        }
        return $letter;
    }

    protected function convertDateTime($datetime)
    {
        $days = floor($datetime->format('U') / 86400) + 25569;
        $time = $datetime->format('U') / 86400 - $days + 25569;
        return $days + $time;
    }
}
