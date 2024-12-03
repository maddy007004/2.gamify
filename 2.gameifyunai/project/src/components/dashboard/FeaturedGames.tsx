import { GameCard } from './GameCard';
import { featuredGames } from '../../data/games';

export const FeaturedGames = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {featuredGames.map((game) => (
        <GameCard
          key={game.id}
          game={game}
          variant={game.id === '1' ? 'primary' : game.id === '2' ? 'success' : 'secondary'}
        />
      ))}
    </div>
  );
};