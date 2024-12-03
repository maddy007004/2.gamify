import { motion } from 'framer-motion';
import { Play, Clock, Users } from 'lucide-react';
import { GlowingCard } from '../ui/GlowingCard';
import { featuredCourses } from '../../data/courses';

export const FeaturedCourses = () => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {featuredCourses.map((course) => (
        <motion.div
          key={course.id}
          whileHover={{ scale: 1.02 }}
          className="relative overflow-hidden rounded-xl"
        >
          <GlowingCard className="h-full p-0" variant={course.id === '1' ? 'primary' : course.id === '2' ? 'success' : 'secondary'}>
            <div className="relative">
              <img
                src={course.image}
                alt={course.title}
                className="h-48 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-4">
              <div className="flex flex-col space-y-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">{course.title}</h3>
                  <div className="mt-1 flex items-center space-x-3 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Users className="mr-1 h-4 w-4" />
                      {course.students}
                    </span>
                    <span className="flex items-center">
                      <Clock className="mr-1 h-4 w-4" />
                      {course.duration}
                    </span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-purple-500/20 px-3 py-1 text-sm text-purple-300">
                    {course.level}
                  </span>
                  <button className="flex items-center space-x-2 rounded-lg bg-blue-600/20 px-4 py-2 text-sm font-medium text-blue-400 backdrop-blur-sm hover:bg-blue-600/30">
                    <span>Start Learning</span>
                    <Play className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </GlowingCard>
        </motion.div>
      ))}
    </div>
  );
};