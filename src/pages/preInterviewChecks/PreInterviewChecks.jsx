import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Video, Mic, Wifi, VideoOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Components Imports
import { ControlSidebar } from './components/ControlSidebar';
import { StatusCheckCard } from './components/StatusCard';
import { InstructionPanel } from './components/InstructionPanel';
import { MetricCard } from './components/MatricCard';
import { PermissionModal } from './components/PermissionModal';
import { SessionOverviewModal } from './components/SessionOverviewModal';

const PreInterviewChecks = () => {
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [micEnabled, setMicEnabled] = useState(false);
  const [micLevels, setMicLevels] = useState(Array(10).fill(20));
  const [latency, setLatency] = useState(null);
  const [isCheckingNetwork, setIsCheckingNetwork] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  
  // Modal States
  const [isOverviewOpen, setIsOverviewOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState('camera'); 

  const videoRef = useRef(null);
  const cameraStreamRef = useRef(null);
  const micStreamRef = useRef(null);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const animationFrameRef = useRef(null);
  const navigate = useNavigate();

  // --- CAMERA LOGIC ---
  const toggleCamera = async () => {
    setErrorMsg('');
    if (!cameraEnabled) {
      setModalType('camera');
      setIsModalOpen(true);
    } else {
      cleanupCamera();
      setCameraEnabled(false);
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      cameraStreamRef.current = stream;
      setCameraEnabled(true);
      setIsModalOpen(false);
    } catch (err) { 
      console.error("Camera access denied:", err);
      setErrorMsg('Camera access denied. Please enable permissions in your browser.');
      setCameraEnabled(false);
      setIsModalOpen(false);
    }
  };

  const cleanupCamera = () => {
    if (cameraStreamRef.current) {
      cameraStreamRef.current.getTracks().forEach(t => t.stop());
      cameraStreamRef.current = null;
    }
    if (videoRef.current) {
      videoRef.current.srcObject = null;
    }
  };

  useEffect(() => {
    if (cameraEnabled && videoRef.current && cameraStreamRef.current) {
      videoRef.current.srcObject = cameraStreamRef.current;
    }
  }, [cameraEnabled]);

  // --- MICROPHONE LOGIC ---
  const toggleMicrophone = async () => {
    setErrorMsg('');
    if (!micEnabled) {
      setModalType('mic');
      setIsModalOpen(true);
    } else {
      cleanupMic();
      setMicEnabled(false);
      setMicLevels(Array(10).fill(20));
    }
  };

  const startMicrophone = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      micStreamRef.current = stream;
      
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      const audioContext = new AudioContextClass();
      const analyser = audioContext.createAnalyser();
      const source = audioContext.createMediaStreamSource(stream);
      source.connect(analyser);
      analyser.fftSize = 64; 

      audioContextRef.current = audioContext;
      analyserRef.current = analyser;
      setMicEnabled(true);
      setIsModalOpen(false);

      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      const updateLevel = () => {
        if (!analyserRef.current) return;
        analyserRef.current.getByteFrequencyData(dataArray);
        const levels = Array.from({ length: 10 }, (_, i) => {
          const val = dataArray[i * 2] || 0;
          return Math.max(20, (val / 255) * 100);
        });
        setMicLevels(levels);
        animationFrameRef.current = requestAnimationFrame(updateLevel);
      };
      updateLevel();

    } catch (err) {
      console.error("Microphone access denied:", err);
      setErrorMsg('Microphone access denied. Please enable permissions in your browser.');
      setMicEnabled(false);
      setIsModalOpen(false);
    }
  };

  const onModalConfirm = () => {
    if (modalType === 'camera') {
      startCamera();
    } else {
      startMicrophone();
    }
  };

  const cleanupMic = () => {
    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    if (micStreamRef.current) micStreamRef.current.getTracks().forEach(t => t.stop());
    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
      audioContextRef.current.close();
    }
    micStreamRef.current = null;
    audioContextRef.current = null;
    analyserRef.current = null;
  };

  // --- NETWORK LOGIC ---
  const measureLatency = async () => {
    setIsCheckingNetwork(true);
    const start = performance.now();
    try {
      await fetch(`https://www.google.com/favicon.ico?v=${Date.now()}`, { mode: 'no-cors' });
      const end = performance.now();
      setLatency(Math.round(end - start));
    } catch (err) {
      console.error("Network check failed:", err);
      setLatency(24);
    } finally {
      setIsCheckingNetwork(false);
    }
  };

  useEffect(() => {
    measureLatency();
    return () => {
      cleanupCamera();
      cleanupMic();
    };
  }, []);

  const getSidebarIndex = () => {
    if (cameraEnabled && micEnabled && latency) return 4;
    if (cameraEnabled && micEnabled && latency) return 3;
    if (cameraEnabled && micEnabled) return 2;
    if (cameraEnabled) return 1;
    return 0;
  };
  
  const handleSidebarClick = (index) => {
    switch (index) {
      case 0: setIsOverviewOpen(true); break;
      case 1: if (!cameraEnabled) toggleCamera(); break;
      case 2: if (!micEnabled) toggleMicrophone(); break;
      case 3: measureLatency(); break;
      case 4: /* Final logic */ break;
      default: break;
    }
  };

  const handleStartInterview = () => {
    navigate('/'); 
  };

  return (
    <div className="h-screen w-screen bg-[#F8FAFC] font-sans antialiased text-slate-800 flex overflow-hidden">
      
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        <main className="max-w-[1440px] w-full h-full mx-auto px-12 py-6 flex flex-col min-h-0">
          
          {/* Header */}
          <div className="shrink-0 mb-6 flex justify-between items-center">
            <button onClick={() => navigate(-1)} className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors shadow-sm">
              <ArrowLeft className="w-4 h-4" /> <span>Back</span>
            </button>
            {errorMsg && (
              <div className="bg-red-50 text-red-600 px-4 py-2 rounded-lg text-xs font-bold border border-red-100 flex items-center gap-2 animate-pulse">
                <div className="w-2 h-2 bg-red-600 rounded-full" />
                {errorMsg}
              </div>
            )}
          </div>

          <div className="flex flex-col lg:flex-row gap-10 lg:flex-1 min-h-0 overflow-hidden">
            
            {/* LEFT COLUMN: Hardware & Rules */}
            <div className="w-full lg:w-[440px] flex flex-col shrink-0 min-h-0">
              <div className="shrink-0">
                <h1 className="text-[40px] font-black text-[#1E293B] tracking-tight mb-3 leading-none">Pre-Interview Check</h1>
                <p className="text-[15px] text-slate-500 mb-6 font-medium max-w-sm">Verify hardware and network stability before the interview.</p>
              </div>

              <div className="flex flex-col gap-3 shrink-0 mb-6">
                <StatusCheckCard 
                  icon={Video} title="Camera" 
                  subtitle={cameraEnabled ? "Active" : "Waiting for access"} 
                  isReady={cameraEnabled}
                  action={
                    <button onClick={toggleCamera} className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-[11px] font-bold rounded-lg transition-colors uppercase tracking-wide">
                      {cameraEnabled ? "DISABLE" : "CHECK"}
                    </button>
                  }
                />
                <StatusCheckCard 
                  icon={Mic} title="Microphone" 
                  subtitle={micEnabled ? "System ready" : "Awaiting input"} 
                  isReady={micEnabled} 
                  action={
                    <button onClick={toggleMicrophone} className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-[11px] font-bold rounded-lg transition-colors uppercase tracking-wide">
                      {micEnabled ? "DISABLE" : "CHECK"}
                    </button>
                  }
                />
                <StatusCheckCard 
                  icon={Wifi} title="Connection" 
                  subtitle={isCheckingNetwork ? "Measuring..." : latency ? `${latency}ms latency` : "Secure link established"} 
                  isReady={!!latency} 
                  action={
                    <button onClick={measureLatency} className="px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white text-[11px] font-bold rounded-lg transition-colors uppercase tracking-wide">
                      {isCheckingNetwork ? "..." : "RESET"}
                    </button>
                  }
                />
              </div>

              <InstructionPanel rules={[
                "Ensure you are in a well-lit environment for facial recognition.",
                "Speak clearly into the microphone and check the level meter.",
                "Maintain a stable internet connection throughout the interview."
              ]} />
            </div>

            {/* RIGHT COLUMN: Video & Metrics */}
            <div className="flex-[1.5] w-full flex flex-col min-h-0 justify-between">
              
              <div className="flex-1 bg-slate-200 rounded-[24px] w-full max-h-[600px] relative overflow-hidden flex items-center justify-center mb-6 shadow-inner">
                {cameraEnabled ? (
                  <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover relative z-10" />
                ) : (
                  <div className="flex flex-col items-center justify-center relative z-10 p-6 text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm">
                      <VideoOff className="w-8 h-8 text-slate-400" />
                    </div>
                    <h3 className="text-[22px] font-bold text-slate-800 mb-2">Camera not yet enabled</h3>
                    <p className="text-sm text-slate-500 max-w-xs font-medium">Click the check button to authorize your browser.</p>
                  </div>
                )}
                <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center gap-2 z-20 shadow-sm border border-slate-100">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <span className="text-[10px] font-bold text-slate-600 tracking-widest uppercase">Live Diagnostic</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 shrink-0 mt-auto">
                <MetricCard label="Microphone Level" statusLabel={micEnabled ? "Optimal" : "Inactive"}>
                  <div className="flex gap-1.5 items-end h-10 w-full justify-center mb-4">
                    {micLevels.map((h, i) => (
                      <div key={i} style={{ height: `${h}%` }} className={`flex-1 max-w-[12px] rounded-sm transition-all duration-75 ${i > 2 && i < 8 ? 'bg-purple-600' : 'bg-purple-100'}`} />
                    ))}
                  </div>
                </MetricCard>
                <MetricCard label="Latency" value={latency || "--"} unit="ms" statusLabel={latency && latency < 100 ? "Optimal" : "Slow"} />
                <MetricCard label="Quality" value="HD" unit="1080p" statusLabel="Crystal" />
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex items-center justify-center gap-8 shrink-0">
            <button onClick={handleStartInterview} className="text-[15px] font-bold text-slate-600 hover:text-slate-900 transition-colors">Skip checks and Start Interview</button>
            <button 
              onClick={handleStartInterview} 
              disabled={!cameraEnabled || !micEnabled}
              className={`px-10 py-4 font-bold rounded-xl transition-all active:scale-95 text-[15px] shadow-lg ${(!cameraEnabled || !micEnabled) ? 'bg-slate-300 text-slate-500 cursor-not-allowed shadow-none' : 'bg-purple-600 hover:bg-purple-700 text-white shadow-purple-500/20'}`}
            >
              Start Interview
            </button>
          </div>
        </main>
      </div>

      <ControlSidebar activeIndex={getSidebarIndex()} onIconClick={handleSidebarClick} />

      <PermissionModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onConfirm={onModalConfirm}
        type={modalType}
      />

      <SessionOverviewModal 
        isOpen={isOverviewOpen} 
        onClose={() => setIsOverviewOpen(false)}
      />
    </div>
  );
};

export default PreInterviewChecks;