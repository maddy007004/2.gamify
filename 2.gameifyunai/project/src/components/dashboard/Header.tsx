import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useStore } from '../../store/useStore';
import { SearchBar } from './SearchBar';
import { UserAvatar } from './UserAvatar';

export const DashboardHeader = () => {
  const user = useStore((state) => state.user);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-between"
    >
      <div>
        <h1 className="text-3xl font-bold text-white">Welcome back, {user?.name || 'Guest'}! 👩‍💻</h1>
        <p className="mt-2 text-gray-400">Ready to code something amazing?</p>
      </div>
      <div className="flex items-center space-x-4">
        <SearchBar />
        <UserAvatar />
      </div>
    </motion.div>
  );
};