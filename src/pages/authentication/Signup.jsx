import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Rocket, User, Mail, Lock } from 'lucide-react';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem('token', 'true');
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full bg-white rounded-[40px] shadow-xl p-10 border border-slate-100">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-cyan-400 p-3 rounded-2xl text-white mb-4 shadow-lg shadow-blue-100">
            <Rocket size={32} fill="currentColor" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Join the Pros</h1>
          <p className="text-slate-400 text-sm">Get ready for your dream career</p>
        </div>

        <form onSubmit={handleSignup} className="space-y-4">
          <div className="relative">
            <User className="absolute left-4 top-3.5 text-slate-400" size={20} />
            <input type="text" placeholder="Full Name" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 focus:outline-none ring-purple-100" required />
          </div>
          <div className="relative">
            <Mail className="absolute left-4 top-3.5 text-slate-400" size={20} />
            <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 focus:outline-none ring-purple-100" required />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-3.5 text-slate-400" size={20} />
            <input type="password" placeholder="Create Password" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 focus:outline-none ring-purple-100" required />
          </div>
          <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-100 hover:scale-[1.02] transition-transform uppercase tracking-wide text-sm mt-2">
            Get Started
          </button>
        </form>

        <p className="text-center mt-8 text-sm text-slate-500">
          Already a member? <Link to="/login" className="text-blue-500 font-bold hover:underline">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;