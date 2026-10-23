import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AdmissionModal } from './components/AdmissionModal';
import { HomePage } from './components/pages/HomePage';
import { AboutPage } from './components/pages/AboutPage';
import { AcademicsPage } from './components/pages/AcademicsPage';
import { FacilitiesPage } from './components/pages/FacilitiesPage';
import { ActivitiesPage } from './components/pages/ActivitiesPage';
import { RulesPage } from './components/pages/RulesPage';
import { GalleryPage } from './components/pages/GalleryPage';
import { ContactPage } from './components/pages/ContactPage';
import { Phone, GraduationCap } from 'lucide-react';
import { SCHOOL_INFO } from './data/schoolData';
import GhostFibers from './components/reactbits/GhostFibers';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);

  // Deep linking and hash navigation support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = [
        'home', 
        'about', 
        'academics', 
        'facilities', 
        'activities', 
        'rules', 
        'gallery', 
        'contact'
      ];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#172B73] via-[#101E53] to-[#172B73] text-white antialiased selection:bg-[#F4511E]/25 selection:text-[#F4511E] relative">
      
      {/* Global Interactive GhostFibers Background in Button Orange Palette */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-75">
        <GhostFibers
          glowColor="#F4511E"
          secondaryColor="#FF7A00"
          lineColor="#FFD180"
          gradient="along"
          layers={3}
          twist={1.2}
          threads={72}
          fiberStyle="dots"
          depthOfField={0.75}
          hoverEffect="focus"
          intro={true}
          mouseInteraction={true}
          lightMode={false}
          glow={1.1}
          brightness={1.2}
          speed={0.35}
          scale={1.15}
          className="w-full h-full"
        />
      </div>

      {/* Top Header Navigation */}
      <div className="relative z-40">
        <Header 
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenAdmission={() => setIsAdmissionOpen(true)}
        />
      </div>

      {/* Main Page Content */}
      <main className="flex-1 relative z-10">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={handleNavigate}
            onOpenAdmission={() => setIsAdmissionOpen(true)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage 
            onNavigate={handleNavigate}
            onOpenAdmission={() => setIsAdmissionOpen(true)}
          />
        )}

        {currentPage === 'academics' && (
          <AcademicsPage 
            onNavigate={handleNavigate}
            onOpenAdmission={() => setIsAdmissionOpen(true)}
          />
        )}

        {currentPage === 'facilities' && (
          <FacilitiesPage 
            onNavigate={handleNavigate}
            onOpenAdmission={() => setIsAdmissionOpen(true)}
          />
        )}

        {currentPage === 'activities' && (
          <ActivitiesPage 
            onNavigate={handleNavigate}
            onOpenAdmission={() => setIsAdmissionOpen(true)}
          />
        )}

        {currentPage === 'rules' && (
          <RulesPage 
            onNavigate={handleNavigate}
            onOpenAdmission={() => setIsAdmissionOpen(true)}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage 
            onNavigate={handleNavigate}
            onOpenAdmission={() => setIsAdmissionOpen(true)}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage 
            onNavigate={handleNavigate}
            onOpenAdmission={() => setIsAdmissionOpen(true)}
          />
        )}
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer 
          onNavigate={handleNavigate}
          onOpenAdmission={() => setIsAdmissionOpen(true)}
        />
      </div>

      {/* Admission Application Modal */}
      <AdmissionModal 
        isOpen={isAdmissionOpen}
        onClose={() => setIsAdmissionOpen(false)}
      />

      {/* Mobile Floating Quick Action Pill with Soft UI Styling */}
      <div className="fixed bottom-5 right-4 z-30 sm:hidden flex items-center gap-2">
        <a
          href={`tel:${SCHOOL_INFO.contacts.principal}`}
          className="w-12 h-12 rounded-full bg-white text-[#172B73] border border-[#E1E7F0] shadow-lg flex items-center justify-center active:scale-95 transition-transform"
          aria-label="Call School Desk"
        >
          <Phone className="w-5 h-5 text-[#F4511E]" />
        </a>
        <button
          onClick={() => setIsAdmissionOpen(true)}
          className="h-12 px-4 rounded-full btn-admissions shadow-lg flex items-center gap-2 text-xs font-semibold active:scale-95 transition-transform cursor-pointer"
          aria-label="Apply Online"
        >
          <GraduationCap className="w-4 h-4 text-white" />
          <span>Apply Now</span>
        </button>
      </div>

    </div>
  );
}
