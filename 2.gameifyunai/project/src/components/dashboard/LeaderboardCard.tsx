import { motion } from 'framer-motion';
import type { LeaderboardEntry } from '../../types/games';

interface LeaderboardCardProps {
  entry: LeaderboardEntry;
}

export const LeaderboardCard = ({ entry }: LeaderboardCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative overflow-hidden rounded-xl bg-white/5 p-6 backdrop-blur-sm"
    >
      <div className="flex items-center justify-between">
        <div className="h-12 w-12 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 p-3">
          <span className="text-2xl">{entry.icon}</span>
        </div>
        <div className="text-right">
          <span className="text-lg font-bold text-white">${entry.score}</span>
          <p className="text-sm text-gray-400">{entry.game}</p>
        </div>
      </div>
    </motion.div>
  );
};