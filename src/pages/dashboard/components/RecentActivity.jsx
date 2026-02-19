import React from 'react';

const ActivityItem = ({ title, subtext, time, color }) => (
    <div className="flex gap-4">
        <div className={`w-2 h-2 rounded-full mt-2 ${color}`}></div>
        <div className="flex-1 pb-6 border-l border-gray-100 pl-6 -ml-1">
            <h4 className="text-sm font-bold text-gray-900">{title}</h4>
             <p className="text-xs text-gray-500 mt-1">{subtext}</p>
             <p className="text-[10px] text-gray-400 mt-2">{time}</p>
        </div>
    </div>
);

const RecentActivity = () => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
             <h3 className="text-lg font-bold text-gray-900 mb-6">Recent Activity</h3>
             <div className="space-y-2">
                <ActivityItem 
                    title="Backend Engineer Prep"
                    subtext="Completed • Score: 92/100"
                    time="Yesterday, 4:30 PM"
                    color="bg-green-500"
                />
                 <ActivityItem 
                    title="Mock Interview: Amazon"
                    subtext="Completed • Score: 84/100"
                    time="3 days ago"
                    color="bg-purple-500"
                />
                 <ActivityItem 
                    title="Behavioral Question Pack"
                    subtext="Practiced 12 questions"
                    time="5 days ago"
                    color="bg-gray-300"
                />
             </div>

             <div className="mt-8 pt-6 border-t border-gray-100">
                <h4 className="text-sm font-bold text-gray-900 mb-2">Next Milestone</h4>
                <p className="text-sm text-gray-500">
                    Complete <span className="font-bold text-purple-600">2 more technical mocks</span> to reach Level 13.
                </p>
                <div className="w-full bg-gray-100 rounded-full h-2 mt-3">
                    <div className="bg-purple-600 h-2 rounded-full w-3/4"></div>
                </div>
             </div>
        </div>
    );
};

export default RecentActivity;
