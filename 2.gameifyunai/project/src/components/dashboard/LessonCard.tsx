import { Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { GlowingCard } from '../ui/GlowingCard';
import { Button } from '../ui/Button';
import type { Lesson } from '../../types';

interface LessonCardProps {
  lesson: Lesson;
}

export const LessonCard = ({ lesson }: LessonCardProps) => {
  return (
    <GlowingCard className="flex flex-col justify-between space-y-4">
      <div>
        <motion.h3 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-lg font-semibold text-white"
        >
          {lesson.title}
        </motion.h3>
        <p className="mt-2 text-sm text-gray-400">{lesson.description}</p>
        
        <div className="mt-4 flex items-center space-x-4">
          <span className="flex items-center text-sm text-gray-400">
            <Clock className="mr-1 h-4 w-4" />
            {lesson.duration} min
          </span>
          <span className="flex items-center text-sm text-gray-400">
            {lesson.difficulty}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        {lesson.progress > 0 && (
          <div className="h-1 w-24 overflow-hidden rounded-full bg-gray-700">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${lesson.progress}%` }}
              className="h-full bg-blue-500"
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          </div>
        )}
        <Button size="sm" className="ml-auto">
          {lesson.progress > 0 ? 'Continue' : 'Start'}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </GlowingCard>
  );
};