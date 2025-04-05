import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import React from "react";
import Search from "@/Components/search";
import { Link, useRouter, useLocalSearchParams } from "expo-router";
import useItemStore from "./store/useItemStore";
import ItemList from "@/Components/itemstock";
import { useState } from "react";
import useCartStore from "./store/Cartfile";
import apiClient from "./api/axiosInstance";
import useAuthStore from "./store/useAuthStore";
import { CategoryCard, SmallCard } from "@/Components/cards";

const Produce = () => {
  const { accessToken } = useAuthStore();

  const { catName } = useLocalSearchParams();
  const { itemsdisplayproductpage } = useItemStore();
  const { cart, setCart, settotalitems, settotalprice } = useCartStore();

  const ItemstoDisplayArray = itemsdisplayproductpage.filter(
    (item) => item.category === catName
  );
  const [search, setSearch] = useState("");
  const handleSearch = (text: string) => {
    setSearch(text);
  };

  const FinalDisplay = ItemstoDisplayArray.filter((item) =>
    item.name?.toLowerCase().includes(search.toLowerCase() || "")
  );

  return (
    <SafeAreaView className={"flex-1 bg-white"}>
      <ScrollView showsVerticalScrollIndicator={false} className="mt-1 mb-2">
        <View className="flex flex-row items-center pl-5 mt-5 pr-10">
          <View className="mt-2">
            <TouchableOpacity>
              <Image
                className="size-8"
                source={require("../assets/icons/arrow-left.png")}
              />
            </TouchableOpacity>
          </View>
          <View className="flex-1 items-center">
            <Text className="text-2xl font-poppins-bold mt-1 text-left">
              Product
            </Text>
          </View>
        </View>
        <View className="px-6">
          <View className="flex flex-row  items-center justify-between w-full px-4 rounded-full bg-accent-100 border border-primary-200 mt-5 py-2">
            <View className="flex-1 flex flex-row items-center justify-start z-50">
              <Image
                source={require("../assets/icons/searchicon.png")}
                className="size-5"
              />
              <TextInput
                value={search}
                onChangeText={handleSearch}
                placeholder="Search for anything"
                className="text-sm font-rubik text-black-300 ml-2 flex-1"
              />
            </View>

            <TouchableOpacity>
              <Image
                source={require("../assets/icons/Type=More, State=Default, Direction=Default.jpg")}
                className="size-5"
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-5 mb-0"
        >
          <View className=" flex flex-row gap-5 px-4 mb-2 pb-0 ">
            <CategoryCard />
            <CategoryCard />
          </View>
        </ScrollView>

        <View className="flex flex-row justify-between items-center px-4 mt-0">
          <Text className="font-poppins-bold text-2xl font-bold">
            {catName + " Products"}
          </Text>
          <TouchableOpacity>
            <Text className="font-poppins-semibold text-primary-100">
              View all
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-1 mb-0"
        >
          <View className=" flex flex-row gap-8 mt-3 px-4">
            {FinalDisplay.map((Item) => (
              <SmallCard
                onPress={async () => {
                  try {
                    const response = await apiClient.post(
                      "/cart/items",
                      {
                        item_id: Item.id,
                        quantity: 1,
                      },

                      {
                        headers: {
                          Authorization: `Bearer ${accessToken}`,
                        },
                      }
                    );
                    settotalprice(response.data.data.total_price);
                    setCart(response.data.data.items);
                    settotalitems(response.data.data.total_items);
                  } catch (error: any) {
                    console.error("Errro is: ", error.message || error);
                  }
                }}
                key={Item.id}
                name={Item.name}
                price={Item.price}
                description={Item.description}
                image_urls={Item.image_urls["0"]}
              />
            ))}
          </View>
        </ScrollView>

        <View className="flex flex-row justify-between items-center px-4 mt-3">
          <Text className="font-poppins-bold text-2xl font-bold">
            All Products
          </Text>
          <TouchableOpacity>
            <Text className="font-poppins-semibold text-primary-100">
              View all
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="mt-1 mb-2"
        >
          <View className=" flex flex-row gap-8 mt-3 px-4">
            <ItemList onItemPress={() => {}} />
          </View>
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Produce;
