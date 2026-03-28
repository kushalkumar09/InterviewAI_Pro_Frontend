import { LayoutGrid, Video, Mic, Wifi, ShieldCheck } from 'lucide-react';

export const ControlSidebar = ({ activeIndex = 0, onIconClick }) => {
  const icons = [
    { Icon: LayoutGrid, label: 'Overview' },
    { Icon: Video, label: 'Camera' },
    { Icon: Mic, label: 'Microphone' },
    { Icon: Wifi, label: 'Network' },
    { Icon: ShieldCheck, label: 'Security' },
  ];

  return (
    <div className="w-16 bg-white border-l border-slate-100 flex flex-col items-center py-8 gap-8 shrink-0 shadow-sm z-10 hidden sm:flex">
      {icons.map(({ Icon, label }, i) => {
        const isActive = activeIndex === i;
        return (
          <div 
            key={i} 
            title={label}
            onClick={() => onIconClick && onIconClick(i)}
            className={`w-10 h-10 flex items-center justify-center cursor-pointer transition-all rounded-xl ${
              isActive 
                ? 'text-purple-600 bg-purple-50 shadow-sm shadow-purple-100' 
                : 'text-slate-300 hover:text-slate-500 hover:bg-slate-50'
            }`}
          >
            <Icon className="w-5 h-5" fill={isActive ? "currentColor" : "none"} />
          </div>
        );
      })}
    </div>
  );
};