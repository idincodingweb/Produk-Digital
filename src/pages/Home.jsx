import React from 'react';
import HeroSection from '../components/HeroSection';
import Kategori from '../components/FeaturedCategories';
import NewReleases from '../components/NewReleases';
import Bestsellers from '../components/Bestsellers';
import CallToAction from '../components/CallToAction';
import Testimonials from '../components/Testimonials';

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Kategori />
            <NewReleases />
            <Bestsellers />
            <CallToAction />
            <Testimonials />
        </div>
    );
};

export default Home;