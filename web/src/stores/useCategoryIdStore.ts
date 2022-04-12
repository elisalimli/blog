import { combine } from 'zustand/middleware';
import create from 'zustand';

export const useCategoryIdStore = create(
  combine({ categoryId: '' }, (set) => ({
    setCategoryId: (categoryId: string) => set(() => ({ categoryId })),
  }))
);
