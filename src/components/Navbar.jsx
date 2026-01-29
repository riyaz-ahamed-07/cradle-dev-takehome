import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cloud } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Product', path: '/product' },
        { name: 'About', path: '/about' }, 
        { name: 'Pricing', path: '/pricing' },
        { name: 'Contact', path: '/contact' },
        { name: 'Blog', path: '/blog' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 font-sans pointer-events-none">
            <div className="w-full max-w-[1412px] bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0px_8px_24px_-4px_rgba(0,0,0,0.08)] rounded-full pointer-events-auto p-[3px]">
                <div className="bg-white/50 rounded-full ring-1 ring-inset ring-gray-200">
                    <div className="flex justify-between items-center h-[87.8px] px-3 pl-7 pr-3">
                        {/* Logo */}
                        <Link to="/" className="flex items-center group hover:opacity-90">
                            <img
                                src="https://framerusercontent.com/images/0t8Da9ETUZiEi292CMutAP6vrM.svg"
                                alt="Stellar"
                                className="h-10 w-auto"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden ml-8 md:flex items-center space-x-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`px-5 py-2 rounded-full text-[18px] font-semibold transition-all duration-200 ${isActive(link.path)
                                        ? 'text-primary bg-primary/5'
                                        : 'text-secondary-gray hover:text-primary hover:bg-gray-50'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        <div className="hidden md:flex items-center space-x-2">
                            <Link
                                to="/login"
                                className="text-[16px] font-semibold text-secondary hover:text-primary transition-colors px-5 py-2.5"
                            >
                                Sign in
                            </Link>
                            <Link to="/signup">
                                <Button variant="secondary" className="rounded-full px-6 py-2.5 mr-4 bg-gray-50 text-secondary hover:bg-gray-100 border border-gray-200 shadow-sm text-[16px]">
                                    Sign up for free
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden pr-4 z-50">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-secondary-gray hover:text-primary transition-colors p-2 relative"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div className="fixed inset-0 bg-white z-40 md:hidden pt-24 px-6 overflow-y-auto pointer-events-auto">
                        <div className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`block text-lg font-medium py-2 border-b border-gray-50 ${isActive(link.path)
                                        ? 'text-primary'
                                        : 'text-secondary hover:text-primary'
                                        }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-8 flex flex-col space-y-4">
                                <Link
                                    to="/login"
                                    className="w-full text-center py-3 text-secondary font-medium border border-gray-200 rounded-full hover:bg-gray-50 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Sign in
                                </Link>
                                <Link to="/signup" onClick={() => setIsOpen(false)}>
                                    <Button className="w-full justify-center py-3 rounded-full text-base">
                                        Sign up for free
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
