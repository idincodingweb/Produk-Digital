import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBook,
    faCode,
    faBriefcase,
    faHeart,
    faBrain,
} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CategoryCard = ({ category }) => {
    const getIcon = (iconName) => {
        switch (iconName) {
          case 'faBook':
            return faBook;
          case 'faCode':
            return faCode;
          case 'faBriefcase':
            return faBriefcase;
          case 'faHeart':
            return faHeart;
          case 'faBrain':
            return faBrain;
          default:
            return faBook;
        }
      };
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center text-center"
        >
            <div className="text-4xl text-purple-600 mb-4">
                <FontAwesomeIcon icon={getIcon(category.icon)} />
            </div>
            <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <Link
                to={category.link}
                className="bg-purple-500 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full transition-colors duration-200"
            >
                Jelajahi
            </Link>
        </motion.div>
    );
};


const FeaturedCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('/data/data.json');
              const data = await response.json();
              setCategories(data.categories);
          } catch (error) {
              console.error('Error fetching data:', error);
          }
      };
      fetchData();
    }, []);

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">
                    Kategori Produk Digital
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedCategories;