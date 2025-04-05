import { create } from "zustand";
interface CartObject {
  id: number | null;
  item_id: number | null;
  item_name: string | null;
  item_price: number | null;
  category: string | null;
  quantity: number | null;
  total_price: number | null;
  image_urls: string[];
}

interface CartStore {
  cart: CartObject[];
  totalitems: number;
  clearcart: () => void;
  cartTotal: number | null;
  totalprice: number;
  setCart: (arr: CartObject[]) => void;
  settotalprice: (tprice: number) => void;
  settotalitems: (titmes: number) => void;
}

const useCartStore = create<CartStore>((set) => ({
  cart: [],
  totalitems: 0,
  clearcart: () => set({ cart: [] }),
  cartTotal: null,
  setCart: (arr) => set({ cart: arr }),
  totalprice: 0,
  settotalprice: (tprice) => set({ totalprice: tprice }),
  settotalitems: (titems) => set({ totalitems: titems }),
}));
export default useCartStore;
