import React from 'react';
import { Camera, Mic, Shield, X } from 'lucide-react';

export const PermissionModal = ({ isOpen, onClose, onConfirm, type }) => {
  if (!isOpen) return null;

  const isCamera = type === 'camera';
  const Icon = isCamera ? Camera : Mic;
  const title = isCamera ? 'Camera Access' : 'Microphone Access';
  const description = isCamera 
    ? "We use your camera for real-time video streaming, facial expression analysis, and to create an immersive interview experience."
    : "Microphone access is required for the AI to hear your voice, perform speech-to-text, and analyze your communication quality.";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-white rounded-[32px] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="px-8 py-10 flex flex-col items-center text-center">
          
          <div className="w-20 h-20 bg-purple-50 rounded-3xl flex items-center justify-center mb-6 text-purple-600 shadow-inner">
            <Icon className="w-10 h-10" />
          </div>

          <h2 className="text-2xl font-black text-slate-800 mb-2">{title} Required</h2>
          <p className="text-[15px] font-medium text-slate-500 leading-relaxed max-w-xs mb-8">
            {description}
          </p>

          <div className="flex flex-col gap-3 w-full">
            <button 
              onClick={onConfirm}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-purple-500/20 active:scale-95 transition-all text-sm uppercase tracking-widest"
            >
              Allow Access
            </button>
            <button 
              onClick={onClose}
              className="w-full bg-slate-50 hover:bg-slate-100 text-slate-400 font-bold py-4 rounded-2xl active:scale-95 transition-all text-[11px] uppercase tracking-[0.2em]"
            >
              Not now
            </button>
          </div>
          
          <div className="mt-8 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-slate-50 px-4 py-2 rounded-full">
            <Shield className="w-3 h-3 text-emerald-500" />
            <span>Secure Encryption Enabled</span>
          </div>
        </div>

        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-all"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
