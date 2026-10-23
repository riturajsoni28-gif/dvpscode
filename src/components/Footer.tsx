import React from 'react';
import { PageId } from '../types';
import { SCHOOL_INFO, IMPORTANT_LINKS } from '../data/schoolData';
import { Phone, Mail, MapPin, ExternalLink, Award, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmission: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenAdmission }) => {
  const quickLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'academics', label: 'Academic Curriculum' },
    { id: 'facilities', label: 'School Facilities' },
    { id: 'activities', label: 'Student Activities' },
    { id: 'rules', label: 'Code of Conduct & Rules' },
    { id: 'gallery', label: 'Photo Gallery' },
    { id: 'contact', label: 'Contact & Location' }
  ];

  return (
    <footer className="bg-[#172B73] text-white/90 border-t border-[#172B73]">
      
      {/* Top Value Banner */}
      <div className="border-b border-white/10 bg-[#12225B] py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/15 flex items-center justify-center text-white shrink-0">
              <Award className="w-6 h-6 text-[#F4511E]" />
            </div>
            <div>
              <p className="text-sm font-bold text-white font-heading">
                Under Gaharwar Educational &amp; Welfare Society
              </p>
              <p className="text-xs text-white/70">
                School Code: 312328 · DISE: 23130806809 · Established 2016 · Nursery to Class XII
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenAdmission}
              className="btn-admissions px-4 py-2 text-xs font-semibold cursor-pointer"
            >
              Apply for Admission
            </button>
            <a
              href={SCHOOL_INFO.parentPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/15 rounded-lg transition-colors inline-flex items-center gap-1.5"
            >
              <span>SchoolMitra Login</span>
              <ExternalLink className="w-3.5 h-3.5 text-white/60" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Swiss Grid Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: School Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-white p-0.5 shrink-0 border border-white/20">
                <img 
                  src={SCHOOL_INFO.logoUrl} 
                  alt="Dreams Valley Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-white text-base leading-tight font-heading">Dreams Valley</h3>
                <span className="text-xs text-[#F4511E] font-semibold">Public School [English Medium]</span>
              </div>
            </div>
            <p className="text-xs text-white/75 leading-relaxed">
              Equitably providing high quality, efficient, and inspiring educational programs from Nursery to Class XII, nurturing students&apos; problem-solving, aesthetic, and moral excellence.
            </p>
            <div className="pt-2 text-xs text-white/80 space-y-1">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#FF7A00] shrink-0" />
                <span>Motto: &quot;{SCHOOL_INFO.motto}&quot;</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/90 font-heading border-b border-white/10 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      onNavigate(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-white/75 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[#F4511E]">›</span> {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Boards & Education Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/90 font-heading border-b border-white/10 pb-2">
              Official Boards &amp; Portals
            </h4>
            <ul className="space-y-2 text-xs">
              {IMPORTANT_LINKS.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/75 hover:text-[#F4511E] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="w-3 h-3 text-white/40" />
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10 text-white/60 text-[11px]">
                <span>Student Houses: Kalam · Maharana Pratap · Ambedkar · Agrasen</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Campus Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white/90 font-heading border-b border-white/10 pb-2">
              Campus Contact
            </h4>
            
            <div className="text-xs text-white/75 space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F4511E] shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address.full}</span>
              </div>
              
              <div className="pt-2 space-y-1 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Principal Sir:</span>
                  <a href={`tel:${SCHOOL_INFO.contacts.principal}`} className="text-white hover:underline font-mono">
                    {SCHOOL_INFO.contacts.principal}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Director Sir:</span>
                  <a href={`tel:${SCHOOL_INFO.contacts.director}`} className="text-white hover:underline font-mono">
                    {SCHOOL_INFO.contacts.director}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Vice Principal &amp; Transport:</span>
                  <a href={`tel:${SCHOOL_INFO.contacts.vicePrincipalAndTransport}`} className="text-white hover:underline font-mono">
                    {SCHOOL_INFO.contacts.vicePrincipalAndTransport}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/60">Account Desk:</span>
                  <a href={`tel:${SCHOOL_INFO.contacts.accountSection}`} className="text-white hover:underline font-mono">
                    {SCHOOL_INFO.contacts.accountSection}
                  </a>
                </div>
                <div className="pt-1.5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-white/60">Email:</span>
                  <a href={`mailto:${SCHOOL_INFO.contacts.email}`} className="text-white hover:underline">
                    {SCHOOL_INFO.contacts.email}
                  </a>
                </div>
                <div className="pt-1 flex items-center justify-between">
                  <span className="text-white/60">Location:</span>
                  <a 
                    href={SCHOOL_INFO.googleMapsUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[#F4511E] hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Sub-Footer */}
      <div className="border-t border-white/10 bg-[#0E1A47] py-4 px-4 sm:px-6 text-xs text-white/60">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} Dreams Valley Public School, Ichol. All rights reserved.
          </div>
          <div>
            <span>Under &quot;Gaharwar Educational &amp; Welfare Society&quot;</span>
            <span className="mx-2">·</span>
            <span className="text-white/40">Design &amp; Developed By MSITS, MAIHAR</span>
          </div>
        </div>
      </div>

    </footer>
  );
};
