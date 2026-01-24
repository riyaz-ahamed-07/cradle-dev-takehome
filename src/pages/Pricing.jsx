import React from 'react';
import PricingCard from '../components/PricingCard';

const Pricing = () => {
    const pricingTiers = [
        {
            title: 'Developer',
            price: '16.00',
            bandwidth: '5GB',
            support: '48',
            discount: '15%',
            buttonText: 'Read the Docs',
            highlight: false,
        },
        {
            title: 'Essential',
            price: '24.00',
            bandwidth: '10GB',
            support: '56',
            discount: '15%',
            buttonText: 'Read the Docs',
            highlight: false,
        },
        {
            title: 'Business',
            price: '32.00',
            bandwidth: '15GB',
            support: '64',
            discount: '50%',
            buttonText: 'Contact Sales',
            highlight: true,
        },
        {
            title: 'Premium',
            price: '40.00',
            bandwidth: '20GB',
            support: '72',
            discount: '15%',
            buttonText: 'Read the Docs',
            highlight: false,
        },
    ];

    return (
        <div className="relative pt-32 pb-20 px-4 bg-gradient-to-b from-gray-50 to-white font-sans overflow-hidden">
            {/* Grid Background */}
            <div
                className="hidden lg:block absolute inset-0 z-0 bottom-0 h-[100%] pointer-events-none opacity-20"
                style={{
                    backgroundImage: 'url(/images/grid-bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center bottom',
                    backgroundRepeat: 'no-repeat',
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                }}
            ></div>
            {/* Grid Background (Inverted) */}
            <div
                className="hidden lg:block absolute inset-0 z-0 bottom-0 h-[70%] pointer-events-none opacity-20"
                style={{
                    backgroundImage: 'url(/images/grid-bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center bottom',
                    backgroundRepeat: 'no-repeat',
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)',
                    transform: 'scaleY(-1)'
                }}
            ></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-primary font-semibold text-sm mb-4">Our Pricing</p>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-secondary">
                        Pricing built to suit all <br className="hidden sm:block" />
                        types of{' '}
                        <span className="bg-primary text-white px-6 py-1 rounded-full inline-block mt-2">
                            business
                        </span>
                    </h1>
                    <p className="text-secondary-gray max-w-xl mx-auto text-lg">
                        Embrace the future of technology with Stellar. Our innovative SaaS template empowers businesses.
                    </p>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {pricingTiers.map((tier, index) => (
                        <PricingCard key={index} {...tier} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;
