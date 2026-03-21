import WelcomeHeader from './components/WelcomeHeader';
import StatsGrid from './components/StatsGrid';
import UpcomingInterviews from './components/UpcomingInterviews';
import AchievementBadges from './components/AchievementBadges';
import PerformanceAnalysis from './components/PerformanceAnalysis';
import RecentActivity from './components/RecentActivity';

const Dashboard = () => {
  return (
      <div className="max-w-7xl mx-auto">
        <WelcomeHeader />
        <StatsGrid />
        
        <div className="flex flex-col lg:flex-row gap-8">
            <UpcomingInterviews />
            <div className="w-full lg:w-[400px] shrink-0">
                <PerformanceAnalysis />
                <AchievementBadges />
                <RecentActivity />
            </div>
        </div>
      </div>
  );
};

export default Dashboard;
