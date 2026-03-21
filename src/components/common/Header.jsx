import React from 'react';
import { Rocket, Bell, User } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="flex justify-between items-center px-12 py-6 bg-white border-b border-slate-50 sticky top-0 z-50">
      <div className="flex items-center gap-2">
      </div>

      <div className="flex items-center gap-8 text-sm font-medium text-slate-600">
        <NavLink to="/" className={({isActive}) => isActive ? "text-purple-600" : "hover:text-purple-500"}>Dashboard</NavLink>
        <NavLink to="/history" className={({isActive}) => isActive ? "text-purple-600" : "hover:text-purple-500"}>History</NavLink>
        <NavLink to="/library" className={({isActive}) => isActive ? "text-purple-600" : "hover:text-purple-500"}>Library</NavLink>
        
        <div className="flex gap-4 items-center ml-4 border-l pl-8 border-slate-100">
          <button className="bg-slate-100 p-2 rounded-full text-slate-500 hover:bg-slate-200 transition-colors">
            <Bell size={20} />
          </button>
          <div className="bg-orange-200 p-2 rounded-full border-2 border-white shadow-sm cursor-pointer">
            <User size={20} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;