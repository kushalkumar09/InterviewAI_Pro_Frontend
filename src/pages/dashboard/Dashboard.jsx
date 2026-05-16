import { useEffect, useState } from 'react';
import { api } from '../../config/api/api';
import WelcomeHeader from './components/WelcomeHeader';
import StatsGrid from './components/StatsGrid';
import UpcomingInterviews from './components/UpcomingInterviews';
import AchievementBadges from './components/AchievementBadges';
import PerformanceAnalysis from './components/PerformanceAnalysis';
import RecentActivity from './components/RecentActivity';

const Dashboard = () => {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    api.get('/dashboard')
      .then(({ data }) => setDashboard(data))
      .catch(() => setDashboard(null));
  }, []);

  return (
      <div className="max-w-7xl mx-auto">
        <WelcomeHeader user={dashboard?.user} />
        <StatsGrid stats={dashboard?.stats} />
        
        <div className="flex flex-col lg:flex-row gap-8">
            <UpcomingInterviews interviews={dashboard?.upcoming || []} />
            <div className="w-full lg:w-[400px] shrink-0">
                <PerformanceAnalysis stats={dashboard?.stats} />
                <AchievementBadges />
                <RecentActivity />
            </div>
        </div>
      </div>
  );
};

export default Dashboard;
