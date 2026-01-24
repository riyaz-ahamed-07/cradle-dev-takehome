import React from 'react';
import { Check } from 'lucide-react';

const PricingCard = ({ title, price, bandwidth, support, highlight, discount, buttonText }) => {
    return (
        <div className="px-8 py-8 rounded-3xl border border-gray-100 shadow-md hover:shadow-lg transition-all h-full flex flex-col bg-white">
            {/* Card Header */}
            <div className="mb-8">
                <h2 className="text-[24px] font-semibold mb-3 text-secondary">{title}</h2>
                <p className="text-[16px] text-secondary-gray leading-relaxed">
                    Unlock the power of data analytics and gain actionable insights.
                </p>
            </div>

            {/* Discount Badge */}
            <div className="mb-5">
                <div className={`inline-block px-4 py-2 rounded-full text-xs font-bold ${highlight ? 'bg-primary/10 text-primary' : 'bg-gray-100 text-secondary'
                    }`}>
                    Save up to {discount}
                </div>
            </div>

            {/* Price */}
            <div className="mb-10">
                <span className="text-4xl font-semibold text-secondary">${price}</span>
                <span className="text-gray-400 text-sm ml-2">/ Month</span>
            </div>

            {/* CTA Button - Highlighted only for Business plan */}
            <button
                className={`w-full py-3.5 rounded-full text-sm font-bold mb-10 transition-all ${highlight
                    ? 'bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/20'
                    : 'bg-white border border-gray-200 text-secondary hover:bg-gray-50'
                    }`}
            >
                {buttonText}
            </button>

            {/* Divider Line */}
            <div className="border-t border-gray-200 mb-7"></div>

            {/* Bandwidth and Support - with updated icons */}
            <div className="space-y-5 mb-7">
                <div className="flex items-center gap-3 text-sm text-secondary-gray">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary flex-shrink-0">
                        <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                        <rect x="9" y="9" width="6" height="6"></rect>
                        <line x1="9" y1="1" x2="9" y2="4"></line>
                        <line x1="15" y1="1" x2="15" y2="4"></line>
                        <line x1="9" y1="20" x2="9" y2="23"></line>
                        <line x1="15" y1="20" x2="15" y2="23"></line>
                        <line x1="20" y1="9" x2="23" y2="9"></line>
                        <line x1="20" y1="14" x2="23" y2="14"></line>
                        <line x1="1" y1="9" x2="4" y2="9"></line>
                        <line x1="1" y1="14" x2="4" y2="14"></line>
                    </svg>
                    <span>{bandwidth} <span className="text-gray-400">Bandwidth</span></span>
                </div>
                <div className="flex items-center gap-3 text-sm text-secondary-gray">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary flex-shrink-0">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                        <path d="M12 1v6"></path>
                        <path d="M12 17v6"></path>
                    </svg>
                    <span>{support} <span className="text-gray-400">Limit Support</span></span>
                </div>
            </div>

            {/* Divider Line */}
            <div className="border-t border-gray-200 mb-7"></div>

            {/* Features List - with darker purple background and white check */}
            <div className="space-y-5 flex-grow">
                {['Developer docs', 'API status notifications', 'Submit cases stellar web'].map((feat) => (
                    <div key={feat} className="flex items-center gap-3 text-sm text-secondary-gray">
                        <div className="bg-[#846BE5] p-1 rounded-full flex items-center justify-center w-5 h-5 flex-shrink-0">
                            <Check className="w-3 h-3 text-white" strokeWidth={3} />
                        </div>
                        <span>{feat}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PricingCard;
