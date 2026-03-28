import { Info } from 'lucide-react';

export const InstructionPanel = ({ rules = [] }) => (
  <div className="bg-[#F4F7F9] rounded-[24px] rounded-tl-sm p-6 relative border-l-[4px] border-purple-600 mt-auto shrink-0">
    <div className="flex items-center gap-2 mb-3">
      <Info className="w-4 h-4 text-slate-800" fill="currentColor" stroke="white" />
      <span className="font-bold text-slate-800 text-[15px]">Instructions</span>
    </div>
    <div className="space-y-3">
      {rules.map((text, i) => (
        <div key={i} className="flex gap-4">
          <span className="text-[13px] font-medium text-purple-600 mt-0.5 shrink-0">0{i + 1}</span>
          <p className="text-[13px] text-slate-600 leading-snug font-medium">{text}</p>
        </div>
      ))}
    </div>
  </div>
);