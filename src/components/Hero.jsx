import React from 'react';
import { Cloud, Bell, MapPin, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const NotificationCard = () => (
    <div className="absolute -top-28 -left-56 bg-white p-6 rounded-[2rem] shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.06)] flex flex-col items-center w-[180px] animate-float-slow z-20">
        <div className="mb-4">
            <Bell size={28} className="text-[#7C5CFC] fill-[#7C5CFC]" />
        </div>
        <div className="text-4xl font-bold text-secondary mb-1">12K</div>
        <div className="text-sm text-secondary-gray">Customers</div>
    </div>
);

const ProfileCard = () => (
    <div className="absolute bottom-10 -left-80 bg-white p-6 rounded-[2rem] shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.06)] w-[280px] animate-float-delayed z-20">
        <div className="mb-6">
            <h4 className="font-bold text-secondary text-base mb-1">Hi Riyaz,</h4>
            <p className="text-[13px] text-secondary-gray leading-normal">What would you like to explore today?</p>
        </div>
        <div className="flex gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-xl overflow-hidden">
                <img src="https://media.licdn.com/dms/image/v2/D4D03AQG_VmhzxJprmw/profile-displayphoto-shrink_200_200/B4DZVIoPoJHwAY-/0/1740680265729?e=1770854400&v=beta&t=PJy8b3D8o35DtIzHUliLs25bqgVXpKCKDV4UkmbsyNY" alt="Sarah" className="w-full h-full object-cover" />
            </div>
            <div>
                <div className="text-sm font-bold text-secondary">Riyaz Ahamed</div>
                <div className="text-xs text-secondary-gray">Jan 21, 2026</div>
            </div>
        </div>
        <div className="flex gap-2 text-xs text-secondary-gray pt-4 border-t border-gray-100/60">
            <div className="w-5 h-5 rounded-full flex text-[#7C5CFC]">
                <MapPin size={14} fill="currentColor" />
            </div>
            Chennai, Tamil Nadu, India
        </div>
    </div>
);

const MeetingCard = () => (
    <div className="absolute -top-28 -right-72 bg-white p-6 rounded-[2rem] shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.06)] w-[220px] animate-float-slow z-20">
        <h4 className="font-bold text-secondary mb-1 text-[15px]">Sales Meeting</h4>
        <div className="text-xs text-secondary-gray mb-4">11:00 - 01:30</div>
        <div className="flex items-center -space-x-3">
            <div className="w-9 h-9 rounded-full border-[3px] border-white overflow-hidden">
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="User 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-9 h-9 rounded-full border-[3px] border-white overflow-hidden">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="User 2" className="w-full h-full object-cover" />
            </div>
            <div className="w-9 h-9 rounded-full border-[3px] border-white overflow-hidden">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="User 3" className="w-full h-full object-cover" />
            </div>
            <div className="w-9 h-9 rounded-full border-[3px] border-white bg-gray-50 flex items-center justify-center text-[10px] font-bold text-secondary-gray">
                +8
            </div>
        </div>
    </div>
);

const StatsCard = () => (
    <div className="absolute bottom-10 -right-[21rem] bg-white p-6 rounded-[2rem] shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.06)] w-[280px] animate-float-delayed z-20">
        <h4 className="font-bold text-secondary mb-6 text-[15px]">Stellar Highlights</h4>
        <div className="space-y-4">
            <div className="flex justify-between items-center text-[13px]">
                <span className="text-secondary-gray">Avg. Client Rating</span>
                <span className="font-bold text-secondary flex items-center gap-1.5">
                    <ArrowUpRight size={14} className="text-[#7C5CFC]" /> 8.8<span className="text-gray-400 font-normal">/10</span>
                </span>
            </div>
            <div className="flex justify-between items-center text-[13px]">
                <span className="text-secondary-gray">Avg. Quotes</span>
                <span className="font-bold text-secondary flex items-center gap-1.5">
                    <ArrowDownLeft size={14} className="text-[#7C5CFC]" /> 748
                </span>
            </div>
            <div className="flex justify-between items-center text-[13px]">
                <span className="text-secondary-gray">Avg. Agent Earnings</span>
                <span className="font-bold text-secondary flex items-center gap-1.5">
                    <ArrowUpRight size={14} className="text-[#7C5CFC]" /> ₹
                </span>
            </div>
            <div className="flex justify-between items-center text-[13px]">
                <span className="text-secondary-gray">Avg. Client Stellar</span>
                <span className="font-bold text-secondary flex items-center gap-1.5">
                    <ArrowUpRight size={14} className="text-[#7C5CFC]" /> %92
                </span>
            </div>
        </div>
    </div>
);

const Hero = () => {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden bg-white">
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

            <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

                {/* Top Text */}
                <span className="text-[#7C5CFC] font-medium text-sm mb-6 animate-fade-in-up tracking-wide">
                    Built by Mohamed Riyaz Ahamed
                </span>

                {/* Headline */}
                <h1 className="max-w-4xl mx-auto text-[40px] sm:text-[54px] md:text-[70px] leading-[1.1] md:leading-[1.15] font-medium text-secondary tracking-tight mb-6 animate-fade-in-up delay-100">
                    Save time and build <br />
                    better with <span className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-6 rounded-full bg-[#7C5CFC] text-white text-2xl sm:text-3xl md:text-[50px] font-medium align-middle shadow-xl shadow-[#7C5CFC]/25">Stellar</span>
                </h1>

                {/* Subheadline */}
                <p className="max-w-xl mx-auto text-lg sm:text-[20px] text-secondary-gray leading-relaxed mb-8 sm:mb-12 animate-fade-in-up delay-200 px-4">
                    Gain unparalleled insights into your data with our robust analytics suite and Stellar.
                </p>

                {/* Hero Image Container - cards need to overflow */}
                <div className="relative w-full max-w-[350px] sm:max-w-[550px] mx-auto perspective-1000 mt-4">
                    {/* Floating Cards Container - Absolute positioning relative to the phone container */}
                    <div className="hidden lg:block absolute inset-0 pointer-events-none">
                        <div className="relative w-full h-full">
                            <NotificationCard />
                            <ProfileCard />
                            <MeetingCard />
                            <StatsCard />
                        </div>
                    </div>

                    {/* Phone Container with overflow to cut bottom - cropped 15% */}
                    <div className="relative z-10 mx-auto h-[300px] sm:h-[391px] overflow-hidden">
                        {/* Phone Mockup - larger size, positioned to show only top portion */}
                        <div className="relative mx-auto w-[300px] sm:w-[400px] h-[600px] sm:h-[800px] bg-black rounded-[2.5rem] sm:rounded-[3.5rem] p-3 shadow-2xl border-[6px] border-gray-900 animate-fade-in-up delay-300">
                            {/* Phone Screen */}
                            <div className="w-full h-full bg-white rounded-[2rem] sm:rounded-[3rem] overflow-hidden flex flex-col relative items-center justify-start pt-14 sm:pt-20">
                                {/* Notch */}
                                <div className="absolute top-0 inset-x-0 h-7 bg-black z-20 rounded-b-[1.2rem] w-40 mx-auto"></div>

                                {/* Status Bar */}
                                <div className="absolute top-2 w-full h-12 px-8 flex justify-between items-center z-20">
                                    <span className="text-[13px] font-semibold text-black pl-2">8:13</span>
                                    <div className="flex gap-1.5 pr-2">
                                        <div className="w-4 h-2.5 bg-black rounded-[1px]"></div>
                                        <div className="w-3 h-2.5 bg-black rounded-[1px]"></div>
                                    </div>
                                </div>

                                {/* Screen Content - Just Logo */}
                                <div className="flex flex-col items-center gap-4 animate-float-slow">
                                    <img src="/logos/stellar-logo.png" alt="Stellar" className="w-28 mt-16 h-auto" />
                                    <span className="text-[42px] font-extrabold text-secondary tracking-tight -mt-6">Stellar</span>
                                </div>
                            </div>

                            {/* Side Buttons */}
                            <div className="absolute top-24 -left-[8px] w-[2px] h-8 bg-gray-800 rounded-l-md"></div>
                            <div className="absolute top-36 -left-[8px] w-[2px] h-14 bg-gray-800 rounded-l-md"></div>
                            <div className="absolute top-28 -right-[8px] w-[2px] h-14 bg-gray-800 rounded-r-md"></div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
