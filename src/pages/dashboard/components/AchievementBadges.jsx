import React from 'react';
import { MessageSquare, Code, HelpCircle } from 'lucide-react';

const Badge = ({ icon, color }) => (
    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${color} shadow-sm`}>
        {icon}
    </div>
);

const AchievementBadges = () => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-gray-900">Achievement Badges</h3>
                <span className="text-purple-600 text-xs font-bold bg-purple-50 px-2 py-1 rounded-md">New!</span>
            </div>
            
            <div className="flex justify-around">
                <Badge icon={<MessageSquare size={20} />} color="bg-orange-400" />
                <Badge icon={<Code size={20} />} color="bg-blue-500" />
                <Badge icon={<HelpCircle size={20} />} color="bg-gray-200" />
            </div>
        </div>
    );
};

export default AchievementBadges;
