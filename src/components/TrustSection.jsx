import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Triangle, Send, Activity, Rss } from 'lucide-react';
import Button from './Button';

const TrustSection = () => {
    const [isHovered, setIsHovered] = useState(false);
    return (
        <section className="pt-16 pb-16 sm:pt-24 sm:pb-24 lg:pt-36 lg:pb-36 bg-white font-sans relative overflow-hidden">


            <div className="max-w-[1400px] mx-auto px-2 sm:px-4 lg:px-6 text-center relative z-10">

                {/* Headline */}
                <h2 className="text-[24px] sm:text-[30px] md:text-[36px] font-[550] text-secondary tracking-tight mb-12 sm:mb-16 lg:mb-20">
                    The world's best companies trust Stellar.
                </h2>

                {/* Logos Marquee */}
                <div className="relative w-full overflow-hidden mb-24 mask-linear-fade">
                    <motion.div
                        className="flex items-center gap-6 sm:gap-8 md:gap-16 whitespace-nowrap"
                        // Reverse direction: moving from 0% to -50% creates right-to-left motion
                        animate={{ x: ["0%", "-50%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: isHovered ? 60 : 20, // Slow down on hover, fast otherwise
                            repeatType: "loop"
                        }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        drag="x"
                        dragConstraints={{ left: -1000, right: 1000 }} // Allow free dragging
                        whileTap={{ cursor: "grabbing" }}
                        style={{ cursor: "grab" }}
                    >
                        {/* Render logos 4 times to ensure smooth infinite loop on large screens */}
                        {[...Array(4)].map((_, widthIndex) => (
                            <div key={widthIndex} className="flex items-center gap-6 sm:gap-8 md:gap-16 shrink-0">

                                {/* XPENG */}
                                <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
                                    <img src="/logos/xpeng.png" alt="XPENG" className="h-8 sm:h-10 md:h-12 w-auto object-contain" />
                                </div>

                                {/* Divider */}
                                <div className="h-8 w-[1px] bg-gray-300"></div>

                                {/* Amplitude */}
                                <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
                                    <img src="/logos/amplitude.png" alt="Amplitude" className="h-8 sm:h-10 md:h-12 w-auto object-contain" />
                                </div>

                                {/* Divider */}
                                <div className="h-8 w-[1px] bg-gray-300"></div>

                                {/* veroxfloor */}
                                <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
                                    <img src="/logos/veroxfloor.png" alt="veroxfloor" className="h-6 sm:h-8 md:h-10 w-auto object-contain" />
                                </div>

                                {/* Divider */}
                                <div className="h-8 w-[1px] bg-gray-300"></div>

                                {/* RPUBLICA */}
                                <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
                                    <img src="/logos/rpublica.png" alt="RPUBLICA" className="h-6 sm:h-8 md:h-9 w-auto object-contain" />
                                </div>

                                {/* Divider */}
                                <div className="h-8 w-[1px] bg-gray-300"></div>

                                {/* Invoice2go */}
                                <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
                                    <img src="/logos/invoice2go.png" alt="Invoice2go" className="h-6 sm:h-8 md:h-10 w-auto object-contain" />
                                </div>

                                {/* Divider */}
                                <div className="h-8 w-[1px] bg-gray-300"></div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Subtext */}
                <p className="text-[18px] md:text-[24px] text-secondary-gray mb-8 sm:mb-10 font-medium tracking-wide">
                    Stellar is used by over 55,000+ companies across the globe
                </p>

                {/* CTA Button */}
                <Button
                    variant="secondary"
                    className="rounded-full px-5 py-3 sm:px-6 sm:py-4 h-auto text-[14px] sm:text-[16px] font-semibold border-gray-200 hover:border-primary/20 hover:text-primary shadow-sm hover:shadow-md transition-all"
                >
                    Start your Stellar Journey
                </Button>

            </div>
        </section>
    );
};

export default TrustSection;
