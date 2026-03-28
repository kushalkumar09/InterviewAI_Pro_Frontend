export const MetricCard = ({ label, value, unit, statusLabel, children }) => (
  <div className="bg-white rounded-[24px] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col justify-between">
    <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase block mb-3">{label}</span>
    {children ? (
      children
    ) : (
      <div className="flex items-baseline gap-1 mb-2">
        <span className="text-[32px] font-black text-slate-800 leading-none">{value}</span>
        <span className="text-[13px] font-bold text-slate-600">{unit}</span>
      </div>
    )}
    <div className="flex items-center gap-2">
      <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
      <span className="text-[10px] font-bold text-purple-600 uppercase tracking-widest">{statusLabel}</span>
    </div>
  </div>
);