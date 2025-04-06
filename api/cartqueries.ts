import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import apiClient from "./axiosInstance";
import useAuthStore from "@/app/store/useAuthStore";

export const useFetchCartQuery = () => {
  const { accessToken } = useAuthStore();

  return useQuery({
    queryKey: ["cart"],
    queryFn: async () => {
      const response = await apiClient.get("/cart", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data.data.items || [];
    },
    enabled: !!accessToken,
  });
};
export const useFetchTotitQuery = () => {
  const { accessToken } = useAuthStore();
  return useQuery({
    queryKey: ["cartitems"],
    queryFn: async () => {
      const response = await apiClient.get("/cart", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data.data.total_items || 0;
    },
  });
};
export const useFetchBillQuery = () => {
  const { accessToken } = useAuthStore();
  return useQuery({
    queryKey: ["cartbill"],
    queryFn: async () => {
      const response = await apiClient.get("/cart", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data.data.total_price || 0;
    },
  });
};
export const useAddToCart = () => {
  const { accessToken } = useAuthStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (itemid: number | null) => {
      const response = await apiClient.post(
        "/cart/items",
        {
          item_id: itemid,
          quantity: 1,
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
      queryClient.invalidateQueries({ queryKey: ["cartitems"] });
      queryClient.invalidateQueries({ queryKey: ["cartbill"] });
    },
  });
};
export const usePlusQuantity = () => {
  const { accessToken } = useAuthStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      item_id,
      quant,
    }: {
      item_id: number;
      quant: number;
    }) => {
      const response = await apiClient.put(
        `/cart/items/${item_id}`,
        { quantity: quant ? quant + 1 : quant },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      queryClient.invalidateQueries({ queryKey: ["cartitems"] });
      queryClient.invalidateQueries({ queryKey: ["cartbill"] });
    },
  });
};
export const useDeleteCartItem = () => {
  const { accessToken } = useAuthStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (item_id: number) => {
      const response = await apiClient.delete(`/cart/items/${item_id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      queryClient.invalidateQueries({ queryKey: ["cartitems"] });
      queryClient.invalidateQueries({ queryKey: ["cartbill"] });
    },
  });
};
export const useClearCart = () => {
  const { accessToken } = useAuthStore();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await apiClient.delete(`/cart/items`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      queryClient.invalidateQueries({ queryKey: ["cartitems"] });
      queryClient.invalidateQueries({ queryKey: ["cartbill"] });
    },
  });
};
