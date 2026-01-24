import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Cloud } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const navLinks = [
        { name: 'Product', path: '/product' },
        { name: 'About', path: '/about' }, // Assuming these routes exist or will link to sections
        { name: 'Pricing', path: '/pricing' },
        { name: 'Contact', path: '/contact' },
        { name: 'Blog', path: '/blog' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 font-sans pointer-events-none">
            <div className="w-full max-w-[1400px] bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0px_8px_24px_-4px_rgba(0,0,0,0.08)] rounded-full pointer-events-auto">
                <div className="flex justify-between items-center h-[68px] px-2 pl-6 pr-2">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 group">
                        <img src="/logos/stellar-logo.png" alt="Stellar" className="w-7 h-7" />
                        <span className="text-xl font-bold text-secondary tracking-tight">
                            Stellar
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`px-5 py-2 rounded-full text-[15px] font-medium transition-all duration-200 ${isActive(link.path)
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
                            className="text-[15px] font-medium text-secondary hover:text-primary transition-colors px-5 py-2.5"
                        >
                            Sign in
                        </Link>
                        <Link to="/signup">
                            <Button variant="secondary" className="rounded-full px-6 py-2.5 bg-gray-50 text-secondary hover:bg-gray-100 border-transparent shadow-sm text-[15px]">
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
        </nav>
    );
};

export default Navbar;
