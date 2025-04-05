import React from "react";
import { View, Text, Image, ScrollView, Alert } from "react-native";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "expo-router";
import { useEffect } from "react";
import useItemStore from "@/app/store/useItemStore";
import useAuthStore from "@/app/store/useAuthStore";
import apiClient from "@/app/api/axiosInstance";
import { HomeCard } from "./cards";
import useCatStore from "@/app/store/useCatStore";
import ItemModal from "@/app/itemmodal";

interface itemlistprops {
  onItemPress: (Item: any) => void;
}

const ItemList = ({ onItemPress }: itemlistprops) => {
  const { accessToken } = useAuthStore();
  const router = useRouter();

  const getItemlist = async () => {
    if (accessToken) {
      try {
        console.log("Access Token:", accessToken);

        const response1 = await apiClient.get("/items", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const response2 = await apiClient.get("/items", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          params: {
            page: 2,
          },
        });

        const Arrayreceived1 = response1.data.data.items.map(
          ({ id, name, category, image_urls, price, description }: any) => ({
            id: id,
            name,
            category,
            image_urls,
            image_url_display: image_urls["0"],
            price,
            description,
          })
        );
        const Arrayreceived2 = response2.data.data.items.map(
          ({ id, name, category, image_urls, price, description }: any) => ({
            id: id,
            name,
            category,
            image_urls,
            image_url_display: image_urls["0"],
            price,
            description,
          })
        );

        const Arrayreceived = [...Arrayreceived1, ...Arrayreceived2];

        setItem(Arrayreceived);
        setItemprodpage(Arrayreceived);
        setItemitempage(Arrayreceived);
        console.log(items);
      } catch (err: any) {
        console.error("Error details:", err.message || err);
      }
    }
  };
  useEffect(() => {
    getItemlist();
  }, []);
  const {
    items,
    setItem,
    itemsdisplayproductpage,
    setItemprodpage,
    setItemitempage,
  } = useItemStore();
  const { selectedCategory } = useCatStore();

  const filtereditems =
    selectedCategory === "All"
      ? items
      : items.filter((Item) => Item.category === selectedCategory);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="py-7"
    >
      {filtereditems.map((Item, index) => (
        <HomeCard
          onPress={() => onItemPress(Item)}
          name={Item.name}
          category={Item.category}
          key={Item.id}
          itemId={Item.id}
          description={Item.description}
          image_url_display={Item.image_url_display}
          price={Item.price}
          index={index}
        />
      ))}
    </ScrollView>
  );
};
export default ItemList;
