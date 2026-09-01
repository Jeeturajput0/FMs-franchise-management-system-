import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Icon from '../components/Icon';
import SectionHeading from '../components/SectionHeading';
import { franchiseBenefits } from '../data/siteData';

export default function Franchise() {
  const [formData, setFormData] = useState({
    coachingName: '',
    ownerName: '',
    phone: '',
    email: '',
    city: '',
    state: '',
    experience: '1-3 years'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading */}
        <SectionHeading
          badge="Franchise Partnership"
          title="Build Your Coaching Business"
          highlightTitle="With AI Scholar"
          description="Join the fastest growing network of technology-enabled coaching centers. Gain instant access to 100+ accredited courses and our enterprise cloud LMS."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          
          {/* Left Column: Benefits List */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm">
              <h3 className="text-2xl font-extrabold text-gray-900 mb-6">
                Why Partner With AI Scholar?
              </h3>

              <div className="space-y-5">
                {franchiseBenefits.map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-amber-50/60 border border-amber-100/80"
                  >
                    <div className="p-2.5 rounded-xl bg-amber-500 text-white shrink-0 shadow-xs">
                      <Icon name="Check" size={18} />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Stat Box */}
            <div className="bg-gray-900 text-white p-8 rounded-3xl shadow-xl flex items-center justify-between">
              <div>
                <div className="text-3xl font-extrabold text-amber-400">500+</div>
                <div className="text-sm font-semibold text-gray-300">Active Franchise Centers</div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-extrabold text-emerald-400">₹4.5L+</div>
                <div className="text-sm font-semibold text-gray-300">Avg Monthly Revenue</div>
              </div>
            </div>
          </div>

          {/* Right Column: Application Form */}
          <div className="lg:col-span-6">
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-200 shadow-xl relative">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-800">Franchise Portal Application</span>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-6">
                Become a Franchise Partner
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Coaching Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Academy"
                      value={formData.coachingName}
                      onChange={(e) => setFormData({...formData, coachingName: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Owner Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.ownerName}
                      onChange={(e) => setFormData({...formData, ownerName: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Phone Number</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Email Address</label>
                    <input
                      type="email"
                      required
                      placeholder="owner@coaching.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">City</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jaipur"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 uppercase mb-1">State</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajasthan"
                      value={formData.state}
                      onChange={(e) => setFormData({...formData, state: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-1">Coaching Experience</label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({...formData, experience: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 bg-white"
                  >
                    <option value="New Setup">New Setup (0 years)</option>
                    <option value="1-3 years">1 - 3 years experience</option>
                    <option value="3-5 years">3 - 5 years experience</option>
                    <option value="5+ years">5+ years experience</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-amber-500 text-white font-extrabold text-base hover:bg-amber-600 shadow-lg orange-glow transition-all duration-200 mt-2"
                >
                  Submit Franchise Application
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Modal Popup on Successful Submission */}
        <AnimatePresence>
          {submitted && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-2xl border border-amber-200 relative overflow-hidden"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-4 font-bold text-2xl shadow-lg">
                  ✓
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Application Received!</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Thank you, <span className="font-bold text-gray-900">{formData.ownerName}</span>. Your franchise application for <span className="font-bold text-amber-600">{formData.coachingName}</span> has been received. Our partner relations manager will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="w-full py-3 rounded-xl bg-gray-900 text-white font-bold text-sm hover:bg-amber-500 transition-colors"
                >
                  Done
                </button>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

