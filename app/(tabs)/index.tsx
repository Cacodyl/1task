import { useState, useEffect } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { HomeCard, FavouriteCard, CategoryCard } from "@/Components/cards";
import Filters from "@/Components/filters";

import { fetchCartQuery, fetchBillQuery, fetchTotalitemsQuery } from "../api/cartqueries";


import ItemList from "@/Components/itemstock";
import ItemModal from "../itemmodal";
import useAuthStore from "../store/useAuthStore";
import axios from "axios";
import useCartStore from "../store/Cartfile";
import apiClient from "../api/axiosInstance";
import useProfileStore from "../store/useProfileStore";

export default function Index() {
  const { username, setProfile } = useProfileStore();
  const { accessToken } = useAuthStore();
  // const { cart, setCart, settotalprice, settotalitems, totalitems } =
  //   useCartStore();

  // const [loading, setLoading] = useState(true);

  // const fetchCart = async () => {
  //   if (accessToken) {
  //     try {
  //       const response = await apiClient.get("/cart", {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       });
  //       settotalprice(response.data.data.total_price);
  //       setCart(response.data.data.items);
  //       settotalitems(response.data.data.total_items);
  //     } catch (error) {
  //       console.error("Error fetching cart:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  // };
  // useEffect(() => {
  //   fetchCart();
  // }, [totalitems]);
  const{data: cartitemslist} = fetchCartQuery();
  const {data: totalitems} = fetchTotalitemsQuery();


  const router = useRouter();

  const handleCartPress = () => {
    router.push("/cartpage");
  };

  const [selectedItem, setselectedItem] = useState({} as any);
  const [ismodalvisible, setIsmodalvisible] = useState(false);

  const openModal = (Item: any) => {
    setselectedItem(Item);
    setIsmodalvisible(true);
  };

  const getProfile = async () => {
    if (accessToken) {
      try {
        const response = await apiClient.get("/profile", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        setProfile(
          response.data.data.name,
          response.data.data.id,
          response.data.data.cart_id
        );
      } catch (err: any) {
        console.error(err);
      }
    }
  };
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <SafeAreaView className={"flex-1 bg-white"}>
      <View className="flex flex-row justify-between items-center pl-5 mt-0 pr-10">
        <View>
          <Text className="text-xl font-poppins-bold mt-1">
            123 Alm Street, USA
          </Text>
          <Text className="text-gray-500 text-xl font-poppins">
            {"Welcome back, " + username}
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={handleCartPress}>
            <Image
              className="size-10"
              source={require("../../assets/icons/shopping-cart.png")}
            />
            {totalitems > 0 ? (
              <View className="absolute -top-1 -right-1 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
                <Text className="text-white text-xs font-poppins-semibold">
                  {totalitems}
                </Text>
              </View>
            ) : null}
          </TouchableOpacity>
        </View>
      </View>

      <View className="px-5 py-6 mt-0">
        <Text className="text-4xl text-black-100 font-poppins">
          Get Healthy
        </Text>
        <Text className="text-primary-100 font-poppins text-3xl mt-2">
          is the Best Investment!
        </Text>
      </View>
      <View className="flex flex-row justify-between items-center px-4 mt-0">
        <Text className="font-poppins text-2xl font-bold">Recommendations</Text>
        <TouchableOpacity>
          <Text className="font-poppins text-primary-100">View all</Text>
        </TouchableOpacity>
      </View>
      <View className="pl-5 my-3">
        <Filters />
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-4 mb-2"
      >
        <View className="pl-5 mb-0">
          <ItemList onItemPress={openModal} />
        </View>
      </ScrollView>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-1 mb-2"
      >
        <View className=" flex flex-row gap-5 px-5">
          <CategoryCard />
          <CategoryCard />
        </View>
      </ScrollView>
      <ItemModal
        Item={selectedItem}
        visible={ismodalvisible}
        onClose={() => setIsmodalvisible(false)}
      />
    </SafeAreaView>
  );
}
