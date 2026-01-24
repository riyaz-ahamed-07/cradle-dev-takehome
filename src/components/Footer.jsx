import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-white pt-36 pb-10 border-t border-gray-100 font-sans">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-16 mb-16">

                    {/* Div 1 - Brand Column */}
                    <div className="pr-0 md:pr-10 text-center md:text-left">
                        <Link to="/" className="flex items-center justify-center md:justify-start space-x-2 mb-6">
                            <img src="/logos/stellar-logo.png" alt="Stellar" className="w-10 h-10" />
                            <span className="text-[32px] font-bold text-secondary tracking-tight">
                                Stellar
                            </span>
                        </Link>
                        <p className="text-secondary-gray text-[16px] leading-relaxed mb-6 max-w-xs mx-auto md:mx-0">
                            Experience the Stellar difference and unlock the true potential.
                        </p>
                    </div>

                    {/* Div 2 - Navigation Columns */}
                    <div className="flex-1 pl-0 md:pl-[200px] pr-0">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-23 text-center md:text-left">


                            {/* Column 2 - Stellar Page */}
                            <div>
                                <h4 className="text-[16px] font-semibold text-secondary mb-6">Stellar Page</h4>
                                <ul className="space-y-8">
                                    <li><Link to="/" className="text-[16px] text-secondary-gray hover:text-primary transition-colors">Home</Link></li>
                                    <li><Link to="/about" className="text-[16px] text-secondary-gray hover:text-primary transition-colors">About</Link></li>
                                    <li><Link to="/pricing" className="text-[16px] text-secondary-gray hover:text-primary transition-colors">Pricing</Link></li>
                                </ul>
                            </div>

                            {/* Column 3 - Product */}
                            <div>
                                <h4 className="text-[16px] font-semibold text-secondary mb-6">Product</h4>
                                <ul className="space-y-8">
                                    <li><Link to="/contact" className="text-[16px] text-secondary-gray hover:text-primary transition-colors">Contact</Link></li>
                                    <li><Link to="/blog" className="text-[16px] text-secondary-gray hover:text-primary transition-colors">Blog</Link></li>
                                    <li><Link to="/product" className="text-[16px] text-secondary-gray hover:text-primary transition-colors">Product</Link></li>
                                </ul>
                            </div>

                            {/* Column 4 - Resources */}
                            <div>
                                <h4 className="text-[16px] font-semibold text-secondary mb-6">Resources</h4>
                                <ul className="space-y-8">
                                    <li><Link to="/integration" className="text-[16px] text-secondary-gray hover:text-primary transition-colors">Integration</Link></li>
                                    <li><Link to="/integration-detail" className="text-[16px] text-secondary-gray hover:text-primary transition-colors">Integration Detail</Link></li>
                                    <li><Link to="/signup" className="text-[16px] text-secondary-gray hover:text-primary transition-colors">Sign Up</Link></li>
                                </ul>
                            </div>

                            {/* Column 5 - Company */}
                            <div>
                                <h4 className="text-[16px] font-semibold text-secondary mb-6">Company</h4>
                                <ul className="space-y-8">
                                    <li><Link to="/login" className="text-[16px] text-secondary-gray hover:text-primary transition-colors">Login</Link></li>
                                    <li><Link to="/404" className="text-[16px] text-secondary-gray hover:text-primary transition-colors">404</Link></li>
                                    <li><Link to="/templates" className="text-[16px] text-secondary-gray hover:text-primary transition-colors">More Templates</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="pt-8 px-4 md:px-[170px] border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2 text-xs text-secondary-subtle">
                    <span>Copyright © 2026</span>
                    <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                    <span>Riyaz.co</span>
                </div>

                <div className="flex items-center space-x-4">
                    {[Facebook, Twitter, Instagram].map((Icon, idx) => (
                        <a key={idx} href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                            <Icon size={18} fill={idx < 2 ? "currentColor" : "none"} />
                        </a>
                    ))}
                </div>
            </div>
        </footer >
    )

};

export default Footer;
