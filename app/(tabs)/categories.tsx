import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { useState } from "react";
import { useEffect } from "react";
import apiClient from "@/app/api/axiosInstance";
import Search from "@/Components/search";
import { CategoryCardBig } from "@/Components/cards";
import useAuthStore from "@/app/store/useAuthStore";
import useCatStore from "../store/useCatStore";

const Categories = () => {
  const handleCardPress = (catName: string) => {
    router.push({
      pathname: "/produce",
      params: { catName },
    });
  };

  const { list, setCategories } = useCatStore();

  const router = useRouter();

  return (
    <SafeAreaView className={"flex-1 bg-white"}>
      <View className="flex flex-row items-center pl-5 mt-5 pr-5">
        <View className="flex-1 items-center">
          <Text className="text-2xl font-poppins-bold mt-1 text-left">
            Categories
          </Text>
        </View>
      </View>
      <View className="flex flex-row justify-between items-center pl-5 mt-10 pr-10">
        <View>
          <Text className="text-xl font-poppins-bold mt-1">
            123 Alm Street, USA
          </Text>
          <Text className="text-gray-500 text-xl font-poppins">
            Welcome Back Alex
          </Text>
        </View>
        <View>
          <TouchableOpacity>
            <Image
              className="size-10"
              source={require("../../assets/icons/shopping-cart.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} className="mt-1 mb-2">
        <View className="flex flex-col gap-5 mt-5 px-5">
          {list.map((catName, index) => (
            <CategoryCardBig
              key={index}
              name={catName}
              onPress={() => handleCardPress(catName)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Categories;
