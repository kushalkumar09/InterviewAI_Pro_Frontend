import Sidebar from './Sidebar';
import Header from '../common/Header';
import { Outlet, useLocation } from 'react-router-dom';

const MainLayout = () => {
  const location = useLocation();
  const isDashboard = location.pathname === '/';

  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64 min-w-0">
        {!isDashboard && <Header />}
        <main className="flex-1 overflow-y-auto p-8">
          <Outlet /> {/* This will render the child routes defined in App.jsx, such as Dashboard, History, etc. */}
        </main>

      </div>
    </div>
  );
};

export default MainLayout;