import React from 'react';
import { Briefcase, User, Clock, Target, CheckCircle2, X } from 'lucide-react';

export const SessionOverviewModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const sessionData = {
    role: "Senior Frontend Developer",
    company: "InterviewAI Pro",
    interviewer: "AI Assistant (Advanced Model)",
    duration: "45 Minutes",
    complexity: "High",
    topics: ["React Architecture", "State Management", "System Design", "Behavioral Analysis"]
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-[40px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="px-10 py-12">
          
          <div className="flex items-center gap-4 mb-8">
            <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-purple-200">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-800 leading-none mb-1">Session Overview</h2>
              <p className="text-[13px] font-bold text-slate-400 uppercase tracking-widest">Pre-Interview Preparation</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6 mb-10">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Job Role</span>
              <div className="flex items-center gap-2 text-slate-700 font-bold">
                <Target className="w-4 h-4 text-purple-500" />
                <span>{sessionData.role}</span>
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Interviewer</span>
              <div className="flex items-center gap-2 text-slate-700 font-bold">
                <User className="w-4 h-4 text-purple-500" />
                <span>{sessionData.interviewer}</span>
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Duration</span>
              <div className="flex items-center gap-2 text-slate-700 font-bold">
                <Clock className="w-4 h-4 text-purple-500" />
                <span>{sessionData.duration}</span>
              </div>
            </div>
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Complexity</span>
              <div className="flex items-center gap-2 text-slate-700 font-bold">
                <div className="flex gap-0.5">
                  <div className="w-3 h-1.5 bg-purple-600 rounded-full" />
                  <div className="w-3 h-1.5 bg-purple-600 rounded-full" />
                  <div className="w-3 h-1.5 bg-purple-600 rounded-full" />
                  <div className="w-3 h-1.5 bg-slate-200 rounded-full" />
                </div>
                <span className="text-[12px]">{sessionData.complexity}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-6 mb-10">
            <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-4">Focus Topics</h3>
            <div className="flex flex-wrap gap-2">
              {sessionData.topics.map((topic, i) => (
                <div key={i} className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 text-[11px] font-bold text-slate-600 shadow-sm">
                  <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                  {topic}
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={onClose}
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-5 rounded-[24px] shadow-xl shadow-slate-200 active:scale-95 transition-all text-sm uppercase tracking-widest"
          >
            Acknowledge & Continue
          </button>
        </div>

        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-2xl transition-all"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
