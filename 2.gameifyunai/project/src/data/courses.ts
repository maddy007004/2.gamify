import type { Course, LeaderboardEntry, QuickCourse } from '../types/courses';

export const featuredCourses: Course[] = [
  {
    id: '1',
    title: 'Python Fundamentals',
    image: '/images/courses/python.jpg',
    students: '15.2k Students',
    level: 'Beginner',
    duration: '12 weeks'
  },
  {
    id: '2',
    title: 'Web Development',
    image: '/images/courses/web-dev.jpg',
    students: '12.8k Students',
    level: 'Intermediate',
    duration: '16 weeks'
  },
  {
    id: '3',
    title: 'Java Masterclass',
    image: '/images/courses/java.jpg',
    students: '10.5k Students',
    level: 'Advanced',
    duration: '14 weeks'
  }
];

export const leaderboardData: LeaderboardEntry[] = [
  {
    id: '1',
    course: 'Python',
    points: 5500,
    icon: '🐍'
  },
  {
    id: '2',
    course: 'Web Dev',
    points: 3350,
    icon: '🌐'
  },
  {
    id: '3',
    course: 'Java',
    points: 2500,
    icon: '☕'
  }
];

export const quickCourses: QuickCourse[] = [
  {
    id: '1',
    title: 'Data Science',
    image: '/images/courses/data-science.jpg',
    color: 'from-purple-600',
    icon: '📊'
  },
  {
    id: '2',
    title: 'React.js',
    image: '/images/courses/react.jpg',
    color: 'from-blue-600',
    icon: '⚛️'
  },
  {
    id: '3',
    title: 'Node.js',
    image: '/images/courses/node.jpg',
    color: 'from-green-600',
    icon: '🚀'
  },
  {
    id: '4',
    title: 'TypeScript',
    image: '/images/courses/typescript.jpg',
    color: 'from-blue-500',
    icon: '📘'
  },
  {
    id: '5',
    title: 'AI & ML',
    image: '/images/courses/ai-ml.jpg',
    color: 'from-purple-500',
    icon: '🤖'
  },
  {
    id: '6',
    title: 'DevOps',
    image: '/images/courses/devops.jpg',
    color: 'from-orange-500',
    icon: '⚙️'
  }
];