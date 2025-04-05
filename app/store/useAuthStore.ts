import { create } from "zustand";
interface AuthStore {
  accessToken: string | null;
  refreshToken: string | null;
  setTokens: (access: string, refresh: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  accessToken: "",
  refreshToken: null,
  setTokens: (access, refresh) =>
    set({ accessToken: access, refreshToken: refresh }),
  logout: () => set({ accessToken: null, refreshToken: null }),
}));

export default useAuthStore;
