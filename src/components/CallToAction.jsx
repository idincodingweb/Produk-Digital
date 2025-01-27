import React from 'react';
import { motion } from 'framer-motion';

const CallToAction = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="py-16 bg-gradient-to-r from-purple-500 to-purple-700 text-white"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Siap untuk Memulai Petualangan Bisnis Digital?
        </h2>
        <p className="text-lg mb-8">
          Bergabunglah dengan ribuan orang lainnya dan temukan produk digital favoritmu
          sekarang juga!
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          className="bg-white text-purple-700 font-bold py-3 px-8 rounded-full hover:bg-gray-100"
        >
          Daftar Sekarang
        </motion.button>
      </div>
    </motion.section>
  );
};

export default CallToAction;