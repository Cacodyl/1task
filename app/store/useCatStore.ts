import { create } from "zustand";

interface CategoryList {
  list: string[];
  setCategories: (data: string[]) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}
const useCatStore = create<CategoryList>((set) => ({
  selectedCategory: "All",
  list: [],
  setCategories: (data) => set({ list: data }),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
}));
export default useCatStore;
