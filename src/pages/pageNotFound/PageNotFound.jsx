import React from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertCircle } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-6">
      <div className="bg-purple-100 p-6 rounded-full text-purple-600 mb-6 shadow-xl shadow-purple-50">
        <AlertCircle size={64} />
      </div>
      
      <h1 className="text-4xl font-bold text-slate-900 mb-2">404 - Page Not Found</h1>
      <p className="text-slate-500 max-w-md mb-8">
        Oops! It looks like the page you're looking for doesn't exist or has been moved to a new interview room.
      </p>

      <Link 
        to="/" 
        className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-purple-200 hover:scale-105 transition-transform"
      >
        <Home size={20} />
        Back to Dashboard
      </Link>
    </div>
  );
};

export default NotFound;