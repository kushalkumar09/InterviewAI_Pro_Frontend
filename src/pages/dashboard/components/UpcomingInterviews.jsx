import React from 'react';
import { Play, Calendar, User, Briefcase } from 'lucide-react';

const InterviewCard = ({ role, company, date, daysLeft, priority }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
        <div className="flex justify-between items-start mb-4">
             <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl font-bold text-gray-700">
                {company[0]}
             </div>
             {priority && <span className="bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full">HIGH PRIORITY</span>}
             {daysLeft && <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1 rounded-full">{daysLeft} DAYS LEFT</span>}
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-1">{role}</h3>
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
            <Calendar size={16} />
            <span>{date}</span>
        </div>

        <button className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors ${
            priority 
                ? 'bg-purple-600 text-white hover:bg-purple-700 shadow-lg shadow-purple-200' 
                : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-50'
        }`}>
            {priority ? 'Start Now' : 'Prepare'}
            {priority ? <Play size={18} fill="currentColor" /> : <Briefcase size={18} />}
        </button>
    </div>
);

const UpcomingInterviews = () => {
    return (
        <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-900">Upcoming Interviews</h2>
                <button className="text-purple-600 font-medium hover:text-purple-700 text-sm">View All →</button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <InterviewCard 
                    role="Senior Frontend Developer" 
                    company="Google" 
                    date="Oct 24, 2024" 
                    priority
                />
                 <InterviewCard 
                    role="Product Manager" 
                    company="Notion" 
                    date="Oct 26, 2024" 
                    daysLeft={2}
                />
            </div>
        </div>
    );
};

export default UpcomingInterviews;
