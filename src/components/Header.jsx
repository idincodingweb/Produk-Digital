import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import Logo from '../assets/images/PhotoRoom-20250127_050052.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md relative">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
{/*          <img src={Logo} alt="Logo" className="h-8 mr-2" /> */}
          <span className="font-bold text-xl text-blue-950">Digital</span>
          <span className="font-bold text-xl text-purple-700">Store</span>
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-purple-700 py-2">Beranda</Link>
          <Link to="/new-releases" className="text-gray-700 hover:text-purple-700 py-2">Produk</Link>
          <Link to="/about" className="text-gray-700 hover:text-purple-700 py-2">Tentang</Link>
          <Link to="/contact" className="text-gray-700 hover:text-purple-700 py-2">Kontak</Link>
        </nav>
        {/* Mobile Menu and Toggle */}
         <div className="flex items-center md:hidden">
            <button onClick={toggleMobileMenu} className="focus:outline-none text-gray-700">
              {isMobileMenuOpen ? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
            </button>
          </div>
        {/* Mobile Menu */}
        <motion.div
            className={`absolute top-full right-0 left-0 bg-white shadow-md p-4 mt-2 rounded-md z-50 md:hidden  ${
              isMobileMenuOpen ? 'block' : 'hidden'
            }`}
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <nav className="flex flex-col space-y-2">
            <Link to="/" className="text-gray-700 hover:text-purple-700 block py-2" onClick={toggleMobileMenu}>Beranda</Link>
             <Link to="/new-releases" className="text-gray-700 hover:text-purple-700 block py-2" onClick={toggleMobileMenu}>Produk</Link>
            <Link to="/about" className="text-gray-700 hover:text-purple-700 block py-2" onClick={toggleMobileMenu}>Tentang</Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-700 block py-2" onClick={toggleMobileMenu}>Kontak</Link>
          </nav>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;