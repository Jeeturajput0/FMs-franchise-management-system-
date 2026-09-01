import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from '../components/Icon';
import SectionHeading from '../components/SectionHeading';
import { solutionsRoles } from '../data/siteData';

export default function Solutions() {
  const [activeTab, setActiveTab] = useState(solutionsRoles[0].id);

  const selectedRole = solutionsRoles.find(r => r.id === activeTab) || solutionsRoles[0];

  return (
    <div className="py-12 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Role-Based Solutions"
          title="Designed for Every Role in"
          highlightTitle="Your Education Ecosystem"
          description="Switch between interactive role perspectives to see how AI Scholar provides specialized tools for Admins, Center Managers, Teachers, Students, and Franchise Owners."
        />

        {/* Role Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 bg-white p-2 rounded-2xl border border-gray-200 shadow-sm max-w-4xl mx-auto">
          {solutionsRoles.map((role) => {
            const isActive = activeTab === role.id;
            return (
              <button
                key={role.id}
                onClick={() => setActiveTab(role.id)}
                className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-amber-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                <span>{role.roleTitle}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Role Active Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedRole.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16"
          >
            {/* Left Content */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-amber-50 text-amber-800 border border-amber-200 mb-4">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                Role Solution Overview
              </span>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-3">
                {selectedRole.roleTitle}
              </h3>
              <p className="text-xl font-bold text-amber-600 mb-4">
                "{selectedRole.tagline}"
              </p>

              <p className="text-gray-600 text-base leading-relaxed mb-8">
                {selectedRole.summary}
              </p>

              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">
                Dedicated Dashboard Features
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {selectedRole.features.map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <Icon name="CheckCircle2" size={18} className="text-amber-500 shrink-0" />
                    <span className="text-sm font-semibold text-gray-800">{feat}</span>
                  </div>
                ))}
              </div>

              <Link
                to={selectedRole.dashboardPath}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gray-900 text-white font-extrabold text-sm hover:bg-amber-500 transition-colors shadow-lg group"
              >
                <span>Launch Interactive {selectedRole.roleTitle} Dashboard</span>
                <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Right Visual Box */}
            <div className="lg:col-span-5 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-gray-100 p-8 rounded-2xl border border-amber-200/50 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold text-xl shadow-md">
                    <Icon name="ShieldCheck" size={24} />
                  </div>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                    Active Security Scope
                  </span>
                </div>

                <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">Target Persona</div>
                <div className="text-2xl font-black text-gray-900 mb-4">{selectedRole.roleTitle} Account</div>

                <div className="space-y-3 text-xs text-gray-600 mb-6">
                  <div className="p-3 bg-white rounded-lg border border-gray-200 flex justify-between items-center">
                    <span className="font-semibold">Access Level:</span>
                    <span className="font-bold text-gray-900">Role Isolated</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-gray-200 flex justify-between items-center">
                    <span className="font-semibold">Data Sync:</span>
                    <span className="font-bold text-emerald-600">Real-time Websocket</span>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-gray-200 flex justify-between items-center">
                    <span className="font-semibold">Certificate Action:</span>
                    <span className="font-bold text-amber-600">Instant Verification</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-500 text-white text-center">
                <div className="text-xs font-bold uppercase tracking-wider mb-1">Interactive Sandbox</div>
                <div className="text-xs opacity-90">Click launch to experience live mock portal preview.</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* 5 All Roles Grid Summary */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900">Summary of All 5 Roles</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutionsRoles.map((role, idx) => (
              <div key={role.id} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs hover:border-amber-300 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md">{role.roleTitle}</span>
                    <Icon name="CheckCircle" size={16} className="text-amber-500" />
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mb-2">"{role.tagline}"</h4>
                  <p className="text-xs text-gray-600 mb-4">{role.summary}</p>
                </div>
                <Link to={role.dashboardPath} className="text-xs font-bold text-amber-600 hover:text-amber-700 flex items-center gap-1 mt-2">
                  <span>Open {role.roleTitle} Dashboard</span>
                  <Icon name="ArrowRight" size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

