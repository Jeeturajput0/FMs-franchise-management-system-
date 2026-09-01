import React from 'react';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import { servicesList } from '../data/siteData';

export default function Services() {
  return (
    <div className="py-12 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Platform Services"
          title="Enterprise Solutions for"
          highlightTitle="Modern Education Hubs"
          description="AI Scholar delivers a complete suite of cloud management services engineered specifically for multi-branch coaching networks."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {servicesList.map((service, idx) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              iconName={service.iconName}
              index={idx}
            />
          ))}
        </div>

        {/* Detailed Service Highlights Banner */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-200 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-extrabold text-amber-500 mb-2">99.9%</div>
            <div className="text-sm font-bold text-gray-900 mb-1">Platform Uptime</div>
            <div className="text-xs text-gray-500">Cloud hosted reliability with redundant database backups.</div>
          </div>
          <div className="border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8">
            <div className="text-3xl font-extrabold text-amber-500 mb-2">Instant</div>
            <div className="text-sm font-bold text-gray-900 mb-1">QR Certificate Issuing</div>
            <div className="text-xs text-gray-500">Generate tamper-proof credentials upon course completion.</div>
          </div>
          <div className="border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-8">
            <div className="text-3xl font-extrabold text-amber-500 mb-2">Multi-Tenant</div>
            <div className="text-sm font-bold text-gray-900 mb-1">Role Architecture</div>
            <div className="text-xs text-gray-500">Isolate permissions between Super Admin, Franchise, Teacher & Student.</div>
          </div>
        </div>

      </div>
    </div>
  );
}

