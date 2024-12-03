export interface Course {
  id: string;
  title: string;
  image: string;
  students: string;
  level: string;
  duration: string;
}

export interface LeaderboardEntry {
  id: string;
  course: string;
  points: number;
  icon: string;
}

export interface QuickCourse {
  id: string;
  title: string;
  image: string;
  color: string;
  icon: string;
}

export interface CourseProgress {
  courseId: string;
  progress: number;
  lastAccessed: Date;
}