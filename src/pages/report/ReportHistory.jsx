import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  BarChart3, Calendar, ChevronRight, 
  Search, Filter, ArrowUpRight, ArrowDownRight 
} from 'lucide-react';

const ReportsList = () => {
  const navigate = useNavigate();

  // Mock History Data
  const interviewHistory = [
    { id: '9921', role: 'Senior Software Engineer', date: 'Mar 22, 2026', score: 84, trend: 'up', type: 'Full Mock' },
    { id: '9915', role: 'Full Stack Developer', date: 'Mar 18, 2026', score: 72, trend: 'up', type: 'Technical Only' },
    { id: '9890', role: 'Frontend Engineer', date: 'Mar 10, 2026', score: 78, trend: 'down', type: 'Full Mock' },
    { id: '9842', role: 'React Developer', date: 'Feb 28, 2026', score: 65, trend: 'up', type: 'Behavioral Only' },
  ];

  return (
    <>
      <div className="flex flex-col h-full w-full max-w-6xl mx-auto overflow-hidden">
        
        {/* Header & Stats Header */}
        <div className="flex items-end justify-between mb-8 shrink-0 px-2">
          <div className="space-y-1">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Interview Library</h1>
            <p className="text-slate-400 text-sm font-medium">Track your performance across {interviewHistory.length} sessions.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input 
                type="text" 
                placeholder="Search roles..." 
                className="bg-white border border-slate-100 rounded-xl py-2.5 pl-10 pr-4 text-xs outline-none focus:ring-2 ring-purple-100 transition-all w-64"
              />
            </div>
            <button className="p-2.5 bg-white border border-slate-100 rounded-xl text-slate-400 hover:text-slate-600 transition-all shadow-sm">
              <Filter size={18} />
            </button>
          </div>
        </div>

        {/* The List Container */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col flex-1 overflow-hidden mb-4">
          <div className="flex-1 overflow-y-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-50">
                  <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400">Position / Role</th>
                  <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-center">Date</th>
                  <th className="px-6 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-center">Score</th>
                  <th className="px-10 py-6 text-[10px] font-black uppercase tracking-widest text-slate-400 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {interviewHistory.map((item) => (
                  <tr key={item.id} className="group hover:bg-slate-50/50 transition-colors">
                    <td className="px-10 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-purple-50 text-purple-600 rounded-xl flex items-center justify-center font-bold text-xs">
                          {item.role.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">{item.role}</p>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter">{item.type}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-lg text-slate-500 text-xs font-medium">
                        <Calendar size={12} /> {item.date}
                      </div>
                    </td>
                    <td className="px-6 py-6 text-center">
                      <div className="flex flex-col items-center">
                        <span className={`text-sm font-black ${item.score > 80 ? 'text-emerald-500' : 'text-slate-700'}`}>
                          {item.score}%
                        </span>
                        <span className={`flex items-center text-[9px] font-bold uppercase ${item.trend === 'up' ? 'text-emerald-500' : 'text-rose-400'}`}>
                          {item.trend === 'up' ? <ArrowUpRight size={10} /> : <ArrowDownRight size={10} />}
                          {item.trend === 'up' ? '+5%' : '-2%'}
                        </span>
                      </div>
                    </td>
                    <td className="px-10 py-6 text-right">
                      <button 
                        onClick={() => navigate(`/reports/${item.id}`)}
                        className="bg-slate-50 text-slate-400 p-2 rounded-xl group-hover:bg-[#0f172a] group-hover:text-white transition-all shadow-sm"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportsList;