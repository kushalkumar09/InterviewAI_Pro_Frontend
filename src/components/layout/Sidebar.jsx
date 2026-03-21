import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutGrid, PlusCircle, BarChart2, Medal, Settings, LogOut } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col fixed left-0 top-0">
      <div className="p-8">
        {/* Logo Section */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-purple-200">
            <span className="text-white font-bold text-lg">I</span>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            InterviewAI <span className="text-purple-600">Pro</span>
          </h1>
        </div>

        {/* Main Navigation */}
        <nav className="space-y-2">
          <SidebarLink icon={<LayoutGrid size={20} />} label="Dashboard" to="/" />
          <SidebarLink icon={<PlusCircle size={20} />} label="Create Interview" to="/create-interview" />
          <SidebarLink icon={<BarChart2 size={20} />} label="Reports" to="/reports" />
          <SidebarLink icon={<Medal size={20} />} label="Achievements" to="/achievements" />
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="mt-auto p-8 border-t border-gray-50">
        <nav className="space-y-2">
          <SidebarLink icon={<Settings size={20} />} label="Settings" to="/settings" />
          <button 
            onClick={() => console.log("Logging out...")}
            className="flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl w-full transition-all group"
          >
            <LogOut size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Logout</span>
          </button>
        </nav>
      </div>
    </div>
  );
};

const SidebarLink = ({ icon, label, to }) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => `
        flex items-center gap-3 px-4 py-3 rounded-xl w-full transition-all duration-200
        ${isActive 
          ? 'bg-purple-50 text-purple-600 shadow-sm' 
          : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}
      `}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </NavLink>
  );
};

export default Sidebar;