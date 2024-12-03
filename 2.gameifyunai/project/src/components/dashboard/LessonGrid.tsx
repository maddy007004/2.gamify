import { motion } from 'framer-motion';
import { LessonCard } from './LessonCard';
import type { Lesson } from '../../types';

interface LessonGridProps {
  lessons: Lesson[];
  title: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export const LessonGrid = ({ lessons, title }: LessonGridProps) => {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <motion.h2 variants={item} className="mb-4 text-2xl font-bold text-white">
        {title}
      </motion.h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {lessons.map((lesson) => (
          <motion.div key={lesson.id} variants={item}>
            <LessonCard lesson={lesson} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};