import React from 'react';
import SectionHeading from '../components/SectionHeading';
import WorkflowStep from '../components/WorkflowStep';
import { workflowSteps } from '../data/siteData';

export default function HowItWorks() {
  return (
    <div className="py-12 lg:py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="10-Step Workflow"
          title="End-to-End Operational Journey"
          highlightTitle="From Course to Certificate"
          description="Follow the automated lifecycle of how AI Scholar standardizes education delivery across every franchise center."
        />

        {/* 10 Step Vertical Timeline Cards */}
        <div className="space-y-4 mb-16 relative">
          
          {/* Vertical Connecting Line on Desktop */}
          <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-amber-500 via-amber-300 to-emerald-500 hidden md:block opacity-30 pointer-events-none" />

          {workflowSteps.map((stepItem, idx) => (
            <WorkflowStep
              key={stepItem.step}
              step={stepItem.step}
              title={stepItem.title}
              desc={stepItem.desc}
              icon={stepItem.icon}
              index={idx}
              total={workflowSteps.length}
            />
          ))}
        </div>

        {/* Workflow Completion Banner */}
        <div className="bg-white p-8 rounded-3xl border border-amber-200 shadow-xl text-center">
          <div className="w-16 h-16 rounded-full bg-amber-500 text-white flex items-center justify-center mx-auto mb-4 font-extrabold shadow-lg">
            ✓
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Automated Quality Assurance</h3>
          <p className="text-sm text-gray-600 max-w-xl mx-auto mb-6">
            Every step is recorded with full audit trails, ensuring student records and certificates are 100% genuine and instantly verifiable worldwide.
          </p>
          <a
            href="/franchise"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gray-900 text-white font-extrabold text-sm hover:bg-amber-500 transition-colors shadow-md"
          >
            Start Your Franchise Today
          </a>
        </div>

      </div>
    </div>
  );
}

