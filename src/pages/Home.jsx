import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustSection from '../components/TrustSection';
import FeaturesSection from '../components/FeaturesSection';
import BigFeaturesSection from '../components/BigFeaturesSection';
import SolutionSection from '../components/SolutionSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <main>
                <Hero />
                <TrustSection />
                <FeaturesSection />
                <BigFeaturesSection />
                <SolutionSection />
                <CTASection />
            </main>
        </div>
    );
};

export default Home;
