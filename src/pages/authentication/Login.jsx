import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Rocket, Mail, Lock } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock Login: Save a token and redirect
    localStorage.setItem('token', 'true');
    navigate('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full bg-white rounded-[40px] shadow-xl p-10 border border-slate-100">
        <div className="flex flex-col items-center mb-8">
          <div className="bg-purple-600 p-3 rounded-2xl text-white mb-4 shadow-lg shadow-purple-200">
            <Rocket size={32} fill="currentColor" />
          </div>
          <h1 className="text-2xl font-bold text-slate-900">Welcome Back</h1>
          <p className="text-slate-400 text-sm">Log in to continue your prep</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-4 top-3.5 text-slate-400" size={20} />
            <input 
              type="email" 
              placeholder="Email Address"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 ring-purple-100 transition-all"
              required
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-3.5 text-slate-400" size={20} />
            <input 
              type="password" 
              placeholder="Password"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 ring-purple-100 transition-all"
              required
            />
          </div>
          <button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-purple-100 hover:scale-[1.02] transition-transform uppercase tracking-wide text-sm">
            Sign In
          </button>
        </form>

        <p className="text-center mt-8 text-sm text-slate-500">
          Don't have an account? <Link to="/signup" className="text-purple-600 font-bold hover:underline">Create one</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;