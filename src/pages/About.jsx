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
            Selamat datang di <span className="font-semibold text-purple-700">DigitalStore</span> — tempat di mana file digital lebih berharga daripada mantan 🤭.  
            Di sini kamu bisa nemuin segala jenis produk digital dari template kece sampai panduan sakti yang bisa bikin kamu auto jago.
          </p>
          <p className="text-gray-700 mb-6">
            Kami percaya hidup udah cukup berat, jadi cari produk digital jangan dibikin susah. Makanya, semua isi toko ini udah kami kurasi dengan penuh cinta... dan sedikit kopi ☕.
          </p>
          <p className="text-gray-700 mb-6">
            Mau jadi content creator, editor, dropshipper, anak skena AI, atau sekadar nyari preset buat ngedit biar kelihatan liburan padahal di kos — DigitalStore siap nemenin perjalanan digital kamu.
          </p>
          <p className="text-gray-700 mb-6">
            Semua produk di sini legal, gak tipu-tipu, dan udah dicoba langsung. Kalau berhasil bikin kamu makin produktif, kami senang. Kalau gak, coba beli dua kali... siapa tau efeknya dobel 🤣
          </p>
          <p className="text-gray-700 mb-6">
            Terima kasih udah mampir. Kalau kamu puas, share ke teman. Kalau kamu kecewa, share juga... siapa tau dia suka.  
            Pokoknya jangan sayangin mantan — sayangin disk space kamu.
          </p>
          <p className="text-gray-700 mt-8 font-medium">
            Website ini dikembangkan oleh <span className="font-bold text-purple-700">Idin Iskandar</span> — developer rumahan yang skill-nya lebih tajam dari cutter isi ulang.
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
