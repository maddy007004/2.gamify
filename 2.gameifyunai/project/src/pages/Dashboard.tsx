import { motion } from 'framer-motion';
import { Book } from 'lucide-react';
import { DashboardHeader } from '../components/dashboard/Header';
import { FeaturedGames } from '../components/dashboard/FeaturedGames';
import { Leaderboard } from '../components/dashboard/Leaderboard';
import { QuickGames } from '../components/dashboard/QuickGames';
import { Button } from '../components/ui/Button';
import { useStore } from '../store/useStore';
import { Link } from 'react-router-dom';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const Dashboard = () => {
  const user = useStore((state) => state.user);

  if (!user) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="animate-float"
        >
          <Book className="h-16 w-16 text-blue-500" />
        </motion.div>
        <h2 className="mt-6 text-3xl font-bold text-white">Start Your Gaming Journey</h2>
        <p className="mt-2 text-gray-400">Sign in to track your progress and compete with others</p>
        <div className="mt-8 flex space-x-4">
          <Link to="/login">
            <Button className="glow">Sign In</Button>
          </Link>
          <Link to="/signup">
            <Button variant="secondary" className="glow">Create Account</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={container}
      className="space-y-8 py-6"
    >
      <motion.div variants={item}>
        <DashboardHeader />
      </motion.div>

      <motion.div variants={item}>
        <FeaturedGames />
      </motion.div>

      <motion.div variants={item}>
        <Leaderboard />
      </motion.div>

      <motion.div variants={item}>
        <QuickGames />
      </motion.div>
    </motion.div>
  );
};