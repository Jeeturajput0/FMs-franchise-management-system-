import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../components/Icon';
import SectionHeading from '../components/SectionHeading';
import { hierarchyNodes } from '../data/siteData';

export default function About() {
  const pillars = [
    {
      title: "Parent Organization",
      icon: "Building2",
      color: "bg-amber-500",
      desc: "AI Scholar establishes standardized academic curricula, brand quality controls, and centralized system administration."
    },
    {
      title: "Franchise Network",
      icon: "Globe",
      color: "bg-gray-900",
      desc: "Regional coaching centers operate with local autonomy while consuming AI Scholar's verified courses and management tools."
    },
    {
      title: "Learning Platform",
      icon: "BookOpen",
      color: "bg-amber-600",
      desc: "Cloud LMS hosting digital modules, daily lecture schedules, attendance tracking, and student progress reports."
    },
    {
      title: "Certification System",
      icon: "Award",
      color: "bg-emerald-600",
      desc: "Tamper-proof digital certificates automatically generated upon course completion with embedded QR code verification."
    }
  ];

  return (
    <div className="py-12 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Heading */}
        <SectionHeading
          badge="About AI Scholar"
          title="One Platform."
          highlightTitle="Every Part of Your Education Business."
          description="AI Scholar is the parent organization providing standardized courseware, cloud learning systems, and tamper-proof certification to multiple accredited coaching franchise centers."
        />

        {/* Business Hierarchy Visual Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm mb-16"
        >
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">
              Business Hierarchy & Operational Flow
            </span>
          </div>

          <div className="flex flex-col items-center gap-4 max-w-2xl mx-auto">
            {hierarchyNodes.map((node, idx) => (
              <React.Fragment key={idx}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`w-full p-4 sm:p-5 rounded-2xl ${node.color} text-center shadow-md flex items-center justify-between px-6`}
                >
                  <div className="flex items-center gap-3 text-left">
                    <span className="text-xs font-black opacity-60">0{node.level}</span>
                    <div>
                      <div className="font-extrabold text-base sm:text-lg">{node.title}</div>
                      <div className="text-xs opacity-90">{node.sub}</div>
                    </div>
                  </div>
                  <Icon name="CheckCircle" size={20} className="opacity-80" />
                </motion.div>

                {idx < hierarchyNodes.length - 1 && (
                  <div className="flex items-center justify-center my-1 text-amber-500">
                    <Icon name="ArrowDown" size={22} className="animate-bounce" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* 4 Pillars Animated Cards Grid */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl font-bold text-gray-900">
              The 4 Core Pillars of AI Scholar
            </h3>
            <p className="text-sm text-gray-600">
              How our parent ecosystem ensures quality, compliance, and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-white p-7 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all"
              >
                <div className={`w-12 h-12 rounded-xl ${pillar.color} text-white flex items-center justify-center mb-5 shadow-sm`}>
                  <Icon name={pillar.icon} size={24} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{pillar.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mission Statement Banner */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-3xl p-8 sm:p-12 shadow-xl orange-glow flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">Our Mission & Vision</h3>
            <p className="text-amber-100 text-sm sm:text-base leading-relaxed">
              To empower coaching entrepreneurs across the globe with enterprise-grade LMS infrastructure, verified courseware, and standardized credentialing that students trust.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="/franchise"
              className="px-6 py-3.5 rounded-xl bg-white text-gray-900 font-extrabold text-sm hover:bg-gray-100 shadow-md transition-colors"
            >
              Become a Franchise Partner
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

