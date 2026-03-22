import React from 'react';
import { Calendar, Cpu, Code, PlayCircle, ListChecks } from 'lucide-react';

const GrowthRoadmap = ({ roadmap }) => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 animate-in fade-in duration-500">
    {/* Left: Schedule */}
    <div className="lg:col-span-1 space-y-6">
      <div className="bg-[#0f172a] rounded-[2rem] p-8 text-white shadow-xl shadow-slate-100">
        <h3 className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] mb-8 text-purple-400">
          <Calendar size={16} /> 7-Day Action Plan
        </h3>
        <div className="space-y-6">
          {['Deep Dive Focus Areas', 'Practice Coding Patterns', 'Refine STAR Responses', 'Final Retake Session'].map((task, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-1 h-8 bg-slate-700 rounded-full" />
              <div>
                <p className="text-[9px] font-bold text-slate-500 uppercase">Phase {i+1}</p>
                <p className="text-sm font-medium">{task}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Right: Resources */}
    <div className="lg:col-span-2 space-y-12">
      {roadmap.map((section, idx) => (
        <div key={idx} className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-slate-50 rounded-xl">
              {section.area.toLowerCase().includes('technical') ? <Code size={20}/> : <Cpu size={20}/>}
            </div>
            <div>
              <h3 className="font-bold text-slate-900">{section.area}</h3>
              <span className="text-[9px] font-black uppercase text-red-500 bg-red-50 px-2 py-0.5 rounded">
                {section.priority} Improvement
              </span>
            </div>
          </div>
          <p className="text-sm text-slate-500 border-l-2 border-slate-100 pl-4">{section.reason}</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {section.resources.map((res, i) => (
              <a href={res.url} key={i} className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:border-purple-200 transition-all shadow-sm">
                <div className="aspect-video relative overflow-hidden">
                  <img src={res.thumb} className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="thumbnail" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all flex items-center justify-center">
                    <PlayCircle className="text-white opacity-0 group-hover:opacity-100" size={32} />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-xs truncate">{res.title}</h4>
                  <p className="text-[9px] text-slate-400 uppercase mt-1">{res.channel} • {res.duration}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default GrowthRoadmap;