const localUrl = import.meta.env.VITE_LOCAL_URL;
const cloudUrl = import.meta.env.VITE_CLOUD_URL;
const useCloud = import.meta.env.VITE_USE_CLOUD === 'true'; 


export const API_BASE_URL = import.meta.env.PROD 
  ? cloudUrl 
  : (useCloud ? cloudUrl : localUrl);

console.log(`🔌 API Connected to: ${useCloud ? 'CLOUD' : 'LOCAL'}`);