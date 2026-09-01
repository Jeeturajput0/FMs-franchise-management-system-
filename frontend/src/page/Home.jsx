import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import RoleCard from '../components/RoleCard';
import StatCard from '../components/StatCard';
import DashboardPreview from '../components/DashboardPreview';
import { siteMetrics, servicesList, solutionsRoles } from '../data/siteData';

export default function Home() {
  return (
    <div className="overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 hero-gradient">
        {/* Background glow orb */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          {/* Hero Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 shadow-xs mb-6"
          >
            <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse"></span>
            <span className="text-xs font-bold text-amber-900 uppercase tracking-wider">
              Next-Gen Education Franchise System
            </span>
          </motion.div>

          {/* Hero Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto"
          >
            Powering the Future of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700">
              Coaching Franchises
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed font-normal"
          >
            AI Scholar connects coaching centers, students, teachers, courses, payments and certificates into one powerful education management platform.
          </motion.p>

          {/* Hero CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Link
              to="/franchise"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-amber-500 text-white font-bold text-base shadow-xl hover:bg-amber-600 orange-glow transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              <span>Get Started</span>
              <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/solutions"
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white text-gray-900 font-bold text-base border border-gray-200 shadow-sm hover:border-amber-300 hover:bg-amber-50/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Icon name="Play" size={18} className="text-amber-500 fill-amber-500" />
              <span>Explore Platform</span>
            </Link>
          </motion.div>

          {/* Hero Dashboard Preview Component */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <DashboardPreview />
          </motion.div>

        </div>
      </section>

      {/* 2. TRUST & STATISTICS SECTION */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">
              Built for modern education businesses
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {siteMetrics.map((stat, idx) => (
              <StatCard key={idx} label={stat.label} count={stat.count} detail={stat.detail} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. BUSINESS HIERARCHY OVERVIEW */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Unified Hierarchy"
            title="AI Scholar Ecosystem"
            highlightTitle="Connected Flow"
            description="From central course creation to QR-verified certificates—see how AI Scholar seamlessly links every entity."
          />

          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-sm relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-center">
              <div className="p-4 px-6 rounded-2xl bg-amber-500 text-white font-extrabold text-sm shadow-md">
                AI Scholar (Parent)
              </div>
              <Icon name="ChevronRight" size={24} className="text-amber-500 hidden sm:block" />
              <div className="p-4 px-6 rounded-2xl bg-gray-900 text-white font-extrabold text-sm shadow-md">
                Coaching Franchises
              </div>
              <Icon name="ChevronRight" size={24} className="text-amber-500 hidden sm:block" />
              <div className="p-4 px-6 rounded-2xl bg-amber-100 text-amber-900 font-bold text-sm border border-amber-300">
                Students + Teachers
              </div>
              <Icon name="ChevronRight" size={24} className="text-amber-500 hidden sm:block" />
              <div className="p-4 px-6 rounded-2xl bg-gray-100 text-gray-900 font-bold text-sm border border-gray-200">
                Courses & Performance
              </div>
              <Icon name="ChevronRight" size={24} className="text-amber-500 hidden sm:block" />
              <div className="p-4 px-6 rounded-2xl bg-emerald-500 text-white font-extrabold text-sm shadow-md flex items-center gap-2">
                <Icon name="QrCode" size={18} />
                Certificates
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED SERVICES PREVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Comprehensive Platform"
            title="Everything You Need to Run"
            highlightTitle="Coaching Franchises"
            description="Manage multi-branch centers, syllabus distribution, teacher payroll, and instant certificate verification."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {servicesList.slice(0, 4).map((service, idx) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                iconName={service.iconName}
                index={idx}
              />
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-white font-bold text-sm hover:bg-amber-500 transition-colors shadow-md group"
            >
              <span>View All 8 Core Services</span>
              <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. ROLE-BASED SOLUTIONS HIGHLIGHT */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-500/20 text-amber-400 border border-amber-500/30 mb-4">
              Tailored Portals
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              Built for Every Stakeholder in Your Business
            </h2>
            <p className="text-gray-400 text-base">
              Dedicated, secure dashboards for Super Admins, Coaching Admins, Teachers, Students, and Franchise Investors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutionsRoles.slice(0, 3).map((role, idx) => (
              <RoleCard key={role.id} role={role} index={idx} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-amber-500 text-white font-bold text-sm hover:bg-amber-600 shadow-xl orange-glow transition-all"
            >
              <span>Explore All 5 Role Solutions</span>
              <Icon name="ArrowRight" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION SECTION */}
      <section className="py-20 bg-amber-50 border-t border-amber-200/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6">
            Ready to Transform Your Coaching Business?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Join hundreds of coaching centers accelerating student growth and streamlining franchise operations with AI Scholar.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/franchise"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-amber-500 text-white font-bold text-base hover:bg-amber-600 shadow-lg orange-glow transition-all"
            >
              Join as Franchise Partner
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-gray-900 font-bold text-base border border-gray-300 hover:border-amber-400 hover:bg-amber-50 transition-all"
            >
              Contact Sales Team
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

