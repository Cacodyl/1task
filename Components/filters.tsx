import React, { useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { Text, ScrollView, TouchableOpacity } from "react-native";

import { categories } from "../app/constants/data";

const Filters = () => {
    const params = useLocalSearchParams<{ filter?: string }>();
    const [selectedCategory, setSelectedCategory] = useState(
        params.filter || "All"
    );

    const handleCategoryPress = (category: string) => {
        if (selectedCategory === category) {
            setSelectedCategory("");
            router.setParams({ filter: "" });
            return;
        }

        setSelectedCategory(category);
        router.setParams({ filter: category });
    };

    return (
        <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-1 mb-2"
        >
            {categories.map((item: any, index: any) => (
                <TouchableOpacity
                    onPress={() => handleCategoryPress(item.category)}
                    key={index}
                    className={`flex flex-col items-start mr-4 px-8 py-2 rounded-2xl ${
                        selectedCategory === item.category
                            ? "bg-primary-100"
                            : "bg-white border border-black-100"
                    }`}
                >
                    <Text
                        className={`text-sm ${
                            selectedCategory === item.category
                                ? "text-white font-poppins-bold"
                                : "text-black font-poppins-semibold"
                        }`}
                    >
                        {item.title}
                    </Text>
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
};

export default Filters;