export interface User {
  id: string;
  name: string;
  email: string;
  streak: number;
  points: number;
  level: number;
  badges: Badge[];
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  duration: number;
  points: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  completed: boolean;
}