import React from 'react';
import { Cloud, Zap, MessageCircle, Droplet, Bell } from 'lucide-react';

const SolutionFeature = ({ iconUrl, title, description }) => (
    <div className="flex flex-col gap-2 sm:gap-3">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-50 flex items-center justify-center text-primary">
            <img src={iconUrl} alt={title} className="w-6 h-6 sm:w-7 sm:h-7" />
        </div>
        <div>
            <h3 className="font-bold text-secondary text-[17px] sm:text-[18px] md:text-[20px] mb-1.5 sm:mb-2">{title}</h3>
            <p className="text-gray-700 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed max-w-[280px]">
                {description}
            </p>
        </div>
    </div>
);

const SolutionSection = () => {
    return (
        <section className="py-16 sm:py-20 md:py-24 bg-white font-sans overflow-hidden">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 md:px-12 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-20 items-center">

                    {/* Left Content */}
                    <div>
                        <span className="text-[12px] sm:text-sm font-medium text-primary mb-2 block tracking-wide">
                            Our Key Features
                        </span>
                        <h2 className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.1] font-medium text-secondary tracking-tight mb-10 sm:mb-12 md:mb-16">
                            Build a solution that wins <br />
                            you more customers.
                        </h2>

                        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-8 sm:gap-y-12">
                            <SolutionFeature
                                iconUrl="https://framerusercontent.com/images/OsvUbZnNIMOjzwZUq6703omObM.svg"
                                title="Deploy faster together"
                                description="Gain a competitive edge with our SEO optimization tools"
                            />
                            <SolutionFeature
                                iconUrl="https://framerusercontent.com/images/jN4bLvB6SWz7yEIvj23JmANuwTQ.svg"
                                title="Beautiful No-Code"
                                description="Enhance your website's visibility and drive targeted traffic"
                            />
                            <SolutionFeature
                                iconUrl="https://framerusercontent.com/images/YXaVNoITP2D8v6rzbpueb6Pq7s.svg"
                                title="Good Communication"
                                description="xperience the Stellar difference and unlock the true potential"
                            />
                            <SolutionFeature
                                iconUrl="https://framerusercontent.com/images/AZ1AGSFwmZ1BiwvzcuyNnnVaRI.svg"
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
                            className="w-full max-w-[500px] sm:max-w-[700px] lg:max-w-[950px] h-auto"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
