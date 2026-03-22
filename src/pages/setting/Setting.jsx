import React, { useState } from 'react';
import { 
  User, Sliders, CreditCard, Bell, 
  Camera, Shield, LogOut, CheckCircle2,
  Zap, Volume2, Globe
} from 'lucide-react';

// Mini Toggle Component for the UI
const Toggle = ({ enabled, onChange }) => (
  <button
    type="button"
    onClick={onChange}
    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 ${
      enabled ? 'bg-purple-600' : 'bg-slate-200'
    }`}
  >
    <span
      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
        enabled ? 'translate-x-5' : 'translate-x-0'
      }`}
    />
  </button>
);

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  // Mock State for Form Data
  const [profileData, setProfileData] = useState({
    firstName: 'Alex',
    lastName: 'Chen',
    email: 'alex.chen@example.com',
    targetRole: 'Senior Frontend Engineer',
    experience: '5-7 Years',
  });

  const [preferences, setPreferences] = useState({
    strictMode: true,
    aiVoice: 'Nova (Female, Professional)',
    language: 'English (US)',
    playbackSpeed: 'Normal (1.0x)'
  });

  const [notifications, setNotifications] = useState({
    emailSummaries: true,
    streakReminders: true,
    marketingEmails: false,
  });

  return (
    <>
      <div className="flex flex-col h-full w-full max-w-6xl mx-auto overflow-hidden">
        
        {/* Header */}
        <div className="flex items-end justify-between mb-8 shrink-0 px-2">
          <div className="space-y-1">
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Settings</h1>
            <p className="text-slate-400 text-sm font-medium">Manage your account, AI preferences, and billing.</p>
          </div>
          <button className="bg-[#0f172a] text-white px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-purple-600 transition-all shadow-lg active:scale-95">
            Save Changes
          </button>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col flex-1 overflow-hidden mb-4">
          
          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-100 px-10 pt-4 gap-8 shrink-0 overflow-x-auto no-scrollbar">
            {[
              { id: 'profile', icon: <User size={16} />, label: 'My Profile' },
              { id: 'preferences', icon: <Sliders size={16} />, label: 'AI Preferences' },
              { id: 'billing', icon: <CreditCard size={16} />, label: 'Billing & Plan' },
              { id: 'notifications', icon: <Bell size={16} />, label: 'Notifications' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.15em] relative transition-all whitespace-nowrap ${
                  activeTab === tab.id ? 'text-purple-600' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                {tab.icon} {tab.label}
                {activeTab === tab.id && <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-600 rounded-t-full" />}
              </button>
            ))}
          </div>

          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto p-10 space-y-10 animate-in fade-in duration-300">
            
            {/* PROFILE TAB */}
            {activeTab === 'profile' && (
              <div className="max-w-3xl space-y-8">
                {/* Avatar Section */}
                <div className="flex items-center gap-6">
                  <div className="relative group cursor-pointer">
                    <div className="w-24 h-24 bg-purple-100 text-purple-600 rounded-[2rem] flex items-center justify-center text-3xl font-black border-4 border-white shadow-md group-hover:bg-purple-200 transition-colors">
                      {profileData.firstName.charAt(0)}{profileData.lastName.charAt(0)}
                    </div>
                    <div className="absolute bottom-0 right-0 p-2 bg-[#0f172a] text-white rounded-xl shadow-lg border-2 border-white group-hover:scale-110 transition-transform">
                      <Camera size={14} />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">Profile Picture</h3>
                    <p className="text-sm text-slate-500 font-medium">PNG, JPG under 5MB</p>
                  </div>
                </div>

                <hr className="border-slate-100" />

                {/* Form Fields */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">First Name</label>
                    <input type="text" value={profileData.firstName} onChange={(e) => setProfileData({...profileData, firstName: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-bold text-slate-900 focus:bg-white focus:border-purple-400 focus:ring-4 ring-purple-50 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Last Name</label>
                    <input type="text" value={profileData.lastName} onChange={(e) => setProfileData({...profileData, lastName: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-bold text-slate-900 focus:bg-white focus:border-purple-400 focus:ring-4 ring-purple-50 outline-none transition-all" />
                  </div>
                  <div className="col-span-2 space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                    <input type="email" value={profileData.email} disabled className="w-full bg-slate-100 border border-slate-200 rounded-2xl p-4 text-sm font-bold text-slate-500 cursor-not-allowed" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Default Target Role</label>
                    <input type="text" value={profileData.targetRole} onChange={(e) => setProfileData({...profileData, targetRole: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-bold text-slate-900 focus:bg-white focus:border-purple-400 focus:ring-4 ring-purple-50 outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Experience Level</label>
                    <select value={profileData.experience} onChange={(e) => setProfileData({...profileData, experience: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-bold text-slate-900 focus:bg-white focus:border-purple-400 focus:ring-4 ring-purple-50 outline-none transition-all appearance-none cursor-pointer">
                      <option>Entry Level (0-2 Yrs)</option>
                      <option>Mid Level (3-5 Yrs)</option>
                      <option>Senior (5-7 Yrs)</option>
                      <option>Lead / Staff (8+ Yrs)</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* AI PREFERENCES TAB */}
            {activeTab === 'preferences' && (
              <div className="max-w-3xl space-y-8">
                
                <div className="bg-purple-50 border border-purple-100 p-6 rounded-[2rem] flex items-start gap-4">
                  <div className="bg-purple-500 text-white p-3 rounded-2xl shadow-lg shadow-purple-200/50 mt-1"><Zap size={20} /></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-purple-900 text-lg">AI Strict Mode</h3>
                      <Toggle enabled={preferences.strictMode} onChange={() => setPreferences({...preferences, strictMode: !preferences.strictMode})} />
                    </div>
                    <p className="text-purple-700 text-sm font-medium leading-relaxed">
                      When enabled, the AI will act like a top-tier tech company interviewer (e.g., FAANG). It will probe deeper into your answers, demand optimal code, and be harsher on grading.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1"><Volume2 size={14}/> Interviewer Voice</label>
                    <select value={preferences.aiVoice} onChange={(e) => setPreferences({...preferences, aiVoice: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-bold text-slate-900 focus:bg-white focus:border-purple-400 outline-none transition-all appearance-none cursor-pointer">
                      <option>Nova (Female, Professional)</option>
                      <option>Onyx (Male, Deep)</option>
                      <option>Alloy (Neutral, Upbeat)</option>
                      <option>Echo (Male, Calm)</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1"><Globe size={14}/> Primary Language</label>
                    <select value={preferences.language} onChange={(e) => setPreferences({...preferences, language: e.target.value})} className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 text-sm font-bold text-slate-900 focus:bg-white focus:border-purple-400 outline-none transition-all appearance-none cursor-pointer">
                      <option>English (US)</option>
                      <option>English (UK)</option>
                      <option>Spanish</option>
                      <option>French</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* BILLING TAB */}
            {activeTab === 'billing' && (
              <div className="max-w-3xl space-y-8">
                <div className="bg-[#0f172a] rounded-[2rem] p-8 text-white flex flex-col md:flex-row justify-between items-center gap-6 shadow-xl shadow-slate-200">
                  <div>
                    <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-500/20 mb-4 inline-block">Active Plan</span>
                    <h2 className="text-3xl font-black mb-1">Pro Membership</h2>
                    <p className="text-slate-400 text-sm">Billed $19.00 monthly. Next charge on Apr 22, 2026.</p>
                  </div>
                  <button className="bg-white text-slate-900 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-slate-200 transition-all">
                    Manage Billing
                  </button>
                </div>

                <div className="bg-white border border-slate-100 rounded-[2rem] p-8 shadow-sm">
                  <h3 className="text-sm font-black uppercase tracking-widest text-slate-900 mb-6">Current Usage</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-bold text-slate-600">
                      <span>Mock Interviews</span>
                      <span>14 / 20</span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-purple-600 h-full rounded-full" style={{ width: '70%' }}></div>
                    </div>
                    <p className="text-xs text-slate-400 pt-2 font-medium">Resets in 12 days</p>
                  </div>
                </div>
              </div>
            )}

            {/* NOTIFICATIONS TAB */}
            {activeTab === 'notifications' && (
              <div className="max-w-3xl space-y-6">
                {[
                  {
                    id: 'emailSummaries',
                    title: 'Interview Summaries',
                    desc: 'Receive a detailed PDF report in your email after completing a mock session.',
                    state: notifications.emailSummaries
                  },
                  {
                    id: 'streakReminders',
                    title: 'Streak Reminders',
                    desc: 'Get notified if you are about to lose your daily interview practice streak.',
                    state: notifications.streakReminders
                  },
                  {
                    id: 'marketingEmails',
                    title: 'Product Updates & Tips',
                    desc: 'Occasional emails about new AI features and interview preparation tips.',
                    state: notifications.marketingEmails
                  }
                ].map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-6 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:border-purple-100 transition-colors">
                    <div className="max-w-lg">
                      <h4 className="font-bold text-slate-900 text-sm">{item.title}</h4>
                      <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                    <Toggle 
                      enabled={item.state} 
                      onChange={() => setNotifications({...notifications, [item.id]: !item.state})} 
                    />
                  </div>
                ))}

                <hr className="border-slate-100 my-8" />
                
                {/* Danger Zone */}
                <div>
                  <h3 className="text-xs font-black uppercase tracking-widest text-rose-500 mb-4 flex items-center gap-2">
                    <Shield size={16} /> Danger Zone
                  </h3>
                  <div className="flex items-center justify-between p-6 bg-rose-50 border border-rose-100 rounded-[2rem]">
                    <div>
                      <h4 className="font-bold text-rose-900 text-sm">Delete Account</h4>
                      <p className="text-xs text-rose-700 font-medium mt-1">Permanently delete your account and all interview history.</p>
                    </div>
                    <button className="px-6 py-3 bg-white border border-rose-200 text-rose-600 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-rose-600 hover:text-white transition-all shadow-sm">
                      Delete Data
                    </button>
                  </div>
                </div>

              </div>
            )}

          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;