import React, { useState } from "react";
import { View, TouchableOpacity, Image, TextInput } from "react-native";

import { useLocalSearchParams, router, usePathname } from "expo-router";

const Search = () => {
  const path = usePathname();
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query);
  const handleSearch = (text: string) => {
    setSearch(text);
  };

  return (
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
  );
};
export default Search;
