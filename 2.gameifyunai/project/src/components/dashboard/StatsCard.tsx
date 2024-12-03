import { motion } from 'framer-motion';
import { Trophy, Flame, Star } from 'lucide-react';
import { GlowingCard } from '../ui/GlowingCard';
import { ProgressRing } from '../ui/ProgressRing';

interface StatsCardProps {
  points: number;
  streak: number;
  level: number;
  progress: number;
}

export const StatsCard = ({ points, streak, level, progress }: StatsCardProps) => {
  return (
    <GlowingCard className="flex flex-col space-y-6">
      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center space-y-2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-full bg-yellow-500/20 p-3"
          >
            <Trophy className="h-6 w-6 text-yellow-500" />
          </motion.div>
          <span className="text-sm text-gray-400">Points</span>
          <span className="text-xl font-bold text-white">{points}</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-full bg-red-500/20 p-3"
          >
            <Flame className="h-6 w-6 text-red-500" />
          </motion.div>
          <span className="text-sm text-gray-400">Streak</span>
          <span className="text-xl font-bold text-white">{streak} days</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="rounded-full bg-purple-500/20 p-3"
          >
            <Star className="h-6 w-6 text-purple-500" />
          </motion.div>
          <span className="text-sm text-gray-400">Level</span>
          <span className="text-xl font-bold text-white">{level}</span>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="relative">
          <ProgressRing progress={progress} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <span className="text-2xl font-bold text-white">{progress}%</span>
              <p className="text-xs text-gray-400">Level Progress</p>
            </div>
          </div>
        </div>
      </div>
    </GlowingCard>
  );
};