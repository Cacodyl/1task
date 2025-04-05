import { create } from "zustand";

interface ImageCarousel {}

interface Item {
  name: string | null;

  description: string | null;

  price: number | null;

  image_urls: any;

  image_url_display: any;

  category: string | null;

  id: number;
}

interface ItemStore {
  items: Item[];
  favourites: Item[];
  itemsdisplayproductpage: Item[];
  itemsdisplayitempage: Item[];
  setItem: (itemsreceived: Item[]) => void;
  setItemprodpage: (itemsreceived: Item[]) => void;
  setItemitempage: (itemsreceived: Item[]) => void;
  addfavourite: (favour: Item) => void;
  removefavourite: (ezpz: string | null) => void;
}
const useItemStore = create<ItemStore>((set) => ({
  items: [],
  itemsdisplayproductpage: [],
  itemsdisplayitempage: [],
  name: null,
  description: null,
  price: null,
  favourites: [],
  setItem: (itemsreceived) => set({ items: itemsreceived }),
  setItemprodpage: (itemsreceived) =>
    set({ itemsdisplayproductpage: itemsreceived }),
  setItemitempage: (itemsreceived) =>
    set({ itemsdisplayitempage: itemsreceived }),
  addfavourite: (favour) =>
    set((state) => ({ favourites: [...state.favourites, favour] })),
  removefavourite: (ezpz) =>
    set((state) => ({
      favourites: state.favourites.filter((item) => item.name !== ezpz),
    })),
}));
export default useItemStore;
