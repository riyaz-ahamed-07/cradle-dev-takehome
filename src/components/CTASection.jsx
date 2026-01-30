import React from 'react';
import { Check } from 'lucide-react';
import Button from './Button';

const CTASection = () => {
    return (
        <section className="py-16 sm:py-20 md:py-28 lg:py-36 bg-white font-sans relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-0 right-0 left-0 h-[100%] z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 flex flex-col justify-between h-full w-screen max-w-[1600px] left-1/2 -translate-x-1/2 bg-[#f7f8fc]">
                    {/* Top Background */}
                    <div className="w-full h-[200px] relative overflow-hidden">
                        <img
                            src="https://framerusercontent.com/images/YhQ4FuWUijRFzpn7nv26cDPk44.svg"
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                    {/* Bottom Background */}
                    <div className="w-full h-[300px] relative overflow-hidden">
                        <img
                            src="https://framerusercontent.com/images/0pfJ9DHDfLH2ItTurbeHdI534KM.svg"
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">

                    {/* Left Side - Text Content */}
                    <div>
                        <span className="text-[12px] sm:text-sm font-medium text-primary mb-2 block tracking-wide">Start building today!</span>
                        <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.1] font-medium text-secondary tracking-tight mb-3 sm:mb-4">
                            Start your 7-day free trial
                        </h2>
                        <p className="text-secondary-gray text-[15px] sm:text-[17px]">
                            Experience the Stellar difference and unlock the true potential
                        </p>
                    </div>

                    {/* Right Side - Form Elements */}
                    <div className="w-full">
                        <div className="flex flex-col sm:flex-row gap-3 mb-4 sm:mb-5 md:mb-6">
                            <input
                                type="email"
                                placeholder="name@email.com"
                                className="flex-1 px-4 py-3 sm:px-5 sm:py-4 rounded-full border border-gray-200 text-sm sm:text-base text-secondary placeholder:text-gray-400 focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 transition-all"
                            />
                            <Button
                                variant="primary"
                                className="rounded-full px-6 py-3 sm:px-8 sm:py-4 h-auto text-sm font-semibold whitespace-nowrap w-full sm:w-auto text-center justify-center"
                            >
                                Get Instant Access
                            </Button>
                        </div>

                        <div className="flex flex-wrap gap-4 sm:gap-6 items-center">
                            <div className="flex items-center gap-2">
                                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary flex items-center justify-center">
                                    <Check size={14} className="sm:w-4 sm:h-4 text-white stroke-[3]" />
                                </div>
                                <span className="text-secondary text-[13px] sm:text-sm">Free 7-day trial</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-primary flex items-center justify-center">
                                    <Check size={14} className="sm:w-4 sm:h-4 text-white stroke-[3]" />
                                </div>
                                <span className="text-secondary text-[13px] sm:text-[15px] md:text-[16px]">No credit card required</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CTASection;
