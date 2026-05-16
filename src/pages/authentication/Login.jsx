import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Rocket, Mail, Lock } from 'lucide-react';
import { api } from '../../config/api/api';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    try {
      const { data } = await api.post('/auth/login', { email, password });
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(data.user));
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Unable to sign in');
    } finally {
      setIsSubmitting(false);
    }
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 ring-purple-100 transition-all"
              required
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-3.5 text-slate-400" size={20} />
            <input 
              type="password" 
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-3.5 pl-12 pr-4 focus:outline-none focus:ring-2 ring-purple-100 transition-all"
              required
            />
          </div>
          {error && <p className="text-sm font-bold text-rose-500 text-center">{error}</p>}
          <button disabled={isSubmitting} className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold py-4 rounded-2xl shadow-lg shadow-purple-100 hover:scale-[1.02] transition-transform uppercase tracking-wide text-sm disabled:opacity-60">
            {isSubmitting ? 'Signing In...' : 'Sign In'}
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
