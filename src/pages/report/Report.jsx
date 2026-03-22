import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import useNavigate
import { 
  Award, 
  Download, 
  Share2, 
  Target, 
  Brain, 
  ChevronLeft // 2. Import ChevronLeft for the back icon
} from 'lucide-react';
import ReportSummary from './components/ReportSummary';
import Transcript from './components/Transcript';
import GrowthRoadmap from './components/GrowthRoadmap';

const InterviewReport = () => {
  const [activeTab, setActiveTab] = useState('summary');
  const navigate = useNavigate(); // 3. Initialize navigate

  const reportData = {
    overallScore: 84,
    recommendation: "Strong Hire",
    role: "Senior Software Engineer",
    date: "March 22, 2026",
    // ... rest of your data object
    pillars: [
      { name: 'Technical Depth', score: 90, color: 'bg-emerald-500' },
      { name: 'System Design', score: 75, color: 'bg-blue-500' },
      { name: 'Communication', score: 88, color: 'bg-purple-500' },
      { name: 'Problem Solving', score: 82, color: 'bg-amber-500' },
    ],
    feedback: {
    strengths: [
      "Excellent mastery of React concurrent features and hooks.",
      "Clear articulation of system scalability trade-offs.",
      "Strong debugging mindset when faced with edge cases."
    ],
    improvements: [
      "Improve depth when discussing NoSQL vs SQL consistency models.",
      "Could be more concise in behavioral answers (use STAR method).",
      "Explain the 'why' behind choosing specific design patterns more clearly."
    ]
  },
    roadmap: [
      {
        area: "Distributed Caching",
        priority: "High",
        reason: "You struggled to explain cache invalidation strategies during the System Design section.",
        resources: [
          { title: "Cache Systems Explained", channel: "ByteByteGo", duration: "5m", url: "https://www.youtube.com/watch?v=dGAgxozNWFE", thumb: "https://img.youtube.com/vi/dGAgxozNWFE/mqdefault.jpg" },
          { title: "Distributed Caching Strategies", channel: "ByteMonk", duration: "7m", url: "https://www.youtube.com/watch?v=Gdfj-544AkA", thumb: "https://img.youtube.com/vi/Gdfj-544AkA/mqdefault.jpg" }
        ],
        exercises: ["Draw a Write-Back vs Write-Through diagram", "Compare Redis vs Memcached"]
      }
    ],
    transcript: [
      { role: 'ai', text: "How would you handle global state in a large-scale React application?" },
      { role: 'user', text: "I'd use a combination of Context for small things and Redux Toolkit or Zustand for complex global state to avoid prop drilling." },
    ]
  };

  return (
    <div className="flex flex-col h-full w-full max-w-6xl mx-auto overflow-hidden">
      
      {/* 1. TOP NAVIGATION & HEADER */}
      <div className="flex flex-col gap-4 mb-6 shrink-0 px-2">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate('/reports')} // 4. Add the back navigation logic
          className="flex items-center gap-2 text-slate-400 hover:text-purple-600 transition-colors w-fit group"
        >
          <div className="p-1 bg-white border border-slate-100 rounded-lg group-hover:border-purple-200 shadow-sm transition-all">
            <ChevronLeft size={16} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.15em]">Back to Library</span>
        </button>

        <div className="flex items-end justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-purple-600 font-bold text-[10px] uppercase tracking-[0.2em]">
              <Award size={14} /> Performance Analysis
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">{reportData.role}</h1>
            <p className="text-slate-400 text-xs font-medium">{reportData.date} • Session #9921</p>
          </div>
          
          <div className="flex gap-3">
            <button className="p-3 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-purple-600 transition-all shadow-sm">
              <Download size={18} />
            </button>
            <button className="bg-[#0f172a] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-purple-600 transition-all shadow-lg active:scale-95">
              Retake Mock
            </button>
          </div>
        </div>
      </div>

      {/* 2. Main Card Container */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col flex-1 overflow-hidden mb-4">
        
        {/* Navigation Tabs */}
        <div className="flex border-b border-slate-100 px-10 pt-4 gap-10 shrink-0">
          {['summary', 'transcript', 'roadmap'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-[10px] font-black uppercase tracking-[0.15em] relative transition-all ${
                activeTab === tab ? 'text-purple-600' : 'text-slate-300 hover:text-slate-500'
              }`}
            >
              {tab === 'roadmap' ? 'Growth Roadmap' : tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-600 rounded-t-full" />
              )}
            </button>
          ))}
        </div>

        {/* Dynamic Component Area */}
        <div className="flex-1 overflow-y-auto p-10 bg-white">
          {activeTab === 'summary' && <ReportSummary data={reportData} />}
          {activeTab === 'transcript' && <Transcript transcript={reportData.transcript} />}
          {activeTab === 'roadmap' && <GrowthRoadmap roadmap={reportData.roadmap} />}
        </div>
      </div>
    </div>
  );
};

export default InterviewReport;