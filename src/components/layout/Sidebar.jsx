import React from 'react';
import { LayoutGrid, PlusCircle, BarChart2, Medal, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0">
      <div className="p-8">
        <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">I</span>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                InterviewAI <span className="text-purple-600">Pro</span>
            </h1>
        </div>

        <nav className="space-y-2">
            <NavLink icon={<LayoutGrid size={20} />} label="Dashboard" active />
            <NavLink icon={<PlusCircle size={20} />} label="Create" />
            <NavLink icon={<BarChart2 size={20} />} label="Reports" />
            <NavLink icon={<Medal size={20} />} label="Achievements" />
        </nav>
      </div>

      <div className="mt-auto p-8 border-t border-gray-50">
        <nav className="space-y-2">
            <NavLink icon={<Settings size={20} />} label="Settings" />
            <button className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl w-full transition-colors">
                <LogOut size={20} />
                <span className="font-medium">Logout</span>
            </button>
        </nav>
      </div>
    </div>
  );
};

const NavLink = ({ icon, label, active = false }) => (
  <button className={`flex items-center gap-3 px-4 py-3 rounded-xl w-full transition-colors ${
    active 
      ? 'bg-purple-50 text-purple-600' 
      : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
  }`}>
    {icon}
    <span className="font-medium">{label}</span>
  </button>
);

export default Sidebar;
