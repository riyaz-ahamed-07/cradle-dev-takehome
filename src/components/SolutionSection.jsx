import React from 'react';
import { Cloud, Zap, MessageCircle, Droplet, Bell } from 'lucide-react';

const SolutionFeature = ({ iconUrl, title, description }) => (
    <div className="flex flex-col gap-3">
        <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-primary">
            <img src={iconUrl} alt={title} className="w-7 h-7" />
        </div>
        <div>
            <h3 className="font-bold text-secondary text-[20px] mb-2">{title}</h3>
            <p className="text-gray-700 text-[16px] leading-relaxed max-w-[280px]">
                {description}
            </p>
        </div>
    </div>
);

const SolutionSection = () => {
    return (
        <section className="py-24 bg-white font-sans overflow-hidden">
            <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
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
                            className="w-full max-w-[950px] h-auto"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
