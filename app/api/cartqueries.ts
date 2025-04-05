import useAuthStore from "../store/useAuthStore";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchCart, fetchBill, fetchTotalItems } from "./cartfetching";
import apiClient from "./axiosInstance";

export const fetchCartQuery = () => {
  console.log("tried to fetch cart");
  return useQuery({
    queryKey: ["cart"],
    queryFn: () => fetchCart(),
  });
};
export const fetchTotalitemsQuery = () => {
  return useQuery({
    queryKey: ["totalItems"],
    queryFn: () => fetchTotalItems(),
  });
};
export const fetchBillQuery = () => {
  return useQuery({
    queryKey: ["bill"],
    queryFn: () => fetchBill(),
  });
};

export const addToCart = () => {
  const queryClient = useQueryClient();

  const { accessToken } = useAuthStore();

  return useMutation({
    mutationFn: async (id: number) => {
      const response = await apiClient.post(
        "/cart/items",
        {
          item_id: id,
          quantity: 1,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      console.log("added an item");
    },
  });
};

export const plusQuantity = () => {
  const queryClient = useQueryClient();
  const { accessToken } = useAuthStore();
  return useMutation({
    mutationFn: async ({
      itemid,
      quant,
    }: {
      itemid: number;
      quant: number;
    }) => {
      const response = await apiClient.put(
        "cart/items/" + itemid,
        {
          quantity: quant ? quant + 1 : 1,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};

export const deleteItem = () => {
  const queryClient = useQueryClient();
  const { accessToken } = useAuthStore();
  return useMutation({
    mutationFn: async (itemid: number) => {
      const response = await apiClient.delete("/cart/items/" + itemid, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};

export const clearCart = () => {
  const queryClient = useQueryClient();
  const { accessToken } = useAuthStore();
  return useMutation({
    mutationFn: async () => {
      const response = await apiClient.delete("/cart/items", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
