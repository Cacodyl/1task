import { create } from "zustand";
interface ProfileStore {
  username: any;

  userid: any;

  cartId: any;
  setProfile: (username: any, number1: any, number2: any) => void;
}
const useProfileStore = create<ProfileStore>((set) => ({
  username: null,

  userid: null,
  cartId: null,

  setProfile: (username: any, number1: any, number2: any) =>
    set({
      username: username,
      userid: number1,
      cartId: number2,
    }),
}));
export default useProfileStore;
