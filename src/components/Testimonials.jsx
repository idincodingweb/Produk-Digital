import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
    const carouselRef = useRef(null);

    useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('/data/testimonials.json');
              const data = await response.json();
              setTestimonials(data);
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
        <h2 className="text-3xl font-bold text-center mb-8">Apa Kata Mereka?</h2>

          <div className="relative overflow-hidden">
            <div className="flex overflow-x-auto space-x-6 mb-4" ref={carouselRef}>
            {testimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="bg-white shadow-md rounded-lg p-6 w-96 flex-shrink-0"
                  initial={{ opacity: 0, x: -50 }}
                   animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
              >
                <p className="text-gray-700 italic mb-4">{`"${testimonial.quote}"`}</p>
                <div className="flex items-center">
                    {testimonial.image &&
                        <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                    }
                  <p className="text-gray-600 font-semibold">{testimonial.name}</p>
                </div>
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
      </div>
    </section>
  );
};

export default Testimonials;