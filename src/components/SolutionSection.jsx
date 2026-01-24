import React from 'react';
import { Cloud, Zap, MessageCircle, Droplet, Bell } from 'lucide-react';

const SolutionFeature = ({ icon: Icon, title, description }) => (
    <div className="flex flex-col gap-3">
        <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-primary">
            <Icon size={20} fill="currentColor" fillOpacity={0.2} />
        </div>
        <div>
            <h3 className="font-semibold text-secondary text-[18px] mb-2">{title}</h3>
            <p className="text-gray-600 text-[15px] leading-relaxed max-w-[280px]">
                {description}
            </p>
        </div>
    </div>
);

const SolutionSection = () => {
    return (
        <section className="py-24 bg-white font-sans overflow-hidden">
            <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left Content */}
                    <div>
                        <span className="text-sm font-medium text-primary mb-2 block tracking-wide">
                            Our Key Features
                        </span>
                        <h2 className="text-[44px] md:text-[52px] leading-[1.1] font-medium text-secondary tracking-tight mb-16">
                            Build a solution that wins <br />
                            you more customers.
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
                            <SolutionFeature
                                icon={Droplet}
                                title="Deploy faster together"
                                description="Gain a competitive edge with our SEO optimization tools"
                            />
                            <SolutionFeature
                                icon={Zap}
                                title="Beautiful No-Code"
                                description="Enhance your website's visibility and drive targeted traffic"
                            />
                            <SolutionFeature
                                icon={MessageCircle}
                                title="Good Communication"
                                description="xperience the Stellar difference and unlock the true potential"
                            />
                            <SolutionFeature
                                icon={Bell}
                                title="Easily Customised"
                                description="From content creation and deployment to performance"
                            />
                        </div>
                    </div>

                    {/* Right Visual - Phone Mockup Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        <img
                            src="/images/solution-phones.png"
                            alt="Stellar Mobile App"
                            className="w-full max-w-[750px] h-auto"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
