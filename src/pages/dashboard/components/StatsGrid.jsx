import React from 'react';
import { Flame, Trophy, CheckCircle, Star } from 'lucide-react';

const StatsCard = ({ icon, label, value, subtext, color }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
        <div className={`p-4 rounded-xl ${color} bg-opacity-10 text-${color.split('-')[1]}-600`}>
            {icon}
        </div>
        <div>
            <p className="text-gray-500 text-sm font-medium">{label}</p>
            <h3 className="text-2xl font-bold text-gray-900 mt-1">{value}</h3>
             {subtext && <p className="text-xs text-purple-600 font-medium mt-1">{subtext}</p>}
        </div>
    </div>
);

const StatsGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatsCard 
                icon={<Flame size={24} className="text-orange-500" />} 
                label="Daily Streak" 
                value="5 Days!" 
                color="bg-orange-500"
            />
             <StatsCard 
                icon={<Trophy size={24} className="text-purple-500" />} 
                label="Level" 
                value="Level 12" 
                subtext="240 XP to next"
                color="bg-purple-500"
            />
             <StatsCard 
                icon={<CheckCircle size={24} className="text-green-500" />} 
                label="Interviews Done" 
                value="24 Sessions" 
                color="bg-green-500"
            />
             <StatsCard 
                icon={<Star size={24} className="text-blue-500" />} 
                label="Badges" 
                value="8 Unlocked" 
                color="bg-blue-500"
            />
        </div>
    );
};

export default StatsGrid;
