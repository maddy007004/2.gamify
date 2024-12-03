import { create } from 'zustand';
import type { User, Lesson } from '../types';

interface Store {
  user: User | null;
  lessons: Lesson[];
  setUser: (user: User | null) => void;
  addLesson: (lesson: Lesson) => void;
  updateUserProgress: (points: number) => void;
}

export const useStore = create<Store>((set) => ({
  user: null,
  lessons: [],
  setUser: (user) => set({ user }),
  addLesson: (lesson) => set((state) => ({ 
    lessons: [...state.lessons, lesson] 
  })),
  updateUserProgress: (points) => set((state) => ({
    user: state.user ? {
      ...state.user,
      points: state.user.points + points,
      level: Math.floor((state.user.points + points) / 100) + 1
    } : null
  }))
}));