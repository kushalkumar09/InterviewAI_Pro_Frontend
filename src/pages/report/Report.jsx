import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Award,
  Download,
  ChevronLeft
} from 'lucide-react';
import { api } from '../../config/api/api';
import ReportSummary from './components/ReportSummary';
import Transcript from './components/Transcript';
import GrowthRoadmap from './components/GrowthRoadmap';

const fallbackReport = {
  overallScore: 0,
  recommendation: 'Pending',
  role: 'Interview Report',
  createdAt: null,
  pillars: [],
  feedback: {
    strengths: [],
    improvements: [],
  },
  roadmap: [],
  transcript: [],
};

const formatDate = (date) => {
  if (!date) return 'Not available';
  return new Intl.DateTimeFormat('en', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
};

const InterviewReport = () => {
  const [activeTab, setActiveTab] = useState('summary');
  const [reportData, setReportData] = useState(fallbackReport);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    let isMounted = true;

    api.get(`/reports/${id}`)
      .then(({ data }) => {
        if (!isMounted) return;
        setReportData({ ...fallbackReport, ...data.report });
      })
      .catch((err) => {
        if (!isMounted) return;
        setError(err.response?.data?.message || 'Unable to load report');
      })
      .finally(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [id]);

  return (
    <div className="flex flex-col h-full w-full max-w-6xl mx-auto overflow-hidden">
      <div className="flex flex-col gap-4 mb-6 shrink-0 px-2">
        <button
          onClick={() => navigate('/reports')}
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
            <p className="text-slate-400 text-xs font-medium">
              {isLoading ? 'Loading report...' : `${formatDate(reportData.createdAt)} - Session #${String(reportData._id || id).slice(-4)}`}
            </p>
          </div>

          <div className="flex gap-3">
            <button className="p-3 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-purple-600 transition-all shadow-sm">
              <Download size={18} />
            </button>
            <button onClick={() => navigate('/create-interview')} className="bg-[#0f172a] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-purple-600 transition-all shadow-lg active:scale-95">
              Retake Mock
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col flex-1 overflow-hidden mb-4">
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

        <div className="flex-1 overflow-y-auto p-10 bg-white">
          {error && (
            <div className="rounded-2xl border border-rose-100 bg-rose-50 p-5 text-sm font-bold text-rose-600">
              {error}
            </div>
          )}

          {!error && isLoading && (
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5 text-sm font-bold text-slate-500">
              Loading report...
            </div>
          )}

          {!error && !isLoading && activeTab === 'summary' && <ReportSummary data={reportData} />}
          {!error && !isLoading && activeTab === 'transcript' && <Transcript transcript={reportData.transcript} />}
          {!error && !isLoading && activeTab === 'roadmap' && <GrowthRoadmap roadmap={reportData.roadmap} />}
        </div>
      </div>
    </div>
  );
};

export default InterviewReport;
