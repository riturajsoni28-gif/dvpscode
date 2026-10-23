import React, { useState } from 'react';
import { X, CheckCircle2, Printer, AlertCircle, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { SCHOOL_INFO, SENIOR_STREAMS } from '../data/schoolData';
import AnimatedContent from './reactbits/AnimatedContent';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [appId, setAppId] = useState('');
  const [formData, setFormData] = useState({
    studentName: '',
    gender: 'Male',
    dob: '',
    grade: 'Class I',
    stream: 'Maths',
    parentName: '',
    phone: '',
    email: '',
    village: '',
    needBus: 'Yes',
    prevSchool: '',
    notes: ''
  });
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.studentName.trim() || !formData.parentName.trim() || !formData.phone.trim()) {
      setError('Please provide student name, parent/guardian name, and contact phone number.');
      return;
    }

    if (!/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    setError('');
    const generatedId = `DVPS-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setAppId(generatedId);
    setSubmitted(true);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      studentName: '',
      gender: 'Male',
      dob: '',
      grade: 'Class I',
      stream: 'Maths',
      parentName: '',
      phone: '',
      email: '',
      village: '',
      needBus: 'Yes',
      prevSchool: '',
      notes: ''
    });
    onClose();
  };

  const isSeniorClass = formData.grade === 'Class XI (11th)' || formData.grade === 'Class XII (12th)' || formData.grade === 'Class XI' || formData.grade === 'Class XII' || formData.grade === 'Class 11th' || formData.grade === 'Class 12th';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative bg-[#0d173b]/95 backdrop-blur-2xl border border-white/20 rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200 text-white">
        
        {/* Modal Header */}
        <div className="bg-white/5 text-white px-6 py-4 flex items-center justify-between border-b border-white/15">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden bg-white p-0.5 shrink-0 border border-white/30 shadow-md">
              <img 
                src={SCHOOL_INFO.logoUrl} 
                alt="School Crest" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h3 className="font-bold text-base leading-tight font-heading text-white">
                Dreams Valley Public School
              </h3>
              <p className="text-xs text-[#FF7A00] font-medium">
                Online Admission Registration (Nursery to 12th · Session 2026–2027)
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <AnimatedContent key={submitted ? 'success' : 'form'} distance={15} direction="vertical" duration={0.4} trigger="mount">
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-4 space-y-4">
              <div className="w-16 h-16 bg-[#FF7A00]/20 text-[#FF7A00] rounded-full flex items-center justify-center mx-auto border border-[#FF7A00]/40 shadow-lg shadow-orange-500/10">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-bold text-white font-heading">Application Registered Successfully!</h4>
              <p className="text-sm text-white/80 max-w-md mx-auto">
                Admission inquiry recorded for <strong className="text-[#FF7A00]">{formData.studentName}</strong> into <strong className="text-white">{formData.grade}</strong> {isSeniorClass && `(${formData.stream} Stream)`}.
              </p>

              <div className="bg-white/5 border border-white/15 rounded-xl p-4 max-w-md mx-auto text-left text-xs space-y-2.5">
                <div className="flex justify-between items-center border-b border-white/10 pb-2">
                  <span className="font-semibold text-white/70">Application Reference ID:</span>
                  <span className="font-bold text-[#FF7A00] font-mono text-sm bg-white/10 px-2.5 py-0.5 rounded border border-white/20">{appId}</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span className="text-white/70">Parent / Guardian:</span>
                  <span className="font-semibold text-white">{formData.parentName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Contact Mobile:</span>
                  <span className="font-mono font-medium text-white">{formData.phone}</span>
                </div>
                {isSeniorClass && (
                  <div className="flex justify-between">
                    <span className="text-white/70">Selected Stream:</span>
                    <span className="font-bold text-[#FF7A00]">{formData.stream} Stream</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-white/70">GPS Bus Transit:</span>
                  <span className="font-medium text-white">{formData.needBus}</span>
                </div>
              </div>

              {/* Instructions */}
              <div className="bg-[#FF7A00]/10 border border-[#FF7A00]/30 rounded-xl p-4 text-xs text-white/90 text-left space-y-2">
                <p className="font-bold flex items-center gap-1.5 text-[#FF7A00]">
                  <AlertCircle className="w-4 h-4 text-[#FF7A00] shrink-0" />
                  Official Admission Guidelines (School Desk):
                </p>
                <ul className="list-disc list-inside space-y-1 text-white/80">
                  <li>Please visit the campus desk with <strong className="text-white">one stamp-size photograph</strong> of the student and birth certificate/marksheet copy.</li>
                  <li>For classes <strong className="text-white">Nursery to Class I</strong>, admissions follow the lottery system guidelines.</li>
                  <li>Principal helpline: <strong className="font-mono text-[#FF7A00]">{SCHOOL_INFO.contacts.principal}</strong> | Vice Principal &amp; Transport: <strong className="font-mono text-[#FF7A00]">{SCHOOL_INFO.contacts.vicePrincipalAndTransport}</strong>.</li>
                  <li>Email: <strong className="text-white">{SCHOOL_INFO.contacts.email}</strong>.</li>
                </ul>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={handlePrint}
                  className="px-4 py-2 text-xs font-semibold text-white bg-white/10 border border-white/20 hover:bg-white/20 rounded-lg transition-colors inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Application</span>
                </button>
                <button
                  onClick={handleReset}
                  className="btn-admissions px-6 py-2 text-xs font-semibold cursor-pointer"
                >
                  Done / Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-500/20 border border-red-500/40 text-red-200 px-3.5 py-2.5 rounded-lg text-xs font-medium flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                  <span>{error}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white/90 mb-1">
                    Student Full Name <span className="text-[#FF7A00]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Candidate full name"
                    value={formData.studentName}
                    onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-white/20 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] bg-white/10 text-white placeholder:text-white/40 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/90 mb-1">
                    Class Applying For <span className="text-[#FF7A00]">*</span>
                  </label>
                  <select
                    value={formData.grade}
                    onChange={(e) => setFormData({ ...formData, grade: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-white/20 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] bg-white/10 text-white transition-all [&>option]:bg-[#0d173b] [&>option]:text-white"
                  >
                    <option value="Nursery">Nursery (Early Childhood)</option>
                    <option value="LKG">LKG (Lower Kindergarten)</option>
                    <option value="UKG">UKG (Upper Kindergarten)</option>
                    <option value="Class 1st">Class 1st</option>
                    <option value="Class 2nd">Class 2nd</option>
                    <option value="Class 3rd">Class 3rd</option>
                    <option value="Class 4th">Class 4th</option>
                    <option value="Class 5th">Class 5th</option>
                    <option value="Class 6th">Class 6th</option>
                    <option value="Class 7th">Class 7th</option>
                    <option value="Class 8th">Class 8th</option>
                    <option value="Class 9th">Class 9th (Secondary)</option>
                    <option value="Class 10th">Class 10th (Secondary Board)</option>
                    <option value="Class 11th">Class 11th (Senior Secondary Streams)</option>
                    <option value="Class 12th">Class 12th (Senior Secondary Board)</option>
                  </select>
                </div>
              </div>

              {/* Stream Selection shown for Class 11th & 12th */}
              {(formData.grade === 'Class 11th' || formData.grade === 'Class 12th' || formData.grade === 'Class XI' || formData.grade === 'Class XII') && (
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/15 space-y-1.5 animate-in fade-in duration-150">
                  <label className="block text-xs font-bold text-[#FF7A00]">
                    Select Stream for Class 11th / 12th <span className="text-[#FF7A00]">*</span>
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      { id: 'Maths', label: 'Maths (PCM)', desc: 'Engineering & Sciences' },
                      { id: 'Biology', label: 'Biology (PCB)', desc: 'Medical & Life Sci' },
                      { id: 'Commerce', label: 'Commerce', desc: 'Accounts & Business' },
                      { id: 'Arts', label: 'Arts', desc: 'Civil Services & Humanities' }
                    ].map((st) => (
                      <button
                        type="button"
                        key={st.id}
                        onClick={() => setFormData({ ...formData, stream: st.id })}
                        className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer ${
                          formData.stream === st.id
                            ? 'bg-[#FF7A00] text-white border-[#FF7A00] shadow-md shadow-orange-500/20'
                            : 'bg-white/5 text-white/80 border-white/15 hover:bg-white/10'
                        }`}
                      >
                        <span className="block font-bold text-xs">{st.label}</span>
                        <span className={`block text-[10px] mt-0.5 ${formData.stream === st.id ? 'text-white/90' : 'text-white/50'}`}>
                          {st.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white/90 mb-1">
                    Gender
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-white/20 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] bg-white/10 text-white transition-all [&>option]:bg-[#0d173b] [&>option]:text-white"
                  >
                    <option value="Male">Boy (Male)</option>
                    <option value="Female">Girl (Female)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/90 mb-1">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    value={formData.dob}
                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-white/20 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] bg-white/10 text-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white/90 mb-1">
                    Parent / Guardian Name <span className="text-[#FF7A00]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Father / Mother / Guardian"
                    value={formData.parentName}
                    onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-white/20 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] bg-white/10 text-white placeholder:text-white/40 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/90 mb-1">
                    Contact Mobile Number <span className="text-[#FF7A00]">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-white/20 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] bg-white/10 text-white placeholder:text-white/40 transition-all font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-white/90 mb-1">
                    Village / Town / Address
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ichol / Unchehra / Satna"
                    value={formData.village}
                    onChange={(e) => setFormData({ ...formData, village: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-white/20 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] bg-white/10 text-white placeholder:text-white/40 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/90 mb-1">
                    Avail School Bus Facility?
                  </label>
                  <select
                    value={formData.needBus}
                    onChange={(e) => setFormData({ ...formData, needBus: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm border border-white/20 rounded-lg focus:outline-hidden focus:ring-2 focus:ring-[#FF7A00] focus:border-[#FF7A00] bg-white/10 text-white transition-all [&>option]:bg-[#0d173b] [&>option]:text-white"
                  >
                    <option value="Yes">Yes, GPS School Bus Needed</option>
                    <option value="No">No, Self / Escort Transport</option>
                  </select>
                </div>
              </div>

              <div className="pt-3 border-t border-white/15 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 text-xs font-semibold text-white/70 hover:text-white transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-admissions px-6 py-2.5 text-xs font-semibold cursor-pointer"
                >
                  Submit Registration
                </button>
              </div>
            </form>
          )}
        </div>
        </AnimatedContent>

      </div>
    </div>
  );
};
