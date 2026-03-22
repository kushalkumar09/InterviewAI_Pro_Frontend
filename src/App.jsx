import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import InterviewSetup from './pages/interviewSetup/components/InterviewSetup';
import NotFound from './pages/pageNotFound/PageNotFound';
import Login from './pages/authentication/Login';
import Signup from './pages/authentication/Signup';
import ProtectedRoute from './components/common/ProtectedRoutes';
import MainLayout from './components/layout/MainLayout';
import InterviewReport from './pages/report/Report';
import ReportsList from './pages/report/ReportHistory';

function App() {
  return (
    <Router>
  <Routes>
    {/* --- PUBLIC ROUTES (No Auth, No Layout) --- */}
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    
    {/* --- PROTECTED ROUTES (Require Login) --- */}
    <Route element={<ProtectedRoute />}>
      
      {/* CASE 1: Protected pages WITH Sidebar/Header */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/create-interview" element={<InterviewSetup />} />
        <Route path="/reports" element={<ReportsList />} />
        <Route path="/reports/:id" element={<InterviewReport />} />
      </Route>

      {/* CASE 2: Protected pages WITHOUT Sidebar/Header */}
      {/* Example: A full-screen Live Interview Room or a Video Call */}
      {/* <Route path="/live-interview/:id" element={<LiveInterviewRoom />} /> */}
      {/* <Route path="/settings/security" element={<DeepSecuritySettings />} /> */}

    </Route>

    {/* --- 404 --- */}
    <Route path="*" element={<NotFound />} />
  </Routes>
</Router>
  );
}

export default App;
