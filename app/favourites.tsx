import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";

import useItemStore from "./store/useItemStore";
import { FavouriteCard } from "@/Components/cards";

const FavouritesPage = () => {
  const { favourites } = useItemStore();

  let id = 500;

  if (!favourites.length) {
    return (
      <SafeAreaView className="flex-1 bg-white">
        <View className="items-center">
          <Text className="text-2xl font-poppins-semibold items-center justify-center">
            Favourites
          </Text>
        </View>
        <View className="items-center">
          <Text className="text-xl font-poppins items-center justify-center">
            Add items to favourties to display here
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="items-center">
        <Text className="text-2xl font-poppins-semibold items-center justify-center">
          Favourites
        </Text>
      </View>
      <ScrollView>
        {favourites.map((favitem) => (
          <FavouriteCard
            key={id++}
            name={favitem.name}
            image_url_display={favitem.image_urls["0"]}
            price={favitem.price}
            description={favitem.description}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
export default FavouritesPage;
