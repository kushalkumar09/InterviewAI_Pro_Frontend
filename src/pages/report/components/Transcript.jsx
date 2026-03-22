import React from 'react';

const Transcript = ({ transcript }) => (
  <div className="max-w-4xl mx-auto space-y-8 animate-in slide-in-from-bottom-4">
    {transcript.map((msg, i) => (
      <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
        <span className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-2 px-2">
          {msg.role === 'ai' ? 'AI Interviewer' : 'Candidate (You)'}
        </span>
        <div className={`p-6 rounded-[2rem] text-sm leading-relaxed max-w-[85%] border shadow-sm ${
          msg.role === 'user' 
          ? 'bg-[#0f172a] text-white border-slate-800 rounded-tr-none' 
          : 'bg-white text-slate-700 border-slate-100 rounded-tl-none'
        }`}>
          {msg.text}
        </div>
      </div>
    ))}
  </div>
);

export default Transcript;