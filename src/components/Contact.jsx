import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactInfo = () => {
    return (
        <div className="animate-fade-in-up delay-100">
            <h2 className="text-3xl font-semibold text-secondary mb-6">Contact Information</h2>
            <p className="text-secondary-gray mb-8 leading-relaxed">
                Reach out to us through any of these channels and we'll get back to you shortly.
            </p>

            <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all">
                    <div className="w-12 h-12 rounded-full bg-[#7C5CFC]/10 flex items-center justify-center flex-shrink-0">
                        <Mail size={20} className="text-[#7C5CFC]" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-secondary mb-1">Email</h3>
                        <p className="text-secondary-gray">support@stellar.com</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all">
                    <div className="w-12 h-12 rounded-full bg-[#7C5CFC]/10 flex items-center justify-center flex-shrink-0">
                        <Phone size={20} className="text-[#7C5CFC]" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-secondary mb-1">Phone</h3>
                        <p className="text-secondary-gray">+91 9876543210</p>
                    </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all">
                    <div className="w-12 h-12 rounded-full bg-[#7C5CFC]/10 flex items-center justify-center flex-shrink-0">
                        <MapPin size={20} className="text-[#7C5CFC]" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-secondary mb-1">Office</h3>
                        <p className="text-secondary-gray">
                            123 XYZ<br />
                            City, State, Zip
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;