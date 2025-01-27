import React from 'react';
import { motion } from 'framer-motion';
import Lokasi from '../components/LocationMap';

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-6">Tentang Kami</h2>
          <p className="text-gray-700 mb-6">
            Selamat datang di DigitalStore, platform terpercaya untuk menemukan
            berbagai produk digital berkualitas yang dirancang untuk memberdayakan
            kreativitas dan pertumbuhan bisnis Anda. Kami hadir untuk
            memudahkan Anda mengakses sumber daya terbaik di dunia digital.
          </p>
          <p className="text-gray-700 mb-6">
            DigitalStore lahir dari sebuah keyakinan bahwa pengetahuan dan alat
            digital yang hebat harus mudah diakses oleh semua orang. Kami
            berkomitmen untuk menyediakan berbagai pilihan produk digital, mulai
            dari template yang efisien, panduan praktis, hingga kursus
            interaktif yang akan membantu Anda mencapai tujuan digital Anda.
          </p>
          <p className="text-gray-700 mb-6">
            Kami mengutamakan kualitas, keterjangkauan, dan kepuasan pelanggan.
            Kami bekerja keras untuk memastikan setiap produk digital di platform
            kami memenuhi standar tertinggi, serta memberikan pengalaman belanja
            yang aman dan menyenangkan.
          </p>
          <p className="text-gray-700 mb-6">
            Di DigitalStore, Anda akan menemukan beragam produk yang akan
            memudahkan Anda dalam berkarya, belajar, dan mengembangkan bisnis
            Anda. Kami hadir untuk mendukung setiap langkah Anda dalam perjalanan
            digital Anda.
          </p>
          <p className="text-gray-700 mb-6">
            Terima kasih telah memilih DigitalStore sebagai mitra digital Anda.
            Mari bersama kita menjelajahi dunia produk digital dan mencapai
            kesuksesan bersama!
          </p>
          <p className="text-gray-700 mt-8 font-medium">
           Website ini dikembangkan oleh <span className="font-bold text-purple-700">Idin Iskandar</span>.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://raw.githubusercontent.com/idincodingweb/packgambar/refs/heads/main/netflic/idincuy.jpg"
            alt="Gambar Tentang Kami"
            className="rounded-xl shadow-xl w-80"
          />
        </div>
       <Lokasi />
      </div>
    </motion.section>
  );
};

export default About;