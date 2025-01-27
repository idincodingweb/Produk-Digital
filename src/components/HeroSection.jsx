import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import Banner from '../assets/images/Banner.png';

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-purple-50 relative py-16"
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            Temukan Koleksi Produk<span className="text-purple-700">Digital</span> Terbaik
            <br />
            dan Tingkatkan Pengetahuanmu
          </h1>
          <p className="text-gray-700 mb-6">
            Jelajahi berbagai produk digital menarik dan dapatkan manfaat yang luar biasa.
          </p>
          <ul className="mb-6 text-gray-700">
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faCheck} className="text-purple-500 mr-2" />
              Akses ribuan produk digital berkualitas
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faCheck} className="text-purple-500 mr-2" />
              Harga terjangkau dan promo menarik
            </li>
            <li className="flex items-center mb-2">
              <FontAwesomeIcon icon={faCheck} className="text-purple-500 mr-2" />
              Pembayaran mudah dan aman
            </li>
          </ul>
          <div className="flex items-center justify-center lg:justify-start gap-4">
            <button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-700 hover:to-purple-900 text-white font-bold py-2 px-4 rounded-full flex items-center">
              <FontAwesomeIcon icon={faWhatsapp} className="mr-2" />
              Mulai Sekarang
              <FontAwesomeIcon icon={faPlay} className="ml-2" />
            </button>
            <a href="/new-releases"><button className="text-purple-700 font-semibold hover:text-purple-900">
              Lihat Koleksi
            </button></a>
          </div>
        </div>
         <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <motion.img
              src={Banner} // Ganti dengan path gambar hero
              alt="Gambar Produk Digital"
              className="rounded-xl shadow-xl z-10 w-80"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>     
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-purple-50 to-transparent -z-10"></div>
    </motion.section>
  );
};

export default Hero;