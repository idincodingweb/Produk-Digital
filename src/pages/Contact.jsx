import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Lokasi from '../components/LocationMap';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:idincode@gmail.com?subject=Pesan dari Pengguna DigitalStore&body=Nama: ${name}%0AEmail: ${email}%0APesan: ${message}`;
    window.location.href = mailtoLink;
  };


    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="py-16 bg-gray-50"
      >
        <div className="container min-h-100 mx-auto px-4">
         <Link to="/" className="inline-flex items-center mb-4 text-purple-600 hover:text-purple-800">
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              Kembali
          </Link>
          <h2 className="text-3xl font-bold text-center mb-8">Hubungi Kami</h2>
          <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Pesan
                </label>
                <textarea
                  id="message"
                  className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-purple-500"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-purple-500 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md w-full transition-colors duration-200"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
         <Lokasi /> 
        </div>
      </motion.section>
    );
  };

  export default Contact;