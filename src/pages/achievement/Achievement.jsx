import React from 'react';
import { 
  Trophy, Flame, Target, Star, Shield, 
  Zap, Lock, Crown, Award, ChevronRight 
} from 'lucide-react';

const Achievements = () => {
  // Mock User Stats
  const userStats = {
    level: 12,
    currentXP: 8450,
    nextLevelXP: 10000,
    streak: 5,
    interviewsCompleted: 14,
    topScore: 92,
    rankTitle: "Lead Architect Candidate"
  };

  // Mock Achievements List
  const achievementsList = [
    {
      id: 1,
      title: "First Steps",
      description: "Complete your first AI mock interview.",
      icon: <Target size={24} />,
      unlocked: true,
      date: "Feb 10, 2026",
      theme: "text-blue-500 bg-blue-50 border-blue-100"
    },
    {
      id: 2,
      title: "On Fire",
      description: "Maintain a 5-day interview practice streak.",
      icon: <Flame size={24} />,
      unlocked: true,
      date: "Mar 22, 2026",
      theme: "text-orange-500 bg-orange-50 border-orange-100"
    },
    {
      id: 3,
      title: "System Design Guru",
      description: "Score over 85% in a System Design specific session.",
      icon: <Shield size={24} />,
      unlocked: true,
      date: "Mar 15, 2026",
      theme: "text-emerald-500 bg-emerald-50 border-emerald-100"
    },
    {
      id: 4,
      title: "Perfectionist",
      description: "Achieve an overall score of 95% or higher.",
      icon: <Crown size={24} />,
      unlocked: false,
      date: null,
      theme: "text-amber-500 bg-amber-50 border-amber-100"
    },
    {
      id: 5,
      title: "Fast Thinker",
      description: "Answer 10 consecutive technical questions under 2 minutes each.",
      icon: <Zap size={24} />,
      unlocked: false,
      date: null,
      theme: "text-purple-500 bg-purple-50 border-purple-100"
    },
    {
      id: 6,
      title: "Behavioral Master",
      description: "Use the STAR method flawlessly in a behavioral mock.",
      icon: <Star size={24} />,
      unlocked: false,
      date: null,
      theme: "text-pink-500 bg-pink-50 border-pink-100"
    }
  ];

  // Calculate Progress Bar
  const progressPercent = (userStats.currentXP / userStats.nextLevelXP) * 100;

  return (
    <>
      <div className="flex flex-col h-full w-full max-w-6xl mx-auto overflow-hidden">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-8 shrink-0 px-2">
          <div className="space-y-1">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Achievements</h1>
            <p className="text-slate-400 text-sm font-medium">Track your milestones and interview mastery.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="bg-orange-50 text-orange-600 px-4 py-2 rounded-xl flex items-center gap-2 font-bold text-xs uppercase tracking-widest shadow-sm border border-orange-100">
              <Flame size={16} /> {userStats.streak} Day Streak
            </div>
          </div>
        </div>

        {/* Main Scrollable Area */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col flex-1 overflow-hidden mb-4">
          <div className="flex-1 overflow-y-auto p-10 space-y-10 animate-in fade-in duration-500">
            
            {/* 1. Top Rank Banner */}
            <div className="bg-[#0f172a] rounded-[2rem] p-8 text-white relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl shadow-slate-200">
              <div className="relative z-10 flex items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg border-2 border-purple-400">
                  <Trophy size={40} className="text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-purple-400 mb-1">Current Rank</p>
                  <h2 className="text-2xl font-bold">{userStats.rankTitle}</h2>
                  <p className="text-slate-400 text-sm">Level {userStats.level}</p>
                </div>
              </div>

              <div className="relative z-10 flex-1 w-full max-w-md bg-slate-800/50 p-6 rounded-2xl border border-slate-700/50">
                <div className="flex justify-between text-xs font-bold mb-3">
                  <span className="text-slate-300">{userStats.currentXP} XP</span>
                  <span className="text-purple-400">{userStats.nextLevelXP} XP</span>
                </div>
                <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 transition-all duration-1000 ease-out" 
                    style={{ width: `${progressPercent}%` }} 
                  />
                </div>
                <p className="text-[10px] text-slate-400 text-center mt-3 uppercase tracking-widest font-bold">
                  {userStats.nextLevelXP - userStats.currentXP} XP to Next Level
                </p>
              </div>

              {/* Decorative shapes */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* 2. Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Total Sessions', value: userStats.interviewsCompleted, icon: <Target size={18} /> },
                { label: 'Top Score', value: `${userStats.topScore}%`, icon: <Award size={18} /> },
                { label: 'Badges Earned', value: achievementsList.filter(a => a.unlocked).length, icon: <Shield size={18} /> },
                { label: 'Global Rank', value: 'Top 15%', icon: <Crown size={18} /> },
              ].map((stat, i) => (
                <div key={i} className="bg-slate-50/50 border border-slate-100 rounded-2xl p-5 flex flex-col gap-3">
                  <div className="text-slate-400">{stat.icon}</div>
                  <div>
                    <h4 className="text-2xl font-black text-slate-900">{stat.value}</h4>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 3. Badges Grid */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Your Badges</h3>
                <span className="text-xs font-bold text-slate-400">
                  {achievementsList.filter(a => a.unlocked).length} / {achievementsList.length} Unlocked
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {achievementsList.map((badge) => (
                  <div 
                    key={badge.id} 
                    className={`relative p-6 rounded-[2rem] border transition-all duration-300 ${
                      badge.unlocked 
                        ? 'bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-purple-200 group' 
                        : 'bg-slate-50/50 border-slate-100 opacity-70 grayscale hover:grayscale-0'
                    }`}
                  >
                    {!badge.unlocked && (
                      <div className="absolute top-6 right-6 text-slate-300">
                        <Lock size={18} />
                      </div>
                    )}
                    
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 border ${
                      badge.unlocked ? badge.theme : 'bg-slate-100 text-slate-400 border-slate-200'
                    }`}>
                      {badge.icon}
                    </div>
                    
                    <h4 className={`font-bold mb-2 ${badge.unlocked ? 'text-slate-900' : 'text-slate-500'}`}>
                      {badge.title}
                    </h4>
                    <p className="text-xs text-slate-500 leading-relaxed font-medium mb-4">
                      {badge.description}
                    </p>
                    
                    {badge.unlocked ? (
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        Unlocked • {badge.date}
                      </p>
                    ) : (
                      <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden mt-4">
                        <div className="h-full bg-slate-400 w-1/3" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Achievements;