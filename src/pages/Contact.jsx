import React from 'react';
import CTASection from '../components/CTASection';
import ContactInfo from '../components/Contact';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-white">
                {/* Bottom Grid Background */}
                <div
                    className="hidden lg:block absolute inset-x-0 bottom-0 h-[100%] z-0 pointer-events-none opacity-15"
                    style={{
                        backgroundImage: 'url(/images/grid-bg.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center bottom',
                        backgroundRepeat: 'no-repeat'
                    }}
                ></div>
                {/* Bottom Grid Background */}
                <div
                    className="hidden lg:block absolute inset-x-0 top-0 h-[70%] z-0 pointer-events-none opacity-15"
                    style={{
                        backgroundImage: 'url(/images/grid-bg.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center bottom',
                        backgroundRepeat: 'no-repeat',
                        transform: 'scaleY(-1)'
                    }}
                ></div>

                <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
                    {/* Top Text */}
                    <span className="text-[#7C5CFC] font-medium text-sm mb-6 animate-fade-in-up tracking-wide">
                        Get in Touch
                    </span>

                    {/* Headline */}
                    <h1 className="max-w-4xl mx-auto text-[54px] md:text-[70px] leading-[1.15] font-medium text-secondary tracking-tight mb-6 animate-fade-in-up delay-100">
                        Let's build something <br />
                        <span className="inline-flex items-center justify-center px-6 py-6 rounded-full bg-[#7C5CFC] text-white text-3xl md:text-[50px] font-medium align-middle shadow-xl shadow-[#7C5CFC]/25">amazing</span> together
                    </h1>

                    {/* Subheadline */}
                    <p className="max-w-xl mx-auto text-[20px] text-secondary-gray leading-relaxed mb-12 animate-fade-in-up delay-200">
                        Have a question or want to work together? We'd love to hear from you.
                    </p>
                </div>
            </section>

            {/* Contact Form & Info Section */}
            <section className="py-24 bg-white">
                <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <ContactForm />

                        {/* Contact Information */}
                        <ContactInfo />

                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
};

export default Contact;
