import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Text, ScrollView, TouchableOpacity } from "react-native";

import useCatStore from "@/app/store/useCatStore";
import useAuthStore from "@/app/store/useAuthStore";
import { useEffect } from "react";
import apiClient from "@/api/axiosInstance";

const Filters = () => {
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(true);
  const { accessToken } = useAuthStore();
  const { list, selectedCategory, setSelectedCategory, setCategories } =
    useCatStore();

  useEffect(() => {
    const getCats = async () => {
      if (accessToken) {
        try {
          const response = await apiClient.get("/categories", {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          });
          if (response.data.success) {
            setCategories(response.data.data);
          } else {
            setError("Failed loading categories");
          }
        } catch (err) {
          setError("Error");
        } finally {
          setLoading(false);
        }
      }
    };
    getCats();
  }, []);

  if (error) {
    return (
      <Text className="text-5xl font-poppins-bold text-center"> {error} </Text>
    );
  }

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category === selectedCategory ? "All" : category);
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-1 mb-2"
    >
      <TouchableOpacity
        onPress={() => handleCategoryPress("All")}
        className={`flex flex-col items-start mr-4 px-8 py-2 rounded-2xl ${
          selectedCategory === "All"
            ? "bg-primary-100"
            : "bg-white border border-black-100"
        }`}
      >
        <Text
          className={`text-sm ${
            selectedCategory === "All"
              ? "text-white font-poppins-bold"
              : "text-black font-poppins-semibold"
          }`}
        >
          All
        </Text>
      </TouchableOpacity>

      {list.map((category, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => handleCategoryPress(category)}
          className={`flex flex-col items-start mr-4 px-8 py-2 rounded-2xl 
                        ${
                          selectedCategory === category
                            ? "bg-primary-100"
                            : "bg-white border border-black-100"
                        }`}
        >
          <Text
            className={`text-sm ${
              selectedCategory === category
                ? "text-white font-poppins-bold"
                : "text-black font-poppins-semibold"
            }`}
          >
            {category}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Filters;
