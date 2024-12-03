import { motion } from 'framer-motion';
import { Trophy, Users } from 'lucide-react';
import { leaderboardData } from '../../data/courses';

export const Leaderboard = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-semibold text-white">Top Performers</h2>
          <span className="text-sm text-gray-400">/ This Week</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-sm text-gray-400 hover:text-white">View All</button>
          <button className="rounded-full bg-purple-500/20 p-2 text-purple-300 hover:bg-purple-500/30">
            <Trophy className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        {leaderboardData.map((entry) => (
          <motion.div
            key={entry.id}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-xl bg-white/5 p-6 backdrop-blur-sm"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                  <span className="text-2xl">{entry.icon}</span>
                </div>
                <div>
                  <p className="text-sm text-gray-400">{entry.course}</p>
                  <span className="text-lg font-bold text-white">{entry.points} pts</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};