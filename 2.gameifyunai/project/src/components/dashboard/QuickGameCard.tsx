import { motion } from 'framer-motion';
import type { QuickGame } from '../../types/games';

interface QuickGameCardProps {
  game: QuickGame;
}

export const QuickGameCard = ({ game }: QuickGameCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="cursor-pointer"
    >
      <div className={`group relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br ${game.color} to-black/50`}>
        <img
          src={game.image}
          alt={game.title}
          className="h-full w-full object-cover opacity-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <p className="text-sm font-medium text-white">{game.title}</p>
        </div>
      </div>
    </motion.div>
  );
};