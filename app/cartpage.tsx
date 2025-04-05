import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

import { CartCard, CartCard2 } from "@/Components/cards";

import useCartStore from "./store/Cartfile";
import useItemStore from "./store/useItemStore";
import { useState, useEffect } from "react";
import useAuthStore from "./store/useAuthStore";
import apiClient from "./api/axiosInstance";
import axios from "axios";
import {
  fetchCartQuery,
  fetchBillQuery,
  fetchTotalitemsQuery,
  clearCart,
} from "./api/cartqueries";
const CartPage = () => {
  // const { cart, clearcart, settotalitems, setCart, settotalprice, totalprice } =
  //   useCartStore();
  // const { accessToken } = useAuthStore();

  // const handleclearcart = async () => {
  //   if (accessToken) {
  //     try {
  //       const response = await apiClient.delete("/cart/items", {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       });
  //       setCart(response.data.data.items);
  //       settotalitems(response.data.data.total_items);
  //       settotalprice(response.data.data.total_price);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   }
  // };
  const { data: cartitemslist } = fetchCartQuery();
  const { data: totalprice } = fetchBillQuery();
  const handleclearcart = () => {
    return clearCart;
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="items-center">
        <Text className="text-2xl font-poppins-bold items-center ">Cart</Text>
      </View>
      <View className="justify-between flex flex-row my-7 mx-5">
        <TouchableOpacity
          onPress={handleclearcart}
          className="border bg-gray-400 rounded-full"
        >
          <Text className="text-xl text-black font-poppins-semibold px-5 py-5">
            Clear Cart
          </Text>
        </TouchableOpacity>
        <Text className="my-4 text-xl text-black font-poppins-semibold">
          {"Bill Amount: $" + totalprice}
        </Text>
      </View>
      <ScrollView horizontal={false}>
        {cartitemslist?.map((cartitem: any) => (
          <CartCard2
            key={cartitem.id}
            name={cartitem.item_name}
            itemquantity={cartitem.quantity}
            priceofone={cartitem.item_price}
            pricetotal={cartitem.total_price}
            imagelink={cartitem.image_urls["0"]}
            itemid={cartitem.id}
            plainid={cartitem.item_id}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
export default CartPage;
