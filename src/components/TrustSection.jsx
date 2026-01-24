import React from 'react';
import { motion } from 'framer-motion';
import { Triangle, Send, Activity, Rss } from 'lucide-react';
import Button from './Button';

const TrustSection = () => {
    return (
        <section className="pt-36 pb-36 bg-white font-sans relative overflow-hidden">


            <div className="max-w-[1400px] mx-auto px-2 sm:px-4 lg:px-6 text-center relative z-10">

                {/* Headline */}
                <h2 className="text-[30px] md:text-[36px] font-medium text-secondary tracking-tight mb-20">
                    The world's best companies trust Stellar.
                </h2>

                {/* Logos Marquee */}
                <div className="relative w-full overflow-hidden mb-24 mask-linear-fade">
                    <motion.div
                        className="flex items-center gap-8 sm:gap-16 whitespace-nowrap"
                        // moving from -50% to 0% creates a left-to-right motion (if we render 2 sets) 
                        // Wait, if we want items to move RIGHT, they go from Left -> Right.
                        // So we start at a negative offset and move to 0.
                        animate={{ x: ["-50%", "0%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30, // Adjust speed
                            repeatType: "loop"
                        }}
                        drag="x"
                        dragConstraints={{ left: -1000, right: 1000 }} // Allow free dragging
                        whileTap={{ cursor: "grabbing" }}
                        style={{ cursor: "grab" }}
                    >
                        {/* Render logos 4 times to ensure smooth infinite loop on large screens */}
                        {[...Array(4)].map((_, widthIndex) => (
                            <div key={widthIndex} className="flex items-center gap-8 sm:gap-16 shrink-0">

                                {/* XPENG */}
                                <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
                                    <img src="/logos/xpeng.png" alt="XPENG" className="h-10 md:h-12 w-auto object-contain" />
                                </div>

                                {/* Amplitude */}
                                <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
                                    <img src="/logos/amplitude.png" alt="Amplitude" className="h-10 md:h-12 w-auto object-contain" />
                                </div>

                                {/* veroxfloor */}
                                <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
                                    <img src="/logos/veroxfloor.png" alt="veroxfloor" className="h-8 md:h-10 w-auto object-contain" />
                                </div>

                                {/* RPUBLICA */}
                                <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
                                    <img src="/logos/rpublica.png" alt="RPUBLICA" className="h-8 md:h-9 w-auto object-contain" />
                                </div>

                                {/* Invoice2go */}
                                <div className="flex items-center opacity-80 hover:opacity-100 transition-opacity">
                                    <img src="/logos/invoice2go.png" alt="Invoice2go" className="h-8 md:h-10 w-auto object-contain" />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Subtext */}
                <p className="text-[24px] text-secondary-gray mb-10 font-medium tracking-wide">
                    Stellar is used by over 55,000+ companies across the globe
                </p>

                {/* CTA Button */}
                <Button
                    variant="secondary"
                    className="rounded-full px-8 py-4 h-auto text-sm font-semibold border-gray-200 hover:border-primary/20 hover:text-primary shadow-sm hover:shadow-md transition-all pt-4"
                >
                    Start your Stellar Journey
                </Button>

            </div>
        </section>
    );
};

export default TrustSection;
