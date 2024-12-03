import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Home, Trophy, Zap, Book, Users, Settings } from 'lucide-react';
import { clsx } from 'clsx';

const menuItems = [
  { icon: Home, label: 'Dashboard', path: '/' },
  { icon: Trophy, label: 'Leaderboard', path: '/leaderboard' },
  { icon: Zap, label: 'Quick Games', path: '/games' },
  { icon: Book, label: 'Lessons', path: '/lessons' },
  { icon: Users, label: 'Community', path: '/community' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <nav className="fixed left-0 top-0 h-screen w-64 bg-gray-900/50 backdrop-blur-xl">
      <div className="flex h-full flex-col px-4 py-8">
        <div className="mb-8 flex items-center px-2">
          <Zap className="h-8 w-8 text-blue-500" />
          <span className="ml-2 text-xl font-bold text-white">LearnQuest</span>
        </div>

        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link key={item.path} to={item.path}>
                <motion.div
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={clsx(
                    'flex items-center space-x-3 rounded-lg px-3 py-2 transition-colors',
                    isActive
                      ? 'bg-blue-500/20 text-blue-500'
                      : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="active-indicator"
                      className="absolute left-0 h-full w-1 rounded-r-full bg-blue-500"
                    />
                  )}
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};