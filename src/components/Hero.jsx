import React from 'react';
import { Cloud, Bell, MapPin, ArrowUpRight, ArrowDownLeft } from 'lucide-react';

const NotificationCard = () => (
    <div className="absolute -top-32 -left-56 bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.06)] rounded-[2rem] p-[3px] w-[176px] h-[176px] animate-float-slow z-20">
        <div className="bg-white/50 rounded-[1.75rem] ring-1 ring-inset ring-gray-200 w-full h-full flex flex-col items-center justify-center">
            <div className="mb-3">
                <Bell size={32} className="text-[#7C5CFC] fill-[#7C5CFC]" />
            </div>
            <div className="text-4xl font-bold text-secondary mb-1">12K</div>
            <div className="text-sm text-secondary-gray">Customers</div>
        </div>
    </div>
);

const ProfileCard = () => (
    <div className="absolute bottom-10 -left-80 bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.06)] rounded-[2rem] p-[3px] w-[280px] animate-float-delayed z-20">
        <div className="bg-white/50 rounded-[1.75rem] ring-1 ring-inset ring-gray-200 p-6">
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
    </div>
);

const MeetingCard = () => (
    <div className="absolute -top-32 -right-72 bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.06)] rounded-[2rem] p-[3px] w-[176px] h-[176px] animate-float-slow z-20">
        <div className="bg-white/50 rounded-[1.75rem] ring-1 ring-inset ring-gray-200 w-full h-full flex flex-col justify-center px-5">
            <h4 className="font-bold text-secondary mb-1 text-[15px]">Sales Meeting</h4>
            <div className="text-xs text-secondary-gray mb-4">11:00 - 01:30</div>
            <div className="flex items-center -space-x-2">
                <div className="w-8 h-8 rounded-full border-[2px] border-white overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="User 1" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full border-[2px] border-white overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="User 2" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full border-[2px] border-white overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" alt="User 3" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full border-[2px] border-white bg-gray-50 flex items-center justify-center text-[10px] font-bold text-secondary-gray">
                    +8
                </div>
            </div>
        </div>
    </div>
);

const StatsCard = () => (
    <div className="absolute bottom-10 -right-[21rem] bg-white/90 backdrop-blur-xl border border-white/20 shadow-[0px_20px_40px_-10px_rgba(0,0,0,0.06)] rounded-[2rem] p-[3px] w-[280px] animate-float-delayed z-20">
        <div className="bg-white/50 rounded-[1.75rem] ring-1 ring-inset ring-gray-200 p-6">
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
    </div>
);

const Hero = () => {
    return (
        <section className="relative pt-20 lg:pt-32 pb-20 overflow-hidden bg-white">
            {/* Background */}
            <div className="absolute top-0 right-0 left-0 h-[80%] z-0 pointer-events-none ">
                <div className="absolute inset-0 flex flex-col justify-between h-full w-full max-w-[1600px] left-1/2 -translate-x-1/2 bg-[#f7f8fc]">
                    {/* Top Background */}
                    <div className="w-full h-[300px] relative overflow-hidden">
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

            <div className="relative z-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">

                {/* Top Text */}
                <span className="text-[#7C5CFC] pt-20 font-medium text-[15px] mb-6 animate-fade-in-up tracking-wide">
                    Our Framer Template
                </span>

                {/* Headline */}
                <h1 className="max-w-4xl mx-auto text-[40px] sm:text-[54px] md:text-[70px] leading-[1.1] md:leading-[1.15] font-semibold text-secondary tracking-tight mb-6 animate-fade-in-up delay-100">
                    Save time and build <br />
                    better with <span className="inline-flex items-center scale-125 justify-center px-4 py-2 sm:px-4 sm:py-2 rounded-full text-white text-[32px] sm:text-[56px] font-bold align-middle shadow-xl shadow-[#7C5CFC]/25 relative overflow-hidden ml-6">
                        <img
                            src="https://framerusercontent.com/images/IP8o7LhtzsZ1obCCPHAUFlTJfsU.png"
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover rounded-full"
                        />
                        <span className="relative z-10">Stellar</span>
                    </span>
                </h1>

                {/* Subheadline */}
                <p className="max-w-xl mx-auto text-lg sm:text-[20px] text-secondary-gray leading-relaxed mb-8 sm:mb-12 animate-fade-in-up delay-200 px-4">
                    Gain unparalleled insights into your data with our robust analytics suite and Stellar.
                </p>

                {/* Hero Image Container - cards need to overflow */}
                <div className="relative w-full max-w-[350px] sm:max-w-[550px] mx-auto perspective-1000 -mt-4">
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
                    <div className="relative z-10 mx-auto h-[280px] sm:h-[350px] overflow-hidden">
                        {/* Phone Image */}
                        <img
                            src="https://framerusercontent.com/images/nnEGqse817BNZeNu4Ixy2AjThmY.png?scale-down-to=1024"
                            alt="Stellar App"
                            className="w-[400px] sm:w-[450px] h-auto mx-auto animate-fade-in-up delay-300"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
