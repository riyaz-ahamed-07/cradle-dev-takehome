import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { Home, Search } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            <section className="pt-32 pb-24 font-sans">
                <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-8">
                        <h1 className="text-[120px] md:text-[160px] font-bold text-primary/20 leading-none">
                            404
                        </h1>
                    </div>

                    <h2 className="text-[40px] md:text-[48px] font-medium text-secondary tracking-tight mb-4">
                        Page not found
                    </h2>

                    <p className="text-secondary-gray text-lg mb-8 max-w-md mx-auto">
                        Sorry, we couldn't find the page you're looking for. Perhaps you've mistyped the URL or the page has been moved.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/">
                            <Button variant="primary" className="rounded-full px-8 py-4">
                                <Home size={18} className="mr-2" />
                                Go Home
                            </Button>
                        </Link>
                        <Link to="/contact">
                            <Button variant="secondary" className="rounded-full px-8 py-4 border-gray-200">
                                <Search size={18} className="mr-2" />
                                Contact Support
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default NotFound;
