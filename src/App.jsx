import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CategoryDetail from './components/CategoryDetail';
import BestsellersPage from './pages/BestsellersPage';
import Kategori from './components/FeaturedCategories';
import NewReleasesPage from './pages/NewReleasesPage';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';

function App() {
    return (
        <Router> 
        <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories/:id" element={<CategoryDetail />} />
              <Route path="/bestsellers" element={<BestsellersPage />} />
              <Route path="/kategori" element={<Kategori />} />
              <Route path="/new-releases" element={<NewReleasesPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes> 
          <Footer />
        </Router>
    );
}

export default App;