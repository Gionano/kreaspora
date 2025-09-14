import React from 'react';
import Image from 'next/image';
import styles from '../../styles/LoadingScreen.module.css';

const LoadingScreen = ({ progress, isFadingOut }) => {
  const iconLeftPosition = `calc(${progress}% - 25px)`;

  // Gabungkan class, tambahkan class 'fadingOut' jika isFadingOut true
  const overlayClasses = `${styles.loadingOverlay} ${isFadingOut ? styles.fadingOut : ''}`;

  return (
    <div className={overlayClasses}>
      <div className={styles.loadingContainer}>
        <div className={styles.icon} style={{ left: iconLeftPosition }}>
          <Image src="/loading/icon_loading.png" alt="Loading Icon" width={50} height={50} unoptimized />
        </div>
        <div className={styles.progressBarContainer}>
          <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;