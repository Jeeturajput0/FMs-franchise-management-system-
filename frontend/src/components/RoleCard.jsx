import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function RoleCard({ role, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
            {role.roleTitle}
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          {role.tagline}
        </h3>
        
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          {role.summary}
        </p>

        <div className="space-y-2.5 mb-8">
          <div className="text-xs font-bold uppercase tracking-wider text-gray-600 mb-3">Key Capabilities</div>
          {role.features.map((feat, idx) => (
            <div key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
              <Icon name="CheckCircle2" size={18} className="text-amber-500 shrink-0 mt-0.5" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <Link
        to={role.dashboardPath}
        className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-sm bg-gray-900 text-white hover:bg-amber-500 hover:text-white transition-colors duration-200 shadow-md group"
      >
        <span>Open {role.roleTitle} View</span>
        <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}

