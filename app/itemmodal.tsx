import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

import { Link, useRouter } from "expo-router";
import { CartCard } from "@/Components/cards";
import apiClient from "../api/axiosInstance";
import useCartStore from "./store/Cartfile";
import useItemStore from "./store/useItemStore";
import { useState, useEffect } from "react";
import useAuthStore from "./store/useAuthStore";
import axios from "axios";
import Modal from "react-native-modal";
import { useAddToCart, useFetchCartQuery } from "../api/cartqueries";
import Carousel from "react-native-reanimated-carousel";

interface modalprops {
  Item: any | null;
  visible: boolean;
  onClose: () => void;
}

const ItemModal = ({ Item, visible, onClose }: modalprops) => {
  const { accessToken } = useAuthStore();
  const { cart, setCart, totalitems, settotalitems, settotalprice } =
    useCartStore();
  const { favourites, addfavourite } = useItemStore();

  const { data: tobesetascart } = useFetchCartQuery();
  useEffect(() => {
    if (tobesetascart) {
      setCart(tobesetascart);
    }
  }, [tobesetascart]);

  const isAdded = cart
    ? cart.some((cartItem: any) => cartItem.item_name === Item.name)
    : false;
  const isFav = favourites?.some((favitem) => favitem.id === Item.id);

  const Addtofav = () => {
    addfavourite(Item);
    console.log(favourites);
  };
  const { mutate: insideAddtocart } = useAddToCart();

  const AddToCartfr = () => {
    insideAddtocart(Item.id);
  };

  // const AddtoCart = async () => {
  //   try {
  //     const response = await apiClient.post(
  //       "/cart/items",
  //       {
  //         item_id: Item.id,
  //         quantity: 1,
  //       },

  //       {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       }
  //     );
  //     settotalprice(response.data.data.total_price);
  //     setCart(response.data.data.items);
  //     settotalitems(response.data.data.total_items);
  //   } catch (error: any) {
  //     console.error("Errro is: ", error.message || error);
  //   }
  // };

  if (!Item) return null;

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      animationIn={"slideInUp"}
      animationOut={"slideOutDown"}
      backdropOpacity={0.5}
    >
      <SafeAreaView className="h-3/4 rounded-2xl overflow-hidden">
        <View className="h-2/5 text-xl w-[354px]">
          <Carousel
            width={354}
            loop
            autoPlay={false}
            snapEnabled={true}
            data={Item.image_urls}
            scrollAnimationDuration={500}
            renderItem={({ item }) => (
              <Image
                source={
                  item ? { uri: item } : require("../assets/icons/marker.png")
                }
                className="w-full h-full"
              />
            )}
          />
        </View>
        <View className="h-2/5  bg-white border-0.5 border-gray-200 w-[354px]">
          <View className="flex flex-col justify-start">
            <Text
              className="text-4xl font-poppins text-primary-100 px-3 my-3"
              numberOfLines={1}
            >
              {Item.name}
            </Text>
            <Text className="text-2xl font-poppins-semibold text-gray-500 px-3">
              {Item.description}
            </Text>
          </View>
          <Text className="text-sm font-poppins text-gray-500 px-3 pt-2 my-5">
            description description description description description
            description description description description description
            description description description description description
            description
          </Text>
          <Text
            className="text-4xl font-poppins text-primary-100 px-3 pt-4"
            numberOfLines={1}
          >
            {"Price: $" + Item.price}
          </Text>
        </View>
        <View className="h-1/5 bg-white border-0.5 border-gray-200 w-[354px]">
          <View className="flex flex-row mt-7">
            <TouchableOpacity
              onPress={AddToCartfr}
              disabled={isAdded}
              className={`flex flex-col items-start ml-4 px-8 py-2 rounded-2xl 
                ${isAdded ? "bg-gray-500" : "bg-primary-100"}`}
            >
              <Text
                className={`pt-2 text-sm ${
                  isAdded
                    ? "text-black font-poppins-semibold"
                    : "text-white font-poppins-semibold"
                }`}
              >
                {isAdded ? "Item in Cart" : "Add to Cart"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={Addtofav}
              disabled={isFav}
              className={`flex flex-col items-start ml-4 px-8 py-2 rounded-2xl 
                ${isFav ? "bg-gray-500" : "bg-rose-500"}`}
            >
              <Text
                className={`pt-2 text-sm ${
                  isFav
                    ? "text-black font-poppins-semibold"
                    : "text-white font-poppins-semibold"
                }`}
              >
                {isFav ? "Item in favourites" : "Add to favourites"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ItemModal;
