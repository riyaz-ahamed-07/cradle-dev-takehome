import React from 'react';
import { Sliders, Zap, Layout, Cloud, Filter, MoreVertical } from 'lucide-react';

const FeatureCard = ({ title, subtitle, icon: Icon, children }) => (
    <div className="bg-white rounded-2xl p-6 border border-gray-200/40 shadow-[0px_4px_20px_-4px_rgba(0,0,0,0.08)] hover:shadow-[0px_8px_30px_-4px_rgba(0,0,0,0.12)] transition-shadow duration-300 flex flex-col h-full">
        {/* Visual Content Placeholder */}
        <div className="bg-[#FAFAFA] rounded-xl w-full h-40 sm:h-52 mb-6 overflow-hidden relative p-3 sm:p-5 border border-gray-100/60">
            {children}
        </div>

        <div className="mt-auto">
            <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <Icon size={18} strokeWidth={2.5} />
                </div>
                <h3 className="font-bold text-[17px] text-secondary">{title}</h3>
            </div>
            <p className="text-secondary-gray text-[14px] leading-relaxed">
                {subtitle}
            </p>
        </div>
    </div>
);

const BigFeaturesSection = () => {
    return (
        <section className="py-36 bg-white relative overflow-hidden font-sans">
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

            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-20">
                    <span className="text-sm font-medium text-primary mb-3 block tracking-wide">
                        Powerful Features
                    </span>
                    <h2 className="text-[32px] sm:text-[44px] md:text-[56px] leading-tight font-medium text-secondary tracking-tight">
                        Our product has <br />
                        these big <span className="inline-flex items-center justify-center px-6 sm:px-8 py-1 rounded-full bg-primary text-white font-medium align-middle">features</span>
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Card 1 - Dashboard */}
                    <FeatureCard
                        title="Beautiful Design"
                        subtitle="Gain a competitive edge with our SEO optimization tools, ensuring your website ranks"
                        icon={Layout}
                    >
                        {/* Dashboard Mockup */}
                        <div className="w-full h-full flex flex-col">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-4">
                                <h4 className="text-[13px] font-semibold text-secondary">Dashboard</h4>
                                <MoreVertical size={14} className="text-gray-400" />
                            </div>

                            {/* Tabs */}
                            <div className="flex gap-3 mb-4">
                                <button className="flex items-center gap-1.5 text-[10px] text-primary bg-indigo-50 px-2.5 py-1.5 rounded-md">
                                    <span className="w-1.5 h-1.5 bg-primary rounded-sm"></span>
                                    Date
                                </button>
                                <button className="flex items-center gap-1.5 text-[10px] text-gray-500 px-2.5 py-1.5 rounded-md">
                                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-sm"></span>
                                    Mail
                                </button>
                                <button className="flex items-center gap-1.5 text-[10px] text-gray-500 px-2.5 py-1.5 rounded-md">
                                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                                    Console
                                </button>
                            </div>

                            {/* Import CSV Box */}
                            <div className="bg-gray-50 rounded-lg p-3 border border-gray-100 relative">
                                <button className="absolute top-2 right-2 text-gray-300 hover:text-gray-500">
                                    <span className="text-xs">×</span>
                                </button>
                                <div className="text-[11px] font-semibold text-secondary mb-1">Import CSV</div>
                                <div className="text-[9px] text-gray-400">Lorem ipsum dolor sit amet, conse...</div>
                            </div>
                        </div>
                    </FeatureCard>

                    {/* Card 2 - Stellar Filters */}
                    <FeatureCard
                        title="Clean Development"
                        subtitle="Unlock the power of data analytics and gain actionable insights to make informed decisions."
                        icon={Zap}
                    >
                        {/* Stellar Filters Mockup */}
                        <div className="w-full h-full flex flex-col">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <h4 className="text-[13px] font-semibold text-secondary">Stellar Filters;</h4>
                                <MoreVertical size={14} className="text-gray-400" />
                            </div>

                            {/* Icons with connecting line */}
                            <div className="flex items-center justify-center gap-8 mt-8">
                                <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center bg-white">
                                    <img src="/logos/stellar-logo.png" alt="Stellar" className="w-8 h-8" />
                                </div>
                                <div className="h-[2px] w-20 bg-primary/20"></div>
                                <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center bg-white">
                                    <Filter size={24} className="text-primary" strokeWidth={2} />
                                </div>
                            </div>
                        </div>
                    </FeatureCard>

                    {/* Card 3 - Analytics */}
                    <FeatureCard
                        title="Easily Customised"
                        subtitle="From content creation and deployment to performance monitoring and optimization"
                        icon={Sliders}
                    >
                        {/* Analytics Mockup */}
                        <div className="w-full h-full flex flex-col">
                            {/* Header */}
                            <div className="flex items-center justify-between mb-6">
                                <h4 className="text-[13px] font-semibold text-secondary">Proje Data & Analytics</h4>
                                <MoreVertical size={14} className="text-gray-400" />
                            </div>

                            {/* Progress Bars */}
                            <div className="space-y-4 mt-4">
                                <div>
                                    <div className="flex justify-between text-[11px] mb-2">
                                        <span className="text-gray-500">Sector</span>
                                        <span className="text-secondary font-medium">96%</span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-[96%] rounded-full"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-[11px] mb-2">
                                        <span className="text-gray-500">Industry</span>
                                        <span className="text-secondary font-medium">32%</span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-[32%] rounded-full"></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-[11px] mb-2">
                                        <span className="text-gray-500">AAPL</span>
                                        <span className="text-secondary font-medium">72%</span>
                                    </div>
                                    <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-[72%] rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FeatureCard>

                </div>
            </div>
        </section>
    );
};

export default BigFeaturesSection;
