import { create } from 'zustand';

interface Course {
  id: number;
  name: string;
  referrerBonus: number;
  refereeBonus: number;
}

interface CourseStore {
  courses: Course[];
  setCourses: (courses: Course[]) => void;
}

export const useCourseStore = create<CourseStore>((set) => ({
  courses: [],
  setCourses: (courses) => set({ courses }),
}));
