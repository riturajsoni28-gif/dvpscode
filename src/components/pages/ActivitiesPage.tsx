import React, { useState } from 'react';
import { PageId } from '../../types';
import { ACTIVITIES } from '../../data/schoolData';
import { Search, Trophy, Sparkles, ArrowRight, ChevronRight } from 'lucide-react';
import AnimatedContent from '../reactbits/AnimatedContent';

interface ActivitiesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmission: () => void;
}

export const ActivitiesPage: React.FC<ActivitiesPageProps> = ({ onNavigate, onOpenAdmission }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'Cultural',
    'Academic & Science',
    'Sports & Yoga',
    'Field Visits',
    'Social & Nature'
  ];

  const filteredActivities = ACTIVITIES.filter((act) => {
    const matchesCat = selectedCategory === 'All' || act.category === selectedCategory;
    const matchesSearch = 
      act.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      act.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-12 sm:space-y-16 pb-20">
      
      {/* 1. Header Banner */}
      <section className="bg-gradient-to-r from-[#101E53] via-[#172B73] to-[#12225B] text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#FFFFFF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        <AnimatedContent distance={30} direction="vertical" duration={0.7} trigger="mount">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold uppercase tracking-wider text-[#FF7A00] border border-white/15">
              <span>Holistic Growth · 29+ Co-Curricular Programs</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white font-heading">
              Student Activities &amp; Events
            </h1>
            <p className="text-white/80 max-w-3xl text-sm sm:text-base leading-relaxed font-normal">
              From Vedic Sanskrit shlokas and classical dance to science fairs, civic police station visits, yoga, tree plantation, and annual sports championships.
            </p>
          </div>
        </AnimatedContent>
      </section>

      {/* 2. Search and Category Filter Deck */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <AnimatedContent distance={25} direction="vertical" duration={0.6} trigger="mount">
        <div className="soft-card p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-white/50 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search activities (e.g. Yoga, Quiz, Dam, Dance, Shlok)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm border border-white/20 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] bg-white/10 text-white placeholder:text-white/40 transition-all"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#FF7A00] text-white shadow-xs'
                    : 'text-white/80 hover:text-white hover:bg-white/10 border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>
        </AnimatedContent>

        <div className="flex items-center justify-between text-xs font-medium text-white/70 px-1">
          <span>Showing {filteredActivities.length} of {ACTIVITIES.length} total activities</span>
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="text-[#FF7A00] hover:underline font-semibold cursor-pointer"
            >
              Clear search filter
            </button>
          )}
        </div>
      </section>

      {/* 3. Activities Grid (Soft UI Cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedContent key={`${selectedCategory}-${searchQuery}`} distance={30} direction="vertical" duration={0.6} trigger="mount">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredActivities.map((act) => (
            <div 
              key={act.id}
              className="soft-card-interactive p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-orange-500/20 text-[#FF7A00] border border-orange-500/30">
                    {act.category}
                  </span>
                  <span className="font-mono text-xs text-white/40 font-semibold">
                    #{act.id.padStart(2, '0')}
                  </span>
                </div>

                <h3 className="font-bold text-white text-base font-heading leading-snug">
                  {act.name}
                </h3>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                  {act.description}
                </p>
              </div>

              <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs">
                <span className="text-white/60">Annual Curriculum</span>
                <span className="text-[#FF7A00] font-semibold flex items-center gap-1">
                  Active
                </span>
              </div>
            </div>
          ))}
        </div>
        </AnimatedContent>
      </section>

      {/* 4. Visual Spotlight on Activities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <AnimatedContent distance={35} direction="vertical" duration={0.7} trigger="scroll">
        <div className="border-b border-white/15 pb-3">
          <h2 className="text-2xl font-bold text-white font-heading">
            Memories from Campus Activities
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          <div className="soft-card p-3 space-y-2">
            <div className="rounded-xl overflow-hidden aspect-4/3 bg-slate-900/40">
              <img 
                src="/school_assets/yellow_day.jpg" 
                alt="Yellow Day at Dreams Valley" 
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-bold text-white text-sm font-heading">Yellow Day Celebration</h4>
            <p className="text-xs text-white/75">Kindergarten color discovery and theme presentations.</p>
          </div>

          <div className="soft-card p-3 space-y-2">
            <div className="rounded-xl overflow-hidden aspect-4/3 bg-slate-900/40">
              <img 
                src="/school_assets/green_day.jpg" 
                alt="Green Day Celebration" 
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-bold text-white text-sm font-heading">Green Day &amp; Tree Plantation</h4>
            <p className="text-xs text-white/75">Van Mahotsav eco-drives and botanical understanding.</p>
          </div>

          <div className="soft-card p-3 space-y-2">
            <div className="rounded-xl overflow-hidden aspect-4/3 bg-slate-900/40">
              <img 
                src="/school_assets/sports.jpg" 
                alt="Annual Sports Meet" 
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-bold text-white text-sm font-heading">Annual Sports &amp; Yoga</h4>
            <p className="text-xs text-white/75">Track championships, Surya Namaskar, and physical fitness.</p>
          </div>
        </div>
        </AnimatedContent>
      </section>

      {/* 5. Bottom Join Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedContent distance={35} direction="vertical" duration={0.7} trigger="scroll">
        <div className="soft-card p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div>
            <h4 className="text-lg font-bold text-white font-heading">
              Want to enroll your child in our activities?
            </h4>
            <p className="text-xs text-white/75 mt-1">
              Every student participates with zero additional activity fees.
            </p>
          </div>
          <button
            onClick={onOpenAdmission}
            className="btn-admissions px-6 py-2.5 text-xs font-semibold cursor-pointer shrink-0"
          >
            Apply for Admission
          </button>
        </div>
        </AnimatedContent>
      </section>

    </div>
  );
};
