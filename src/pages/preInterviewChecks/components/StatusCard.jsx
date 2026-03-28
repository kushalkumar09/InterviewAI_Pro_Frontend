import { CheckCircle2 } from 'lucide-react';

export const StatusCheckCard = ({ icon: Icon, title, subtitle, isReady, action }) => (
  <div className="bg-white rounded-[20px] p-5 flex items-center justify-between shadow-sm border border-slate-100 h-auto">
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${isReady ? 'bg-purple-50' : 'bg-slate-100'}`}>
        <Icon className={`w-6 h-6 ${isReady ? 'text-purple-600' : 'text-slate-600'}`} />
      </div>
      <div>
        <h3 className="font-bold text-slate-800 text-[15px]">{title}</h3>
        <p className={`text-[13px] font-medium ${isReady ? 'text-purple-600' : 'text-slate-400'}`}>
          {subtitle}
        </p>
      </div>
    </div>
    {action ? action : <CheckCircle2 className="w-6 h-6 text-purple-600 fill-purple-600 text-white shrink-0" />}
  </div>
);