export interface Game {
  id: string;
  title: string;
  image: string;
  players: string;
}

export interface LeaderboardEntry {
  id: string;
  game: string;
  score: number;
  icon: string;
}

export interface QuickGame {
  id: string;
  title: string;
  image: string;
  color: string;
}