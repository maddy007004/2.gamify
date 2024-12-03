import { motion } from 'framer-motion';
import { quickCourses } from '../../data/courses';

export const QuickAccess = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Quick Access</h2>
        <button className="rounded-full bg-purple-600/20 px-6 py-1.5 text-sm font-medium text-purple-400 backdrop-blur-sm hover:bg-purple-600/30">
          View All
        </button>
      </div>

      <div className="grid grid-cols-3 gap-4 sm:grid-cols-6">
        {quickCourses.map((course) => (
          <motion.div
            key={course.id}
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
          >
            <div className={`group relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br ${course.color} to-black/50`}>
              <div className="absolute inset-0 flex items-center justify-center text-4xl">
                {course.icon}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-sm font-medium text-white">{course.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};