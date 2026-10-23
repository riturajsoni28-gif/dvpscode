import React from 'react';
import { PageId } from '../../types';
import { 
  SCHOOL_INFO, 
  SARASWATI_VANDANA, 
  ABOUT_CONTENT, 
  FACILITIES, 
  HOUSES,
  TESTIMONIALS,
  NEWS_EVENTS,
  ACHIEVEMENTS
} from '../../data/schoolData';
import { 
  ArrowRight, 
  CheckCircle2, 
  GraduationCap, 
  Phone,
  ShieldCheck,
  Award,
  Users,
  Bus,
  Sparkles,
  BookOpen,
  Calendar,
  Quote,
  Star,
  ChevronRight,
  Compass,
  Trophy,
  RotateCw
} from 'lucide-react';
import FlipCard from '../reactbits/FlipCard';
import { MagicBento, MagicBentoCard } from '../reactbits/MagicBento';
import AnimatedContent from '../reactbits/AnimatedContent';
import Lanyard from '../reactbits/Lanyard';
import SplitFlapText from '../reactbits/SplitFlapText';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenAdmission: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenAdmission }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-20">
      
      {/* 1. HERO SECTION (Seamless with global navy gradient and orange GhostFibers) */}
      <section className="relative text-white overflow-hidden min-h-[580px] lg:min-h-[640px] bg-transparent">
        
        {/* Subtle Ambient Accents */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F4511E]/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-80 h-80 bg-white/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24 lg:py-28">
          <div 
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center -mt-[77px] pt-0 ml-0"
            style={{ paddingTop: '0px', marginLeft: '0px', marginTop: '-77px' }}
          >
            
            {/* LEFT COLUMN: Interactive 3D Physics Lanyard React Bit */}
            <div className="lg:col-span-5 w-full flex flex-col items-center">
              <AnimatedContent distance={40} direction="horizontal" duration={0.85} trigger="mount" className="w-full">
                <div className="relative w-full h-[520px] sm:h-[580px] lg:h-[640px] rounded-3xl overflow-hidden bg-white/10 border border-white/20 backdrop-blur-md shadow-2xl flex flex-col">
                  
                  {/* Top Header Badge */}
                  <div className="absolute top-4 inset-x-4 z-20 flex items-center justify-between pointer-events-none">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-white shadow-md">
                      <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
                      <span>DVPS Official 3D Badge</span>
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-white">
                      <span>CBSE 2026–27</span>
                    </div>
                  </div>

                  {/* 3D Physics Lanyard Canvas */}
                  <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
                    <Lanyard
                      frontImage="/school_assets/id_card_front.svg?v=4"
                      backImage="/school_assets/id_card_back.svg?v=4"
                      strapImage="/school_assets/strap_ribbon.svg?v=4"
                      finish="glossy"
                      cardColor="#ffffff"
                      strapColor="#172B73"
                      size={0.65}
                      gravity={1}
                      elasticity={0.5}
                      breeze={0.4}
                      interactive={true}
                      intro={true}
                      className="w-full h-full"
                    />
                  </div>

                  {/* Interactive Helper Banner at Bottom */}
                  <div className="absolute bottom-4 inset-x-4 z-20 pointer-events-none flex items-center justify-between text-xs text-white/90 bg-slate-900/70 backdrop-blur-md border border-white/15 px-3.5 py-2 rounded-xl shadow-lg">
                    <span className="flex items-center gap-1.5 font-medium">
                      <RotateCw className="w-3.5 h-3.5 text-amber-400 animate-spin" style={{ animationDuration: '6s' }} />
                      <span>Drag to swing · Click to flip badge</span>
                    </span>
                    <span className="text-[10px] text-orange-400 font-bold uppercase">Interactive 3D</span>
                  </div>

                </div>
              </AnimatedContent>
            </div>

            {/* RIGHT COLUMN: Transferred Hero Content & Actions */}
            <div className="lg:col-span-7">
              <AnimatedContent distance={40} direction="vertical" duration={0.8} trigger="mount" className="space-y-6 text-center lg:text-left">
                {/* Badge Strip */}
                <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-medium text-white/90">
                  <span className="w-2 h-2 rounded-full bg-[#F4511E] animate-pulse" />
                  <span>Established 2016 · Ichol, Satna (M.P.)</span>
                  <span className="text-white/40">|</span>
                  <span className="text-[#FF7A00] font-semibold">DISE: {SCHOOL_INFO.diseCode}</span>
                </div>

                {/* Main Headline with SplitFlapText React Bit */}
                <h1 className="space-y-2.5 text-center lg:text-left drop-shadow-md" style={{ textWrap: 'balance' }}>
                  <span className="block text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-heading leading-tight">
                    Where Character Meets
                  </span>
                  <div className="flex items-center justify-center lg:justify-start overflow-x-auto py-1">
                    <SplitFlapText
                      words={['EXCELLENCE', 'LEADERSHIP', 'KNOWLEDGE', 'INNOVATION', 'CHARACTER']}
                      flipDuration={0.12}
                      stagger={0.05}
                      cycleDelay={2400}
                      charset="alpha"
                      flipsPerChar={7}
                      order="left"
                      align="left"
                      tileStyle="board"
                      tileColor="#0b1638"
                      textColor="#F4511E"
                      glare={0.3}
                      depth={0.6}
                      tileRadius="clamp(4px, 0.7vw, 8px)"
                      gap="clamp(3px, 0.5vw, 6px)"
                      fontSize="clamp(22px, 3.6vw, 44px)"
                      loop={true}
                      padTo={10}
                      intro={true}
                      className="shadow-2xl"
                    />
                  </div>
                  <span className="block text-xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-heading">
                    in Education
                  </span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-white/90 max-w-2xl leading-relaxed font-normal mx-auto lg:mx-0 drop-shadow-sm">
                  Dreams Valley Public School [English Medium] empowers students from <strong className="text-white font-semibold">Nursery to 12th</strong> with specialized Senior Secondary streams in <strong className="text-[#FF7A00] font-semibold">Maths, Biology, Commerce &amp; Arts</strong>, 35:1 faculty care, and GPS fleet transport.
                </p>

                {/* CTA Buttons */}
                <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <button
                    onClick={onOpenAdmission}
                    className="btn-admissions px-6 py-3.5 text-sm font-semibold inline-flex items-center gap-2.5 cursor-pointer shadow-lg"
                  >
                    <GraduationCap className="w-5 h-5 text-white" />
                    <span>Apply for Admission 2026–27</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onNavigate('academics')}
                    className="px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all inline-flex items-center gap-2 backdrop-blur-xs cursor-pointer"
                  >
                    <span>Explore Streams (Maths, Bio, Comm, Arts)</span>
                  </button>
                </div>

                {/* Quick Trust Highlights */}
                <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-white/80 text-left">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF7A00] shrink-0" />
                    <span>Free Spoken English</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF7A00] shrink-0" />
                    <span>CCTV Smart Campus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#FF7A00] shrink-0" />
                    <span>Athletic Sports Ground</span>
                  </div>
                </div>
              </AnimatedContent>
            </div>

          </div>
        </div>
      </section>

      {/* 2. INSTITUTIONAL ACHIEVEMENTS STRIP (Magic Bento Swiss Grid 4-Column Proof) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 -mt-10 sm:-mt-12 relative z-20">
        <AnimatedContent distance={35} direction="vertical" duration={0.8} threshold={0.1}>
          <MagicBento
            columns={4}
            theme="dark"
            glowColor="#F4511E"
            radius={18}
            gap={16}
            enableBorderGlow
            enableSpotlight
            enableTilt
            items={ACHIEVEMENTS.map((ach) => ({
              id: ach.id,
              content: (
                <div className="p-5 sm:p-6 space-y-1.5 h-full flex flex-col justify-center">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight drop-shadow-xs">
                    {ach.metric}
                  </span>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#F4511E]">
                    {ach.title}
                  </p>
                  <p className="text-xs text-white/80 leading-relaxed">
                    {ach.description}
                  </p>
                </div>
              )
            }))}
          />
        </AnimatedContent>
      </section>

      {/* 3. SCHOOL INTRODUCTION & SOCIETY FOUNDATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedContent distance={40} direction="vertical" duration={0.8} threshold={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-1.5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] block">
                  About The Institution
                </span>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading tracking-tight">
                  Nurturing Potential within a Caring and Inspiring Environment
                </h2>
              </div>

              <p className="text-sm sm:text-base text-white/85 leading-relaxed font-normal">
                Under the aegis of <strong className="text-white font-semibold">&quot;{SCHOOL_INFO.society}&quot;</strong>, Dreams Valley Public School was established in 2016 to bridge the gap between quality education and community accessibility. We believe that all children can achieve their full potential when surrounded by devoted educators and world-class infrastructure.
              </p>

              <div className="pt-2">
                <MagicBento
                  columns={2}
                  theme="dark"
                  glowColor="#FF7A00"
                  radius={16}
                  gap={16}
                  enableBorderGlow
                  enableSpotlight
                  enableTilt
                  items={[
                    {
                      id: 'mission',
                      content: (
                        <div className="p-5 space-y-1.5 h-full flex flex-col justify-center">
                          <span className="text-xs font-bold text-white uppercase tracking-wide block">
                            Our Mission
                          </span>
                          <p className="text-xs text-white/80 leading-relaxed">
                            To develop inquiring, knowledgeable, and caring young people who contribute to a peaceful and progressive nation.
                          </p>
                        </div>
                      )
                    },
                    {
                      id: 'vision',
                      content: (
                        <div className="p-5 space-y-1.5 h-full flex flex-col justify-center">
                          <span className="text-xs font-bold text-[#FF7A00] uppercase tracking-wide block">
                            Our Vision
                          </span>
                          <p className="text-xs text-white/80 leading-relaxed">
                            Every student achieving at their maximum potential in an engaging, inspiring, and ethical learning atmosphere.
                          </p>
                        </div>
                      )
                    }
                  ]}
                />
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('about')}
                  className="text-xs font-bold text-white/90 hover:text-[#FF7A00] transition-colors inline-flex items-center gap-1.5 group cursor-pointer"
                >
                  <span>Read Full School History &amp; 7 Core Aims</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <MagicBentoCard glowColor="#172B73" radius={18} noPadding>
                <div className="overflow-hidden p-2.5 bg-white/10 backdrop-blur-md rounded-2xl border border-white/15">
                  <div className="rounded-xl overflow-hidden aspect-4/3 bg-slate-900/40">
                    <img 
                      src="/school_assets/building_front.jpg" 
                      alt="School Campus Front" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-3 text-xs text-white/90 flex items-center justify-between font-medium">
                    <span>Front Campus Grounds &amp; Lawn</span>
                    <span className="text-[#FF7A00] font-semibold">Ichol, Satna</span>
                  </div>
                </div>
              </MagicBentoCard>
            </div>

          </div>
        </AnimatedContent>
      </section>

      {/* 4. ACADEMICS FROM NURSERY TO CLASS XII */}
      <section className="bg-white/[0.04] backdrop-blur-xs py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          
          <AnimatedContent distance={35} direction="vertical" duration={0.8} threshold={0.1}>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] block">
                  Comprehensive Curriculum
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                  Academic Journey: Nursery to Class XII
                </h2>
              </div>
              <button
                onClick={() => onNavigate('academics')}
                className="text-xs font-semibold text-white/90 hover:text-[#FF7A00] inline-flex items-center gap-1 group cursor-pointer"
              >
                <span>View Timings &amp; Uniforms</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </AnimatedContent>

          <AnimatedContent distance={40} direction="vertical" duration={0.85} delay={0.1} threshold={0.1}>
            <MagicBento
              columns={4}
              theme="dark"
              glowColor="#F4511E"
              radius={18}
              gap={20}
              enableBorderGlow
              enableSpotlight
              enableTilt
              items={[
                {
                  id: 'acad-early',
                  content: (
                    <div className="p-6 space-y-3 flex flex-col justify-between h-full">
                      <div className="space-y-2">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-amber-400/20 text-amber-300 border border-amber-400/30">
                          Ages 3 to 5 Years
                        </span>
                        <h3 className="text-lg font-bold text-white font-heading">
                          Kindergarten &amp; Nursery
                        </h3>
                        <p className="text-xs text-white/80 leading-relaxed">
                          Play-way foundational pedagogy, sensory play, basic numeracy, storytelling, motor skills development, and color discovery days.
                        </p>
                      </div>
                      <div className="pt-3 border-t border-white/15 text-xs font-semibold text-[#FF7A00]">
                        Nursery · LKG · UKG
                      </div>
                    </div>
                  )
                },
                {
                  id: 'acad-primary',
                  content: (
                    <div className="p-6 space-y-3 flex flex-col justify-between h-full">
                      <div className="space-y-2">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-blue-400/20 text-blue-300 border border-blue-400/30">
                          Classes I to V
                        </span>
                        <h3 className="text-lg font-bold text-white font-heading">
                          Primary School
                        </h3>
                        <p className="text-xs text-white/80 leading-relaxed">
                          Concept-based core subjects, free spoken English training, arithmetic logic, environmental science, and creative arts integration.
                        </p>
                      </div>
                      <div className="pt-3 border-t border-white/15 text-xs font-semibold text-[#FF7A00]">
                        Foundational Literacy &amp; Numeracy
                      </div>
                    </div>
                  )
                },
                {
                  id: 'acad-middle',
                  content: (
                    <div className="p-6 space-y-3 flex flex-col justify-between h-full">
                      <div className="space-y-2">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-orange-500/20 text-[#FF7A00] border border-orange-500/30">
                          Classes VI to VIII
                        </span>
                        <h3 className="text-lg font-bold text-white font-heading">
                          Middle School
                        </h3>
                        <p className="text-xs text-white/80 leading-relaxed">
                          Experiential laboratory science, advanced mathematics, language arts, social studies, digital literacy in computer lab, and house events.
                        </p>
                      </div>
                      <div className="pt-3 border-t border-white/15 text-xs font-semibold text-[#FF7A00]">
                        STEM &amp; House Competitions
                      </div>
                    </div>
                  )
                },
                {
                  id: 'acad-senior',
                  content: (
                    <div className="p-6 space-y-3 flex flex-col justify-between h-full">
                      <div className="space-y-2">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-orange-500/25 text-[#FF7A00] border border-orange-500/40">
                          Classes 9th to 12th
                        </span>
                        <h3 className="text-lg font-bold text-white font-heading">
                          Secondary &amp; Senior Secondary
                        </h3>
                        <p className="text-xs text-white/80 leading-relaxed">
                          Four specialized streams: <strong className="text-white">Maths (PCM)</strong>, <strong className="text-[#FF7A00]">Biology (PCB)</strong>, <strong className="text-[#FF7A00]">Commerce</strong>, and <strong className="text-purple-300">Arts</strong> with NEET/JEE and board mentorship.
                        </p>
                      </div>
                      <div className="pt-3 border-t border-white/15 text-xs font-bold text-[#FF7A00] flex flex-wrap gap-1">
                        <span>Maths</span> · <span>Biology</span> · <span>Commerce</span> · <span>Arts</span>
                      </div>
                    </div>
                  )
                }
              ]}
            />
          </AnimatedContent>

        </div>
      </section>

      {/* 5. SACRED SARASWATI VANDANA INVOCATION (Glassmorphism Card) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedContent distance={40} direction="vertical" duration={0.8} threshold={0.1}>
          <div className="p-6 sm:p-10 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Saraswati Statue Photo */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="w-56 h-64 sm:w-60 sm:h-72 rounded-2xl overflow-hidden border border-white/20 shadow-lg bg-black/20">
                  <img 
                    src="/school_assets/saraswati.jpg" 
                    alt="Maa Saraswati Shrine at Assembly" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Hymn & Meaning */}
              <div className="lg:col-span-8 space-y-3.5">
                <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#FF7A00]">
                  Morning Assembly Invocation
                </span>

                <h2 className="text-xl sm:text-2xl font-bold text-white font-hindi tracking-wide">
                  {SARASWATI_VANDANA.shloka}
                </h2>

                <div className="bg-black/30 backdrop-blur-md rounded-xl p-5 border border-white/15 shadow-inner space-y-1.5 font-hindi text-white/95 text-sm sm:text-base leading-relaxed">
                  {SARASWATI_VANDANA.lines.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </div>

                <p className="text-xs text-white/80 italic">
                  &quot;{SARASWATI_VANDANA.meaning}&quot;
                </p>
              </div>

            </div>
          </div>
        </AnimatedContent>
      </section>

      {/* 6. LEADERSHIP DESK: DIRECTOR SIR & PRINCIPAL SIR WITH AUTHENTIC PHOTOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        <AnimatedContent distance={35} direction="vertical" duration={0.8} threshold={0.1}>
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] block">
              School Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
              Words of Wisdom from Leadership
            </h2>
            <p className="text-xs sm:text-sm text-white/80">
              Mentoring young minds with unwavering moral values, devotion to time, and academic zeal.
            </p>
          </div>
        </AnimatedContent>

        {/* Interactive Flip Cards: Director Sir & Principal Sir */}
        <AnimatedContent distance={45} direction="vertical" duration={0.85} delay={0.1} threshold={0.1}>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12 py-2">
            
            {/* 1. Director Sir FlipCard */}
            <FlipCard
              width={380}
              height={480}
              radius={20}
              background="rgba(255, 255, 255, 0.08)"
              color="#FFFFFF"
              shadowColor="rgba(0, 0, 0, 0.45)"
              shadowOpacity={0.4}
              tiltMax={10}
              front={
                <div className="w-full h-full p-6 flex flex-col justify-between bg-white/10 backdrop-blur-md text-white rounded-[20px] select-none border border-white/20 shadow-2xl">
                  <div className="space-y-4">
                    <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden bg-slate-900/40 shadow-sm border border-white/15">
                      <img 
                        src="/school_assets/director.jpg" 
                        alt="Director Sir" 
                        className="w-full h-full object-cover object-top"
                      />
                      <span className="absolute top-2.5 right-2.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#F4511E] text-white shadow-xs">
                        Director Sir
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] font-bold text-[#FF7A00] uppercase tracking-wider block">
                        Executive Leadership
                      </span>
                      <h3 className="font-bold text-white text-xl font-heading leading-tight mt-0.5">
                        Director Sir
                      </h3>
                      <p className="text-xs text-white/70 mt-0.5">
                        Dreams Valley Public (E.M.) School
                      </p>
                    </div>

                    <div className="bg-black/30 backdrop-blur-md rounded-xl p-3 border border-white/15 flex items-center justify-between text-xs">
                      <span className="text-white/70 font-medium">Contact Number:</span>
                      <a 
                        href={`tel:${SCHOOL_INFO.contacts.director}`} 
                        onClick={(e) => e.stopPropagation()} 
                        className="font-mono font-bold text-white hover:text-[#FF7A00] flex items-center gap-1.5 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#FF7A00]" />
                        <span>{SCHOOL_INFO.contacts.director}</span>
                      </a>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs text-[#FF7A00] font-semibold">
                    <span className="flex items-center gap-1.5">
                      <RotateCw className="w-3.5 h-3.5 animate-spin-slow" />
                      <span>Click / Tap to Read Message</span>
                    </span>
                    <span className="text-white/50 text-[11px] font-mono">FLIP ↻</span>
                  </div>
                </div>
              }
              back={
                <div className="w-full h-full p-6 flex flex-col justify-between bg-white/10 backdrop-blur-md text-white rounded-[20px] select-none border border-white/20 shadow-2xl">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-white/15 pb-2.5">
                      <div className="flex items-center gap-2">
                        <Quote className="w-5 h-5 text-[#FF7A00]" />
                        <h4 className="font-bold text-white text-base font-heading">Director&apos;s Message</h4>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF7A00] bg-orange-500/20 px-2 py-0.5 rounded border border-orange-500/30">
                        Vision
                      </span>
                    </div>

                    <blockquote className="text-xs text-white/90 leading-relaxed space-y-2 italic">
                      <p>
                        &ldquo;A child is a unique gift of God to humanity with a bundle of talents hidden inside. A teacher is a mentor, nurturer, healer and an inspirer who polishes those virtues.&rdquo;
                      </p>
                      <p>
                        &ldquo;Success should always be combined with strong moral and ethical values. Preparing students to think reflectively prepares them to build a &apos;dream-country&apos; for all.&rdquo;
                      </p>
                    </blockquote>

                    <div className="pt-2 border-t border-white/15 text-[11px] text-white/70">
                      <strong className="text-white block font-semibold">Gaharwar Educational &amp; Welfare Society</strong>
                      <span>Estd. 2016 · Ichol, Satna (M.P.)</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs">
                    <span className="text-white/60 font-mono text-[11px]">Mobile: {SCHOOL_INFO.contacts.director}</span>
                    <span className="text-white font-semibold flex items-center gap-1">
                      <RotateCw className="w-3.5 h-3.5" />
                      <span>Flip to Photo</span>
                    </span>
                  </div>
                </div>
              }
            />

            {/* 2. Principal Sir FlipCard */}
            <FlipCard
              width={380}
              height={480}
              radius={20}
              background="rgba(255, 255, 255, 0.08)"
              color="#FFFFFF"
              shadowColor="rgba(0, 0, 0, 0.45)"
              shadowOpacity={0.4}
              tiltMax={10}
              front={
                <div className="w-full h-full p-6 flex flex-col justify-between bg-white/10 backdrop-blur-md text-white rounded-[20px] select-none border border-white/20 shadow-2xl">
                  <div className="space-y-4">
                    <div className="relative aspect-4/3 w-full rounded-xl overflow-hidden bg-slate-900/40 shadow-sm border border-white/15">
                      <img 
                        src="/school_assets/principal.jpg" 
                        alt="Principal Sir" 
                        className="w-full h-full object-cover object-top"
                      />
                      <span className="absolute top-2.5 right-2.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FF7A00] text-white shadow-xs">
                        Principal Sir
                      </span>
                    </div>

                    <div>
                      <span className="text-[11px] font-bold text-[#FF7A00] uppercase tracking-wider block">
                        Academic Administration
                      </span>
                      <h3 className="font-bold text-white text-xl font-heading leading-tight mt-0.5">
                        Principal Sir
                      </h3>
                      <p className="text-xs text-white/70 mt-0.5">
                        Dreams Valley Public (E.M.) School
                      </p>
                    </div>

                    <div className="bg-black/30 backdrop-blur-md rounded-xl p-3 border border-white/15 flex items-center justify-between text-xs">
                      <span className="text-white/70 font-medium">Contact Number:</span>
                      <a 
                        href={`tel:${SCHOOL_INFO.contacts.principal}`} 
                        onClick={(e) => e.stopPropagation()} 
                        className="font-mono font-bold text-white hover:text-[#FF7A00] flex items-center gap-1.5 transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-[#FF7A00]" />
                        <span>{SCHOOL_INFO.contacts.principal}</span>
                      </a>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs text-[#FF7A00] font-semibold">
                    <span className="flex items-center gap-1.5">
                      <RotateCw className="w-3.5 h-3.5 animate-spin-slow" />
                      <span>Click / Tap to Read Message</span>
                    </span>
                    <span className="text-white/50 text-[11px] font-mono">FLIP ↻</span>
                  </div>
                </div>
              }
              back={
                <div className="w-full h-full p-6 flex flex-col justify-between bg-white/10 backdrop-blur-md text-white rounded-[20px] select-none border border-white/20 shadow-2xl">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-white/15 pb-2.5">
                      <div className="flex items-center gap-2">
                        <Quote className="w-5 h-5 text-[#FF7A00]" />
                        <h4 className="font-bold text-white text-base font-heading">Principal&apos;s Message</h4>
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF7A00] bg-orange-500/20 px-2 py-0.5 rounded border border-orange-500/30">
                        Academics
                      </span>
                    </div>

                    <blockquote className="text-xs text-white/90 leading-relaxed space-y-2 italic">
                      <p>
                        &ldquo;In present times, every student is a reservoir of a multitude of information. It shifts the responsibilities of the institution to ensure they get the right platform and quality education.&rdquo;
                      </p>
                      <p>
                        &ldquo;We believe in holistic development of the child through social, moral, and ethical values in life. Our campus is sufficiently equipped to fulfill every learner&apos;s need.&rdquo;
                      </p>
                    </blockquote>

                    <div className="pt-2 border-t border-white/15 text-[11px] text-white/70">
                      <strong className="text-white block font-semibold">Parent Meeting Hours</strong>
                      <span>10:00 AM – 12:00 PM &amp; 1:00 PM – 2:30 PM</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs">
                    <span className="text-white/60 font-mono text-[11px]">Direct Line: {SCHOOL_INFO.contacts.principal}</span>
                    <span className="text-white font-semibold flex items-center gap-1">
                      <RotateCw className="w-3.5 h-3.5" />
                      <span>Flip to Photo</span>
                    </span>
                  </div>
                </div>
              }
            />

          </div>
        </AnimatedContent>

        {/* Vice Principal & Transport Incharge Helpline Card */}
        <AnimatedContent distance={30} direction="vertical" duration={0.8} delay={0.2} threshold={0.1}>
          <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-orange-500/20 text-[#FF7A00] flex items-center justify-center shrink-0 border border-orange-500/30">
                <Bus className="w-5 h-5 text-[#FF7A00]" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#FF7A00] block">
                  Student Welfare &amp; GPS Transport Fleet
                </span>
                <h4 className="text-sm font-bold text-white font-heading">
                  Vice Principal &amp; Transport Incharge
                </h4>
                <p className="text-xs text-white/80">
                  Academics discipline, fleet safety &amp; bus routes across Ichol, Unchehra, Satna
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 shrink-0">
              <a
                href={`tel:${SCHOOL_INFO.contacts.vicePrincipalAndTransport}`}
                className="px-4 py-2 text-xs font-mono font-semibold inline-flex items-center gap-2 rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 text-white shadow-md transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF7A00]" />
                <span>{SCHOOL_INFO.contacts.vicePrincipalAndTransport}</span>
              </a>
            </div>
          </div>
        </AnimatedContent>
      </section>

      {/* 7. CAMPUS FACILITIES SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <AnimatedContent distance={35} direction="vertical" duration={0.8} threshold={0.1}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] block">
                Campus Infrastructure
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                World-Class Facilities for Holistic Growth
              </h2>
            </div>
            <button
              onClick={() => onNavigate('facilities')}
              className="text-xs font-semibold text-white/90 hover:text-[#F4511E] inline-flex items-center gap-1 group cursor-pointer"
            >
              <span>Explore All 12+ Facilities</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={40} direction="vertical" duration={0.85} delay={0.1} threshold={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACILITIES.slice(0, 4).map((fac) => (
              <div key={fac.id} className="soft-card-interactive overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="aspect-16/10 overflow-hidden bg-slate-900/40 relative">
                    <img 
                      src={fac.image} 
                      alt={fac.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-white text-[10px] font-bold border border-white/15 shadow-xs">
                      {fac.category}
                    </span>
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="font-bold text-white text-sm font-heading leading-snug">
                      {fac.title}
                    </h3>
                    <p className="text-xs text-white/80 leading-relaxed line-clamp-3">
                      {fac.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => onNavigate('facilities')}
                    className="text-xs font-semibold text-[#FF7A00] hover:text-[#ff9433] inline-flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Learn more</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </AnimatedContent>
      </section>

      {/* 8. STUDENT HOUSES SYSTEM (Soft UI Color Harmony) */}
      <section className="bg-white/[0.04] backdrop-blur-xs py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          
          <AnimatedContent distance={35} direction="vertical" duration={0.8} threshold={0.1}>
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] block">
                Leadership &amp; Sportsmanship
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                The Four Student Houses
              </h2>
              <p className="text-xs sm:text-sm text-white/80">
                Every student belongs to one of four historic houses, cultivating camaraderie, mutual respect, and competitive spirit.
              </p>
            </div>
          </AnimatedContent>

          <AnimatedContent distance={40} direction="vertical" duration={0.85} delay={0.1} threshold={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {HOUSES.map((house) => (
                <div 
                  key={house.name}
                  className="soft-card p-6 space-y-4 flex flex-col justify-between border-t-4"
                  style={{ borderTopColor: house.hex }}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-white/70">
                        {house.colorName} House
                      </span>
                      <span 
                        className="w-3.5 h-3.5 rounded-full shadow-xs"
                        style={{ backgroundColor: house.hex }}
                      />
                    </div>
                    <h3 className="text-lg font-bold text-white font-heading">
                      {house.name}
                    </h3>
                    <p className="text-xs text-white/70 italic">
                      Named after {house.namedAfter}
                    </p>
                    <p className="text-xs text-white/80 leading-relaxed">
                      {house.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/15 text-[11px] font-semibold text-white/90 italic">
                    &ldquo;{house.motto}&rdquo;
                  </div>
                </div>
              ))}
            </div>
          </AnimatedContent>

        </div>
      </section>

      {/* 9. ADMISSION PROCESS (4-STEP SWISS GRID) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        <AnimatedContent distance={35} direction="vertical" duration={0.8} threshold={0.1}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F4511E] block">
                Enrollment 2026–27
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                Four-Step Admission Process
              </h2>
            </div>
            <button
              onClick={onOpenAdmission}
              className="btn-admissions px-4 py-2 text-xs font-semibold cursor-pointer"
            >
              Start Online Registration
            </button>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={40} direction="vertical" duration={0.85} delay={0.1} threshold={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="soft-card p-6 space-y-3 relative">
              <span className="w-8 h-8 rounded-lg bg-[#172B73] text-white font-mono font-bold text-xs flex items-center justify-center border border-white/20 shadow-xs">
                01
              </span>
              <h3 className="font-bold text-white text-sm font-heading">Application Form</h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Register candidate name online or obtain the physical registration form at the school office desk.
              </p>
            </div>

            <div className="soft-card p-6 space-y-3 relative">
              <span className="w-8 h-8 rounded-lg bg-[#FF7A00] text-white font-mono font-bold text-xs flex items-center justify-center border border-white/20 shadow-xs">
                02
              </span>
              <h3 className="font-bold text-white text-sm font-heading">Documents &amp; Photo</h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Submit filled form with one stamp-size photograph, birth certificate, and previous marksheets before the last date.
              </p>
            </div>

            <div className="soft-card p-6 space-y-3 relative">
              <span className="w-8 h-8 rounded-lg bg-[#F4511E] text-white font-mono font-bold text-xs flex items-center justify-center border border-white/20 shadow-xs">
                03
              </span>
              <h3 className="font-bold text-white text-sm font-heading">Lottery &amp; Assessment</h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Nursery to Class I follow lottery system guidelines. Higher grades participate in an interactive diagnostic assessment.
              </p>
            </div>

            <div className="soft-card p-6 space-y-3 relative">
              <span className="w-8 h-8 rounded-lg bg-[#172B73] text-white font-mono font-bold text-xs flex items-center justify-center border border-white/20 shadow-xs">
                04
              </span>
              <h3 className="font-bold text-white text-sm font-heading">Formalities &amp; Bus Route</h3>
              <p className="text-xs text-white/80 leading-relaxed">
                Complete fee remittance at accounts desk, obtain uniforms and diary, and finalize GPS bus route allotment.
              </p>
            </div>

          </div>
        </AnimatedContent>
      </section>

      {/* 10. GENUINE TESTIMONIALS (Parents, Faculty, Alumni) */}
      <section className="bg-white/[0.04] backdrop-blur-xs py-16 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
          
          <AnimatedContent distance={35} direction="vertical" duration={0.8} threshold={0.1}>
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#FF7A00] block">
                Voices of Trust
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                What Parents &amp; Alumni Say
              </h2>
              <p className="text-xs sm:text-sm text-white/80">
                Genuine feedback from families whose children thrive every day at Dreams Valley.
              </p>
            </div>
          </AnimatedContent>

          <AnimatedContent distance={40} direction="vertical" duration={0.85} delay={0.1} threshold={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TESTIMONIALS.map((test) => (
                <div key={test.id} className="soft-card p-6 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-white/90 leading-relaxed italic">
                      &ldquo;{test.quote}&rdquo;
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/15 flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-full ${test.avatarBg} text-white font-bold text-xs flex items-center justify-center shrink-0 border border-white/20`}>
                      {test.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{test.author}</h4>
                      <p className="text-[11px] text-white/70">{test.childGrade}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedContent>

        </div>
      </section>

      {/* 11. NEWS, NOTICES & EVENTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        
        <AnimatedContent distance={35} direction="vertical" duration={0.8} threshold={0.1}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#F4511E] block">
                Latest Happenings
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white font-heading">
                School News &amp; Upcoming Events
              </h2>
            </div>
            <button
              onClick={() => onNavigate('activities')}
              className="text-xs font-semibold text-white/90 hover:text-[#F4511E] inline-flex items-center gap-1 cursor-pointer"
            >
              <span>View Activities Calendar</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </AnimatedContent>

        <AnimatedContent distance={40} direction="vertical" duration={0.85} delay={0.1} threshold={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {NEWS_EVENTS.map((item) => (
              <div key={item.id} className="soft-card p-5 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${
                      item.isUrgent 
                        ? 'bg-orange-500/25 text-[#FF7A00] border border-orange-500/35' 
                        : 'bg-blue-400/20 text-blue-300 border border-blue-400/30'
                    }`}>
                      {item.category}
                    </span>
                    <span className="text-[11px] font-medium text-white/70 font-mono">
                      {item.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-sm font-heading leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed">
                    {item.snippet}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/15">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="text-[11px] font-semibold text-white/90 hover:text-[#FF7A00] inline-flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>Inquire at Desk</span>
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </AnimatedContent>
      </section>

      {/* 12. BOTTOM ADMISSIONS CALL TO ACTION CARD */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <AnimatedContent distance={40} direction="vertical" duration={0.85} threshold={0.1}>
          <div className="bg-gradient-to-r from-[#172B73] via-[#101E53] to-[#172B73] rounded-2xl p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            
            <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none w-96 h-96">
              <img 
                src={SCHOOL_INFO.logoUrl} 
                alt="Background Crest" 
                className="w-full h-full object-contain"
              />
            </div>

            <div className="max-w-2xl space-y-4 relative z-10">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#F4511E] text-white shadow-xs">
                Admissions Open 2026–2027
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                Give Your Child the Foundation They Deserve
              </h2>
              <p className="text-sm text-white/80 leading-relaxed font-normal">
                Join the Dreams Valley family at Ichol, Satna. Transparent admissions, modern smart education, sports development, and verified bus fleet transportation from Nursery to Class XII.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={onOpenAdmission}
                  className="btn-admissions px-6 py-3 text-xs sm:text-sm font-semibold inline-flex items-center gap-2 cursor-pointer"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Fill Online Application</span>
                </button>
                <a
                  href={`tel:${SCHOOL_INFO.contacts.principal}`}
                  className="px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#F4511E]" />
                  <span>Call Principal: {SCHOOL_INFO.contacts.principal}</span>
                </a>
              </div>
            </div>

          </div>
        </AnimatedContent>
      </section>

    </div>
  );
};
