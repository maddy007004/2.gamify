import { QuickGameCard } from './QuickGameCard';
import { quickGames } from '../../data/games';

export const QuickGames = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Learning Paths</h2>
        <button className="rounded-full bg-purple-600/20 px-6 py-1.5 text-sm font-medium text-purple-400 backdrop-blur-sm hover:bg-purple-600/30">
          Explore All
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
        {quickGames.map((game) => (
          <QuickGameCard key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
};