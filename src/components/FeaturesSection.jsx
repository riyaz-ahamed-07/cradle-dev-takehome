import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Button from './Button';

const FeaturesSection = () => {
    return (
        <div className="bg-white py-12 sm:py-16 lg:py-24 font-sans overflow-visible">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 px-0 sm:px-4 lg:px-20 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">

                    {/* Left Box - Text Content */}
                    <div>
                        <span className="text-sm sm:text-md md:text-sm lg:text-md font-[600] text-primary mb-3 sm:mb-4 md:mb-3 lg:mb-4 block tracking-wide">Meet Stellar</span>
                        <h2 className="text-[28px] sm:text-[48px] md:text-[52px] lg:text-[50px] font-[600] leading-[1.1] text-secondary mb-4 sm:mb-6 md:mb-5 lg:mb-6 tracking-tight">
                            Provide powerful <br />
                            solutions at all times
                        </h2>
                        <p className="text-secondary-gray text-base sm:text-lg md:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 md:mb-6 lg:mb-8 max-w-lg">
                            Stellar is more than just a SaaS and technology template - it's a complete digital transformation solution.
                        </p>

                        <div className="space-y-4 sm:space-y-5 md:space-y-4 lg:space-y-5 mb-8 sm:mb-10 md:mb-8 lg:mb-10">
                            {[
                                "Share the extra text you want to add as a feature.",
                                "Add your feature text here.",
                                "Add the text you'd like to include as a feature."
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-2.5 sm:gap-3 md:gap-2.5 lg:gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-6 md:h-6 lg:w-7 lg:h-7 rounded-full bg-primary flex items-center justify-center">
                                        <Check size={14} className="text-white stroke-[3] sm:w-4 sm:h-4 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4" />
                                    </div>
                                    <span className="text-[14px] sm:text-[16px] md:text-[15px] lg:text-[16px] font-[550] text-secondary">{text}</span>
                                </div>
                            ))}
                        </div>

                        <Button variant="secondary" className="rounded-full px-5 py-3 sm:px-6 sm:py-4 md:px-5 md:py-3.5 lg:px-6 lg:py-4 h-auto text-[14px] sm:text-[16px] md:text-[15px] lg:text-[16px] font-semibold border-gray-200 hover:border-primary hover:text-primary hover:bg-white group">
                            Get Free Trial
                            <img src="/corner-arrow.png" alt="" className="ml-1 w-6 h-6 sm:w-8 sm:h-8 md:w-6 md:h-6 lg:w-8 lg:h-8 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                    {/* Right Box - Custom Illustration */}
                    <div className="relative flex items-center justify-center w-full h-[350px] sm:h-[450px] md:h-[500] lg:h-[600px] overflow-visible mt-8 md:ml-8 lg:mt-0">
                        {/* Large Circle Background Image with Cards */}
                        <div className="absolute left-1/2 lg:right-0 lg:left-auto -translate-x-1/2 lg:translate-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center lg:scale-[0.775] xl:scale-[0.9] 2xl:scale-100 lg:origin-right">
                            <div className="w-[min(280px,80vw)] sm:w-[380px] md:w-[400px] lg:w-[500px] h-[min(280px,80vw)] sm:h-[380px] md:h-[400px] lg:h-[500px] rounded-full relative">
                                <div style={{ position: 'absolute', borderRadius: 'inherit', inset: '0px' }}>
                                    <img
                                        decoding="async"
                                        loading="lazy"
                                        src="https://framerusercontent.com/images/nUYgEsec911iD02fdgd1Z8xvrF0.svg"
                                        alt=""
                                        style={{
                                            display: 'block',
                                            width: '100%',
                                            height: '100%',
                                            borderRadius: 'inherit',
                                            objectPosition: 'center center',
                                            objectFit: 'contain'
                                        }}
                                    />
                                </div>

                                {/* Cloud Logo Icon - Bottom Left - positioned relative to circle */}
                                <div className="absolute bottom-[12%] sm:bottom-[10px] md:bottom-[4%] lg:bottom-[5%] left-[-5%] sm:left-[-5%] md:left-[-5%] lg:left-[-5%] bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.08)] rounded-full p-[3px] w-[22%] sm:w-24 md:w-26 lg:w-28 aspect-square z-20 animate-float-slow">
                                    <div className="bg-white/50 rounded-full ring-2 ring-inset ring-gray-200 p-[2px] w-full h-full flex items-center justify-center">
                                        <img src="/logos/cloud-logo.png" alt="Stellar Cloud" className="w-[55%] h-[55%] object-contain" />
                                    </div>
                                </div>

                                {/* Stock Details Card - Top Left - positioned relative to circle */}
                                <div className="absolute top-[-5%] sm:top-[-15%] md:top-[-15%] lg:top-[-20px] left-[-20%] sm:left-[-15%] md:left-[-30%] lg:left-[-20%] bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.08)] rounded-[1.5rem] sm:rounded-[2rem] p-[3px] w-[70%] sm:w-[320px] md:w-[380px] lg:w-[420px] z-10 animate-float-delayed">
                                    <div className="bg-white/50 rounded-[1.75rem] ring-2 ring-inset ring-gray-200 p-[2px]">
                                        <img
                                            src="https://framerusercontent.com/images/N4GACMdsMs82dYejfJRteao5M.svg"
                                            alt="Stock Details"
                                            className="w-full h-auto rounded-[1.6rem]"
                                        />
                                    </div>
                                </div>

                                {/* Revenue Card - Bottom Right - positioned relative to circle */}
                                <div className="absolute bottom-[5%] sm:bottom-[-8%] md:bottom-[-15%] lg:bottom-[-30px] right-[-22%] sm:right-[-15%] md:right-[-18%] lg:right-[-10%] bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0px_15px_35px_-5px_rgba(0,0,0,0.08)] rounded-[1.5rem] sm:rounded-[2rem] p-[3px] w-[65%] sm:w-[240px] md:w-[280px] lg:w-[300px] z-10 animate-float-slow">
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
            </div>
        </div>
    );
};

export default FeaturesSection;
