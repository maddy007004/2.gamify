import { motion } from 'framer-motion';
import { Code } from 'lucide-react';
import { GlowingCard } from '../ui/GlowingCard';
import type { Game } from '../../types/games';

interface GameCardProps {
  game: Game;
  variant: 'primary' | 'secondary' | 'success';
}

export const GameCard = ({ game, variant }: GameCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative overflow-hidden rounded-xl"
    >
      <GlowingCard className="h-full p-0" variant={variant}>
        <div className="relative">
          <img
            src={game.image}
            alt={game.title}
            className="h-48 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-white">{game.title}</h3>
              <p className="text-sm text-gray-400">{game.players}</p>
            </div>
            <button className="flex items-center space-x-2 rounded-lg bg-blue-600/20 px-4 py-2 text-sm font-medium text-blue-400 backdrop-blur-sm hover:bg-blue-600/30">
              <span>Start Coding</span>
              <Code className="h-4 w-4" />
            </button>
          </div>
        </div>
      </GlowingCard>
    </motion.div>
  );
};