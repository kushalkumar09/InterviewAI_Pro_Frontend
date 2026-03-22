import React from 'react';
import { 
  TrendingUp, 
  CheckCircle2, 
  AlertCircle, 
  Lightbulb, 
  Target 
} from 'lucide-react';

const ReportSummary = ({ data }) => {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* 1. Score Ring */}
        <div className="bg-slate-50/50 rounded-[2.5rem] p-8 flex flex-col items-center justify-center border border-slate-100 shadow-inner">
          <div className="relative w-36 h-36 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="72" cy="72" r="64" stroke="currentColor" strokeWidth="10" fill="transparent" className="text-slate-100" />
              <circle 
                cx="72" 
                cy="72" 
                r="64" 
                stroke="currentColor" 
                strokeWidth="10" 
                fill="transparent" 
                strokeDasharray={402} 
                strokeDashoffset={402 - (402 * data.overallScore) / 100}
                className="text-purple-600 transition-all duration-1000 ease-out" 
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="text-4xl font-black text-slate-900">{data.overallScore}%</span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Score</span>
            </div>
          </div>
          <p className="mt-6 font-black text-slate-400 uppercase text-[9px] tracking-[0.2em] text-center leading-tight">Overall Readiness</p>
        </div>

        {/* 2. Recommendation & Pillar Progress */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-[2rem] flex items-center gap-5 shadow-sm">
            <div className="bg-emerald-500 text-white p-3.5 rounded-2xl shadow-lg shadow-emerald-200/50">
              <TrendingUp size={24} />
            </div>
            <div>
              <h3 className="font-black text-emerald-900 text-lg tracking-tight">Verdict: {data.recommendation}</h3>
              <p className="text-emerald-700 text-xs font-medium leading-relaxed">
                You demonstrated strong {data.pillars[0]?.name.toLowerCase()} but could refine your {data.pillars[1]?.name.toLowerCase()} approach.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {data.pillars.map(p => (
              <div key={p.name} className="p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:border-purple-100 transition-colors group">
                <div className="flex justify-between mb-3">
                  <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider group-hover:text-slate-600 transition-colors">{p.name}</span>
                  <span className="text-xs font-black text-slate-900">{p.score}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className={`h-full ${p.color} transition-all duration-1000`} style={{ width: `${p.score}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. NEW SECTION: Actionable Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Strengths Card */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 px-1">
            <div className="p-1.5 bg-emerald-100 text-emerald-600 rounded-lg">
              <CheckCircle2 size={16} />
            </div>
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.15em]">Key Strengths</h3>
          </div>
          <div className="space-y-3">
            {data.feedback?.strengths?.map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-white border border-slate-100 rounded-[1.5rem] shadow-sm relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-400 group-hover:w-1.5 transition-all" />
                <p className="text-sm text-slate-600 leading-relaxed font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Improvement Card */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 px-1">
            <div className="p-1.5 bg-rose-100 text-rose-600 rounded-lg">
              <AlertCircle size={16} />
            </div>
            <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.15em]">Growth Areas</h3>
          </div>
          <div className="space-y-3">
            {data.feedback?.improvements?.map((item, i) => (
              <div key={i} className="flex gap-4 p-5 bg-white border border-slate-100 rounded-[1.5rem] shadow-sm relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-rose-400 group-hover:w-1.5 transition-all" />
                <p className="text-sm text-slate-600 leading-relaxed font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Mentorship Advice / Tip of the Session */}
      <div className="bg-[#0f172a] rounded-[2.5rem] p-8 text-white relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
          <div className="bg-purple-500/20 p-4 rounded-2xl border border-purple-500/30">
            <Lightbulb className="text-purple-400" size={32} />
          </div>
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-purple-400">Quick Improvement Tip</h4>
            <p className="text-slate-300 text-sm leading-relaxed max-w-2xl italic font-medium">
              "Your technical answers were strong, but remember to use the **STAR method** for behavioral questions. Quantifying your results (e.g., 'reduced latency by 20%') makes a significantly stronger impact on interviewers."
            </p>
          </div>
          <div className="flex-1 flex justify-end">
             <button className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all">
                Learn More
             </button>
          </div>
        </div>
        {/* Decorative Background Element */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl" />
      </div>
    </div>
  );
};

export default ReportSummary;