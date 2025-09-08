import React from 'react';
import { Mail, Phone, MapPin, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <motion.section
      id="kontak"
      className="relative py-20 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-400 to-green-500 bg-clip-text text-transparent">
          Mari Bergabung
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <Mail className="w-8 h-8 text-teal-400 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Email</h3>
            <p className="text-gray-300">mpkosis@sekolah.sch.id</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <Phone className="w-8 h-8 text-lime-400 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Telepon</h3>
            <p className="text-gray-300">semna bokep</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
            <MapPin className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Lokasi</h3>
            <p className="text-gray-300">Just Kidding</p>
          </div>
        </div>

        <button className="bg-gradient-to-r from-teal-500 to-green-600 px-12 py-4 rounded-full text-lg font-semibold hover:from-teal-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto">
          Hubungi Guweh Sekarang Juga
          <Star className="ml-2 w-5 h-5 animate-spin" />
        </button>
      </div>
    </motion.section>
  );
};

export default Contact;
