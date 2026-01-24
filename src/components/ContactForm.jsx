import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Add form submission logic here
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="animate-fade-in-up">
            <h2 className="text-3xl font-semibold text-secondary mb-6">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-secondary mb-2">Name</label>
                    <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7C5CFC]/50 focus:ring-2 focus:ring-[#7C5CFC]/20 transition-all"
                        placeholder="Your name"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-secondary mb-2">Email</label>
                    <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7C5CFC]/50 focus:ring-2 focus:ring-[#7C5CFC]/20 transition-all"
                        placeholder="your@email.com"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-secondary mb-2">Message</label>
                    <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows="6"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#7C5CFC]/50 focus:ring-2 focus:ring-[#7C5CFC]/20 transition-all resize-none"
                        placeholder="Tell us how we can help..."
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#7C5CFC] text-white px-8 py-4 rounded-full font-medium hover:bg-[#6B4FE8] transition-all shadow-lg shadow-[#7C5CFC]/25 hover:shadow-xl hover:shadow-[#7C5CFC]/30 flex items-center justify-center gap-2"
                >
                    Send Message
                    <Send size={18} />
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
