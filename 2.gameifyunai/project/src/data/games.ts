import type { Game, LeaderboardEntry, QuickGame } from '../types/games';

export const featuredGames: Game[] = [
  {
    id: '1',
    title: 'Python',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&q=80&w=800',
    players: '2.1M Active Developers'
  },
  {
    id: '2',
    title: 'JavaScript',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800',
    players: '1.8M Active Developers'
  },
  {
    id: '3',
    title: 'Java',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=800',
    players: '1.5M Active Developers'
  }
];

export const leaderboardData: LeaderboardEntry[] = [
  {
    id: '1',
    game: 'Python',
    score: 9500,
    icon: '🐍'
  },
  {
    id: '2',
    game: 'JavaScript',
    score: 8350,
    icon: '⚡'
  },
  {
    id: '3',
    game: 'Java',
    score: 7500,
    icon: '☕'
  }
];

export const quickGames: QuickGame[] = [
  {
    id: '1',
    title: 'Data Science',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
    color: 'from-blue-600'
  },
  {
    id: '2',
    title: 'Web Dev',
    image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800',
    color: 'from-yellow-600'
  },
  {
    id: '3',
    title: 'Machine Learning',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    color: 'from-green-600'
  },
  {
    id: '4',
    title: 'AI Development',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
    color: 'from-purple-600'
  },
  {
    id: '5',
    title: 'Cloud Computing',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
    color: 'from-blue-500'
  },
  {
    id: '6',
    title: 'DevOps',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=800',
    color: 'from-orange-500'
  }
];