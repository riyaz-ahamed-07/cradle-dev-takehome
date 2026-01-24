import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';

const CTASection = () => {
    return (
        <section className="py-36 bg-white font-sans relative overflow-hidden">
            <div
                className="hidden lg:block absolute inset-x-0 bottom-0 h-[50%] z-0 pointer-events-none opacity-15"
                style={{
                    backgroundImage: 'url(/images/grid-bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat'
                }}
            ></div>
            <div
                className="hidden lg:block absolute inset-x-0 top-0 h-[50%] z-0 pointer-events-none opacity-15"
                style={{
                    backgroundImage: 'url(/images/grid-bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                    transform: 'scaleY(-1)'
                }}
            ></div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Side - Text Content */}
                    <div>
                        <span className="text-sm font-medium text-primary mb-2 block tracking-wide">Start building today!</span>
                        <h2 className="text-[36px] sm:text-[44px] md:text-[52px] leading-[1.1] font-medium text-secondary tracking-tight mb-4">
                            Start your 7-day free trial
                        </h2>
                        <p className="text-secondary-gray text-[17px]">
                            Experience the Stellar difference and unlock the true potential
                        </p>
                    </div>

                    {/* Right Side - Form Elements */}
                    <div className="w-full">
                        <div className="flex flex-col sm:flex-row gap-3 mb-6">
                            <input
                                type="email"
                                placeholder="name@email.com"
                                className="flex-1 px-5 py-4 rounded-full border border-gray-200 text-secondary placeholder:text-gray-400 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                            <Button
                                variant="primary"
                                className="rounded-full px-8 py-4 h-auto text-sm font-semibold whitespace-nowrap w-full sm:w-auto text-center justify-center"
                            >
                                Get Instant Access
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-6 items-center">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Check size={14} className="text-primary" strokeWidth={3} />
                                </div>
                                <span className="text-secondary text-sm">Free 7-day trial</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Check size={14} className="text-primary" strokeWidth={3} />
                                </div>
                                <span className="text-secondary text-sm">No credit card required</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CTASection;
