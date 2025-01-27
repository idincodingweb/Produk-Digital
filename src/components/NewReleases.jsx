import React, { useState, useEffect, useRef } from 'react';
import {  } from 'react-router-dom';
import { motion } from 'framer-motion';

const NewReleases = () => {
  const [newReleases, setNewReleases] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/data.json');
        const data = await response.json();
        // ambil semua data ebooks dari setiap kategori dan combine
        let allEbooks = [];
        data.categories.forEach(category => {
            if(category.ebooks){
                allEbooks = allEbooks.concat(category.ebooks)
            }
        });
        // ambil 3 data pertama sebagai new release
        const newReleasesData = allEbooks.slice(0, 3);
        setNewReleases(newReleasesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

    // Function to scroll carousel left or right
    const scrollCarousel = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = carouselRef.current.offsetWidth * 0.8; // scroll 80% of viewport
            const currentScrollLeft = carouselRef.current.scrollLeft;
            const newScrollLeft = direction === "left" ? currentScrollLeft - scrollAmount : currentScrollLeft + scrollAmount;

            carouselRef.current.scrollTo({
                left: newScrollLeft,
                behavior: "smooth",
            });
        }
    };


  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Rilis Terbaru</h2>
        <div className="relative overflow-hidden">
            <div className="flex overflow-x-auto space-x-6 mb-4" ref={carouselRef}>
            {newReleases.map((ebook) => (
                  <motion.div
                      key={ebook.id}
                      className="bg-white shadow-md rounded-lg p-4 w-72 flex-shrink-0"
                       whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                  >
                      <img
                        src={ebook.image}
                        alt={ebook.title}
                        className="w-full h-48 object-cover mb-4 rounded-md"
                      />
                      <h3 className="text-xl font-semibold mb-2">{ebook.title}</h3>
                      <p className="text-gray-600 mb-2">By {ebook.author}</p>
                      <a
                         href={ebook.link}
                         target="_blank"
                          rel="noopener noreferrer"
                         className="bg-purple-500 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-200 inline-block"
                        >
                         Lihat Detail
                        </a>
                  </motion.div>
              ))}
          </div>
          <div className="absolute top-0 bottom-0 left-0 flex items-center">
                <button onClick={() => scrollCarousel("left")} className="bg-white bg-opacity-50 p-2 rounded-full">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
            </div>
            <div className="absolute top-0 bottom-0 right-0 flex items-center justify-end">
                 <button onClick={() => scrollCarousel("right")} className="bg-white bg-opacity-50 p-2 rounded-full">
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                     </svg>
                 </button>
            </div>
        </div>
        <div className="text-center mt-8">
          <a
            href="/new-releases"
            className="text-purple-600 hover:text-purple-800 font-semibold"
             target="_blank"
            rel="noopener noreferrer"
          >
            Lihat Semua Rilis Terbaru
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewReleases;