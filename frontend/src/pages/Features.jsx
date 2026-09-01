import React, { useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import FeatureCard from '../components/FeatureCard';
import Icon from '../components/Icon';
import { allFeaturesList } from '../data/siteData';

export default function Features() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Core', 'Academic', 'Finance', 'Certification', 'Analytics', 'Operations', 'Student', 'Faculty', 'Security', 'Communication'];

  const filteredFeatures = allFeaturesList.filter(feat => {
    const matchesSearch = feat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          feat.desc.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || feat.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-12 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge="Platform Feature Matrix"
          title="20 Power Features Built for"
          highlightTitle="Education Scale"
          description="Explore every capability built into AI Scholar—from multi-franchise controls to instant QR certificate verification."
        />

        {/* Search & Filter Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-gray-200 shadow-sm mb-12 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Icon name="Search" size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search 20 features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto max-w-full pb-2 md:pb-0">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors shrink-0 ${
                    isActive
                      ? 'bg-amber-500 text-white shadow-xs'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>

        {/* Features Count Info */}
        <div className="mb-6 flex items-center justify-between text-xs font-bold text-gray-500">
          <span>Showing {filteredFeatures.length} of 20 Features</span>
          {selectedCategory !== 'All' && <span>Category: {selectedCategory}</span>}
        </div>

        {/* Features Grid */}
        {filteredFeatures.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {filteredFeatures.map((feature, idx) => (
              <FeatureCard
                key={idx}
                title={feature.title}
                desc={feature.desc}
                category={feature.category}
                index={idx}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 mb-16">
            <Icon name="SearchX" size={48} className="mx-auto text-gray-300 mb-3" />
            <h3 className="text-lg font-bold text-gray-900 mb-1">No features found</h3>
            <p className="text-xs text-gray-500 mb-4">Try clearing your search query or choosing another category.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }}
              className="px-4 py-2 bg-amber-500 text-white text-xs font-bold rounded-lg shadow-sm"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
}

