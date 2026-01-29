import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Button from './Button';

const FeaturesSection = () => {
    return (
        <div className="bg-white py-24 font-sans overflow-visible">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 px-20 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Box - Text Content */}
                    <div>
                        <span className="text-md font-[550] text-primary mb-4 block tracking-wide">Meet Stellar</span>
                        <h2 className="text-[36px] sm:text-[50px] leading-[1.1] font-[550] text-secondary mb-6 tracking-tight">
                            Provide powerful <br />
                            solutions at all times
                        </h2>
                        <p className="text-secondary-gray text-lg leading-relaxed mb-8 max-w-lg">
                            Stellar is more than just a SaaS and technology template - it's a complete digital transformation solution.
                        </p>

                        <div className="space-y-5 mb-10">
                            {[
                                "Share the extra text you want to add as a feature.",
                                "Add your feature text here.",
                                "Add the text you'd like to include as a feature."
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
                                        <Check size={16} className="text-white stroke-[3]" />
                                    </div>
                                    <span className="text-[16px] font-[550] text-secondary">{text}</span>
                                </div>
                            ))}
                        </div>

                        <Button variant="secondary" className="rounded-full px-6 py-4 h-auto text-[16px] font-semibold border-gray-200 hover:border-primary hover:text-primary hover:bg-white group">
    Get Free Trial
    <img src="/corner-arrow.png" alt="" className="ml-1 w-8 h-8 group-hover:translate-x-1 transition-transform" />
</Button>
                    </div>

                    {/* Right Box - Custom Illustration */}
                    <div className="relative flex items-center justify-center w-full h-[400px] sm:h-[600px] overflow-hidden mt-8 lg:mt-0">
                        {/* Large Circle with Grid Pattern */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center">
                            <div
                                className="w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full relative overflow-hidden"
                                style={{
                                    background: 'linear-gradient(135deg, #F5F5F7 0%, #E8E8EA 100%)',
                                    boxShadow: 'inset 0 0 60px rgba(0,0,0,0.03)'
                                }}
                            >
                                {/* Grid Pattern */}
                                <div
                                    className="absolute inset-0 opacity-30"
                                    style={{
                                        backgroundImage: `
                                            linear-gradient(to right, rgba(100, 100, 120, 0.15) 1px, transparent 1px),
                                            linear-gradient(to bottom, rgba(100, 100, 120, 0.15) 1px, transparent 1px)
                                        `,
                                        backgroundSize: '30px 30px'
                                    }}
                                />
                            </div>
                        </div>

                        {/* Cloud Logo Icon - Bottom Left */}
                        <div className="absolute bottom-24 left-12 bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.08)] rounded-full p-[3px] w-28 h-28 z-20 animate-float-slow">
                            <div className="bg-white/50 rounded-full ring-2 ring-inset ring-gray-200 p-[2px] w-full h-full flex items-center justify-center">
                                <img src="/logos/cloud-logo.png" alt="Stellar Cloud" className="w-16 h-auto" />
                            </div>
                        </div>

                        {/* Stock Details Card - Top Left */}
                        <div className="absolute top-0 left-0 sm:left-4 bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.08)] rounded-[2rem] p-[3px] w-[280px] sm:w-[420px] scale-90 sm:scale-100 origin-top-left z-10 animate-float-delayed">
                            <div className="bg-white/50 rounded-[1.75rem] ring-2 ring-inset ring-gray-200 p-[2px]">
                                <img
                                    src="https://framerusercontent.com/images/N4GACMdsMs82dYejfJRteao5M.svg"
                                    alt="Stock Details"
                                    className="w-full h-auto rounded-[1.6rem]"
                                />
                            </div>
                        </div>

                        {/* Revenue Card - Bottom Right */}
                        <div className="absolute bottom-5 right-2 bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0px_15px_35px_-5px_rgba(0,0,0,0.08)] rounded-[2rem] p-[3px] w-[300px] z-10 animate-float-slow">
                            <div className="bg-white/50 rounded-[1.75rem] ring-2 ring-inset ring-gray-200 p-[2px]">
                                <img
                                    src="https://framerusercontent.com/images/tfmZPHvBf9KM0vITyDAz4CweU.svg"
                                    alt="Revenue Details"
                                    className="w-full h-auto rounded-[1.6rem]"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default FeaturesSection;
