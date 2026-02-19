import React from 'react';

const SkillRadar = () => {
  // Simple SVG implementation of a radar chart
  return (
    <div className="relative w-full h-48 flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-48 h-48">
        {/* Background Hexagon Rings */}
        <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" className="fill-none stroke-gray-200" strokeWidth="1" />
        <polygon points="50,25 75,37.5 75,62.5 50,75 25,62.5 25,37.5" className="fill-none stroke-gray-200" strokeWidth="1" />
        
        {/* Data Polygon (Random values for demo) */}
        <polygon points="50,15 85,35 80,65 50,80 20,60 15,35" className="fill-purple-500 fill-opacity-20 stroke-purple-600" strokeWidth="2" />
        
        {/* Points */}
        <circle cx="50" cy="15" r="2" className="fill-purple-600" />
        <circle cx="85" cy="35" r="2" className="fill-purple-600" />
        <circle cx="80" cy="65" r="2" className="fill-purple-600" />
        <circle cx="50" cy="80" r="2" className="fill-purple-600" />
        <circle cx="20" cy="60" r="2" className="fill-purple-600" />
        <circle cx="15" cy="35" r="2" className="fill-purple-600" />

        {/* Labels */}
        <text x="50" y="5" textAnchor="middle" className="text-[6px] fill-gray-500 font-medium">Coding</text>
        <text x="95" y="30" textAnchor="middle" className="text-[6px] fill-gray-500 font-medium">System Design</text>
        <text x="95" y="75" textAnchor="middle" className="text-[6px] fill-gray-500 font-medium">Communication</text>
        <text x="50" y="98" textAnchor="middle" className="text-[6px] fill-gray-500 font-medium">Behavioral</text>
        <text x="5" y="75" textAnchor="middle" className="text-[6px] fill-gray-500 font-medium">Problem Solving</text>
        <text x="5" y="30" textAnchor="middle" className="text-[6px] fill-gray-500 font-medium">Speed</text>
      </svg>
    </div>
  );
};

const PerformanceAnalysis = () => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-6">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-gray-900">Performance Analysis</h3>
            </div>
            
            <p className="text-sm text-gray-500 mb-6">
                 You're in the <span className="font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">top 5%</span> of candidates this week!
            </p>

            <div className="flex flex-col items-center">
                <SkillRadar />
                <div className="mt-4 flex gap-4 text-xs font-medium text-gray-400">
                    <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-purple-600"></div>
                        You
                    </div>
                     <div className="flex items-center gap-1">
                        <div className="w-2 h-2 rounded-full bg-gray-200"></div>
                        Average
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PerformanceAnalysis;
