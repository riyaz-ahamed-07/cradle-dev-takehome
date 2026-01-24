import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import Button from './Button';

const FeaturesSection = () => {
    return (
        <div className="bg-white py-24 font-sans overflow-visible">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Box - Text Content */}
                    <div>
                        <span className="text-md font-medium text-primary mb-4 block tracking-wide">Meet Stellar</span>
                        <h2 className="text-[36px] sm:text-[50px] leading-[1.1] font-medium text-secondary mb-6 tracking-tight">
                            Provide powerful <br />
                            solutions at all times
                        </h2>
                        <p className="text-secondary-gray text-lg leading-relaxed mb-8 max-w-lg">
                            Stellar is more than just a SaaS and technology template - it's a complete digital transformation solution.
                        </p>

                        <div className="space-y-5 mb-10">
                            {[
                                "Share the learnings, share the success",
                                "Learn from customer feedback",
                                "See the data you'd like to include as a feature"
                            ].map((text, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-primary flex items-center justify-center mt-1">
                                        <Check size={16} className="text-white stroke-[3]" />
                                    </div>
                                    <span className="text-[16px] font-medium text-secondary">{text}</span>
                                </div>
                            ))}
                        </div>

                        <Button variant="secondary" className="rounded-full px-6 py-3 h-auto text-sm font-semibold border-gray-200 hover:border-primary hover:text-primary group">
                            Get Free Trial
                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
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
                        <div className="absolute bottom-24 left-16 w-28 h-28 rounded-full bg-white shadow-[0px_10px_40px_-10px_rgba(0,0,0,0.15)] flex items-center justify-center z-20">
                            <img src="/logos/cloud-logo.png" alt="Stellar Cloud" className="w-16 h-auto" />
                        </div>

                        {/* Stock Details Card - Top Left */}
                        <div className="absolute top-0 left-0 sm:left-4 bg-white rounded-2xl p-4 sm:p-6 shadow-[0px_10px_40px_-10px_rgba(0,0,0,0.15)] w-[280px] sm:w-[420px] scale-90 sm:scale-100 origin-top-left z-10">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-xl font-bold text-secondary">Stock Details</h3>
                                <div className="flex gap-2 text-xs text-gray-400">
                                    <button className="px-2 py-1">10M</button>
                                    <button className="px-2 py-1">1H</button>
                                    <button className="px-2 py-1">1D</button>
                                </div>
                            </div>

                            {/* Stock 1 - Horizontal Layout */}
                            <div className="mb-6 flex items-center gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-sm text-gray-500">ASDX</span>
                                        <span className="text-xs text-primary flex items-center gap-1">
                                            <span className="text-primary">▲</span> %2.78
                                        </span>
                                    </div>
                                    <div className="text-2xl font-bold text-secondary">$201.56</div>
                                </div>
                                <div className="flex-1">
                                    <svg className="w-full h-16" viewBox="0 0 200 50" preserveAspectRatio="none">
                                        <polyline
                                            points="0,35 25,25 50,30 75,20 100,23 125,17 150,13 175,20 200,15"
                                            fill="none"
                                            stroke="#7C5CFC"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Stock 2 - Horizontal Layout */}
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-sm text-gray-500">TSA</span>
                                        <span className="text-xs text-gray-500 flex items-center gap-1">
                                            <span>▼</span> %1.34
                                        </span>
                                    </div>
                                    <div className="text-2xl font-bold text-secondary">$64.33</div>
                                </div>
                                <div className="flex-1">
                                    <svg className="w-full h-16" viewBox="0 0 200 50" preserveAspectRatio="none">
                                        <polyline
                                            points="0,20 25,25 50,23 75,30 100,27 125,33 150,30 175,35 200,37"
                                            fill="none"
                                            stroke="#9CA3AF"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Revenue Card - Bottom Right */}
                        <div className="absolute bottom-10 right-2 bg-white rounded-2xl p-6 shadow-[0px_10px_40px_-10px_rgba(0,0,0,0.15)] w-[300px] z-10">
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-3xl font-bold text-secondary">$16,248.50</h2>
                                <button className="text-gray-400">
                                    <svg width="10" height="10" viewBox="0 0 20 20" fill="currentColor">
                                        <circle cx="10" cy="4" r="1.5" />
                                        <circle cx="10" cy="10" r="1.5" />
                                        <circle cx="10" cy="16" r="1.5" />
                                    </svg>
                                </button>
                            </div>
                            <p className="text-sm text-gray-500 mb-4">New Customers This Month</p>

                            {/* Progress Bars */}
                            <div className="space-y-2">
                                <div>
                                    <div className="flex justify-between text-sm mb-0">
                                        <span className="text-gray-400"></span>
                                        <span className="font-medium text-secondary">44%</span>
                                    </div>
                                    <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-gray-300 w-[44%] rounded-full"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm mb-2">
                                        <span className="text-gray-400"></span>
                                        <span className="font-medium text-secondary">96%</span>
                                    </div>
                                    <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-[96%] rounded-full"></div>
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
