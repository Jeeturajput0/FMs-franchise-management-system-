import React, { useState } from 'react';
import Icon from '../components/Icon';
import SectionHeading from '../components/SectionHeading';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="py-12 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Get in Touch"
          title="Let's Build Better"
          highlightTitle="Education Together"
          description="Have questions about AI Scholar's franchise platform, LMS tools, or custom deployment? Reach out to our expert team."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gray-900 text-white p-8 sm:p-10 rounded-3xl shadow-xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/20 rounded-full blur-2xl" />

              <h3 className="text-2xl font-extrabold mb-6">Contact Information</h3>

              <div className="space-y-6 text-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-500 text-white shrink-0 shadow-xs">
                    <Icon name="Mail" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase">Email Us</div>
                    <div className="font-bold text-white text-base">support@aischolar.edu.in</div>
                    <div className="text-xs text-gray-400">franchise@aischolar.edu.in</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-500 text-white shrink-0 shadow-xs">
                    <Icon name="Phone" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase">Call Us</div>
                    <div className="font-bold text-white text-base">+91 (800) 456-7890</div>
                    <div className="text-xs text-gray-400">Mon - Sat: 9:00 AM - 7:00 PM IST</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-amber-500 text-white shrink-0 shadow-xs">
                    <Icon name="MapPin" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase">HQ Office Address</div>
                    <div className="font-bold text-white leading-snug">
                      AI Scholar Towers, Tech Hub Park,<br />
                      Suite 402, Cyber City, Jaipur - 302017
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 pt-4 border-t border-gray-800">
                  <div className="p-3 rounded-xl bg-gray-800 text-amber-400 shrink-0">
                    <Icon name="Clock" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-400 font-semibold uppercase">Support Hours</div>
                    <div className="font-semibold text-gray-200">24/7 Portal System Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-xl">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-6">
                Send Us a Message
              </h3>

              {submitted ? (
                <div className="py-12 text-center bg-emerald-50 rounded-2xl border border-emerald-200 p-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-4 font-bold text-2xl shadow-md">
                    ✓
                  </div>
                  <h4 className="text-2xl font-extrabold text-gray-900 mb-2">
                    Thanks! Your message has been received.
                  </h4>
                  <p className="text-sm text-gray-600 mb-6">
                    Our team will get back to you within 2-4 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', subject: '', message: '' }); }}
                    className="px-6 py-2.5 rounded-xl bg-gray-900 text-white font-bold text-xs"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Subject</label>
                      <input
                        type="text"
                        placeholder="Franchise Query / LMS Demo"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Message *</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us how we can help your coaching business..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-amber-500 text-white font-extrabold text-base hover:bg-amber-600 shadow-lg orange-glow transition-all duration-200"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

