import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-50/30 to-white flex items-center justify-center px-4 relative overflow-hidden">
            {/* Background Grid */}
            <div
                className="hidden lg:block absolute inset-0 z-0 pointer-events-none opacity-[0.08]"
                style={{
                    backgroundImage: 'url(/images/grid-bg.png)',
                    backgroundSize: '50%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'repeat'
                }}
            ></div>
            <div className="max-w-2xl mx-auto text-center relative z-10">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                    <Mail size={40} className="text-primary" />
                </div>

                <h1 className="text-[48px] md:text-[64px] leading-[1.1] font-medium text-secondary tracking-tight mb-6">
                    Contact Us
                </h1>

                <p className="text-secondary-gray text-lg mb-8 leading-relaxed">
                    This page is currently under development. Check back soon for our contact details and support channels.
                </p>

                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                >
                    <ArrowLeft size={20} />
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default Contact;
