import { LeaderboardCard } from './LeaderboardCard';
import { leaderboardData } from '../../data/games';

export const Leaderboard = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-semibold text-white">Leaderboard</h2>
          <span className="text-sm text-gray-400">/ Participation time</span>
        </div>
        <div className="flex items-center space-x-2">
          <button className="text-sm text-gray-400 hover:text-white">See All</button>
          <button className="rounded-full bg-white/10 p-2 text-white hover:bg-white/20">
            <span className="text-lg">+</span>
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4">
        {leaderboardData.map((entry) => (
          <LeaderboardCard key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
};