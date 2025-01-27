import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <motion.section
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="py-20 bg-gray-50 h-screen flex flex-col justify-center items-center"
    >
      <div className="text-center">
          <div className="relative inline-block">
            <div className="text-9xl md:text-[20rem] font-bold text-purple-700 relative overflow-hidden notfound-text">404
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-700 mix-blend-screen filter blur-sm notfound-animation"></div>
            </div>
          </div>

        <p className="text-gray-700 text-xl mb-8">
          Oops! Halaman yang Anda cari tidak ditemukan.
        </p>
        <Link
           to="/"
           className="bg-purple-500 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-200 inline-block"
        >
            Kembali ke Beranda
        </Link>
      </div>
    </motion.section>
  );
};

export default NotFound;