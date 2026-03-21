import React, { useState } from 'react';
import { 
  FileText, 
  Briefcase, 
  Settings, 
  Rocket, 
  Upload, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2,
  Target,
  Brain,
  Zap
} from 'lucide-react';

const InterviewSetup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    resume: null,
    jobDescription: '',
    role: 'Software Engineer',
    difficulty: 'Mid-Level',
    focusAreas: ['Technical', 'Behavioral'],
    aiInstructions: ''
  });

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const toggleFocusArea = (area) => {
    setFormData(prev => ({
      ...prev,
      focusAreas: prev.focusAreas.includes(area)
        ? prev.focusAreas.filter(a => a !== area)
        : [...prev.focusAreas, area]
    }));
  };

  const steps = [
    { id: 1, icon: <FileText size={18} />, label: "Background" },
    { id: 2, icon: <Briefcase size={18} />, label: "Job Info" },
    { id: 3, icon: <Settings size={18} />, label: "Setup" },
    { id: 4, icon: <Rocket size={18} />, label: "Launch" },
  ];

  // --- STEP RENDERERS ---

  const renderStep1 = () => (
    <div className="flex-1 flex flex-col items-center justify-center space-y-6 max-w-2xl mx-auto w-full text-center">
      <h2 className="text-3xl font-bold text-slate-900">Your Background</h2>
      <p className="text-slate-500">Upload your resume for a personalized AI experience.</p>
      <div className="w-full border-2 border-dashed border-slate-100 rounded-[2.5rem] p-12 bg-slate-50/50 hover:bg-white hover:border-purple-300 transition-all cursor-pointer group mt-4">
        <div className="bg-white w-12 h-12 rounded-xl shadow-sm flex items-center justify-center mx-auto mb-4 text-purple-600 group-hover:scale-110 transition-transform">
          <Upload size={24} />
        </div>
        <p className="font-bold text-slate-700">Drop your resume here</p>
        <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-semibold">PDF or DOCX (Optional)</p>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="flex-1 flex flex-col items-center justify-center space-y-6 max-w-3xl mx-auto w-full">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900">Job Details</h2>
        <p className="text-slate-500 mt-1">Paste the job description so the AI can extract key requirements.</p>
      </div>
      <textarea 
        className="w-full h-64 bg-slate-50 border border-slate-200 rounded-[2rem] p-8 text-sm focus:bg-white focus:ring-4 ring-purple-50 focus:border-purple-400 outline-none resize-none transition-all"
        placeholder="Paste requirements here..."
        value={formData.jobDescription}
        onChange={(e) => setFormData({...formData, jobDescription: e.target.value})}
      />
    </div>
  );

  const renderStep3 = () => (
    <div className="space-y-8 max-w-3xl mx-auto w-full py-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-900">Interview Config</h2>
        <p className="text-slate-500 mt-1">Refine the setup for this specific session.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-black text-slate-400 uppercase tracking-wider ml-1">Target Role</label>
          <input 
            type="text" 
            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:bg-white focus:border-purple-400 outline-none transition-all"
            value={formData.role}
            onChange={(e) => setFormData({...formData, role: e.target.value})}
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-black text-slate-400 uppercase tracking-wider ml-1">Difficulty</label>
          <select 
            className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:bg-white focus:border-purple-400 outline-none cursor-pointer"
            value={formData.difficulty}
            onChange={(e) => setFormData({...formData, difficulty: e.target.value})}
          >
            <option>Junior</option>
            <option>Mid-Level</option>
            <option>Senior</option>
            <option>Staff / Lead</option>
          </select>
        </div>
      </div>
      <div className="space-y-3">
        <label className="text-xs font-black text-slate-400 uppercase tracking-wider ml-1">Key Focus Areas</label>
        <div className="flex flex-wrap gap-2">
          {['Technical', 'System Design', 'Behavioral', 'Communication', 'Problem Solving'].map((area) => (
            <button
              key={area}
              onClick={() => toggleFocusArea(area)}
              className={`px-5 py-2 rounded-full text-xs font-bold border transition-all ${
                formData.focusAreas.includes(area) 
                ? 'bg-slate-900 text-white border-slate-900 shadow-md' 
                : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'
              }`}
            >
              {area}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-black text-slate-400 uppercase tracking-wider ml-1">Custom AI Instructions</label>
        <textarea 
          className="w-full h-24 bg-slate-50 border border-slate-200 rounded-xl p-4 text-sm focus:bg-white focus:border-purple-400 outline-none resize-none transition-all italic"
          placeholder="e.g. 'Focus on React internals'..."
          value={formData.aiInstructions}
          onChange={(e) => setFormData({...formData, aiInstructions: e.target.value})}
        />
      </div>
    </div>
  );

  const renderStep4 = () => (
    <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 py-6">
      <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-3xl flex items-center justify-center mx-auto mb-4 rotate-6 shadow-xl shadow-emerald-100">
        <CheckCircle2 size={40} />
      </div>
      <h2 className="text-3xl font-bold text-slate-900">Ready to Launch!</h2>
      <div className="space-y-1 text-slate-500">
        <p className="flex items-center justify-center gap-2"><Target size={16} /> <span className="font-bold text-slate-800">{formData.role}</span></p>
        <p className="flex items-center justify-center gap-2 text-sm"><Brain size={16} /> Difficulty: <span className="font-bold text-slate-800">{formData.difficulty}</span></p>
      </div>
      <div className="flex flex-col gap-3 max-w-xs mx-auto pt-4 w-full">
        <button className="bg-[#0f172a] text-white py-4 rounded-2xl font-bold shadow-xl hover:bg-purple-600 transition-all active:scale-95 uppercase tracking-widest text-[10px]">
          Start AI Session
        </button>
        <button className="text-slate-400 text-[10px] font-bold hover:text-slate-600 uppercase tracking-widest py-2">
          Save for Later
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full w-full max-w-5xl mx-auto overflow-hidden">
      
      {/* 1. Stepper UI - Compact and Pinned to Top */}
      <div className="flex items-center justify-center w-full py-4 shrink-0">
        <div className="flex items-center w-full max-w-2xl px-6">
          {steps.map((s, index) => (
            <React.Fragment key={s.id}>
              <div className="flex flex-col items-center relative">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 z-10 ${
                  currentStep >= s.id ? 'bg-purple-600 text-white shadow-lg' : 'bg-white border-2 border-slate-100 text-slate-300'
                }`}>
                  {s.icon}
                </div>
                <span className={`absolute -bottom-6 text-[9px] font-bold uppercase tracking-wider whitespace-nowrap ${
                  currentStep >= s.id ? 'text-purple-600' : 'text-slate-300'
                }`}>{s.label}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-[2px] mx-2 bg-slate-100 relative">
                  <div className="absolute h-full bg-purple-600 transition-all duration-500" 
                       style={{ width: currentStep > s.id ? '100%' : '0%' }} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 2. Main Content Card - Fills available height */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col flex-1 overflow-hidden mt-6 mb-2">
        
        {/* Scrollable Body area */}
        <div className="flex-1 overflow-y-auto p-10 lg:p-12 flex flex-col">
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
        </div>

        {/* 3. Footer Navigation - Fixed at bottom of card */}
        <div className="bg-slate-50/50 px-10 py-6 border-t border-slate-100 flex justify-between items-center shrink-0">
          <button 
            onClick={prevStep}
            className={`flex items-center gap-2 font-black text-[10px] uppercase tracking-widest transition-all ${
              currentStep === 1 ? 'invisible' : 'text-slate-400 hover:text-slate-900'
            }`}
          >
            <ChevronLeft size={16} /> Previous
          </button>
          
          <button 
            onClick={nextStep}
            className="bg-[#0f172a] text-white px-10 py-4 rounded-2xl font-bold text-[10px] uppercase tracking-[0.2em] flex items-center gap-3 hover:bg-purple-600 transition-all active:scale-95 shadow-xl"
          >
            {currentStep === 4 ? 'Complete Setup' : 'Continue'} 
            {currentStep < 4 && <ChevronRight size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default InterviewSetup;