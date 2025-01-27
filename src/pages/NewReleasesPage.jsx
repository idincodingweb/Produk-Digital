import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons';

const NewReleasesPage = () => {
  const [newReleases, setNewReleases] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredEbooks, setFilteredEbooks] = useState([]);

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
         // ambil semua data sebagai new releases
         const newReleasesData = allEbooks
        setNewReleases(newReleasesData);
        setFilteredEbooks(newReleasesData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
     const filtered = newReleases.filter((ebook) =>
      ebook.title.toLowerCase().includes(term) || ebook.author.toLowerCase().includes(term)
    );
    setFilteredEbooks(filtered);
  };


  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center mb-4 text-purple-600 hover:text-purple-800">
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Kembali
        </Link>
        <h2 className="text-3xl font-bold text-center mb-8">
          Semua Produk Terbaru
        </h2>

          <div className="relative mb-8">
             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
              </div>
            <input
              type="text"
              placeholder="Cari produk atau kreator..."
              value={searchTerm}
              onChange={handleSearch}
             className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-purple-500"
            />
        </div>


        {filteredEbooks.length === 0 ? (
          <p className="text-center text-gray-500">Tidak ada hasil.</p>
        ) : (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEbooks.map((ebook) => (
                <div key={ebook.id} className="bg-white shadow-md rounded-lg p-4">
                  <img src={ebook.image} alt={ebook.title} className="w-full h-48 object-cover mb-4 rounded-md" />
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
               </div>
              ))}
            </div>
        )}
      </div>
    </section>
  );
};

export default NewReleasesPage;