import apiClient from "./axiosInstance";
import useAuthStore from "../store/useAuthStore";

export const fetchCart = async () => {
  const { accessToken } = useAuthStore();

  if (accessToken) {
    const response = await apiClient.get("/cart", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data.data.items;
  }
};

export const fetchTotalItems = async () => {
  const { accessToken } = useAuthStore();
  if (accessToken) {
    const response = await apiClient.get("/cart", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data.data.total_items;
  }
};

export const fetchBill = async () => {
  const { accessToken } = useAuthStore();
  if (accessToken) {
    const response = await apiClient.get("/cart", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data.data.total_price;
  }
};
