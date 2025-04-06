import { View, Text, TouchableOpacity, Image, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import apiClient from "@/api/axiosInstance";
import useCartStore from "@/app/store/Cartfile";
import useAuthStore from "@/app/store/useAuthStore";
import useItemStore from "@/app/store/useItemStore";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
} from "react-native-reanimated";
import { useEffect } from "react";
import {
  useAddToCart,
  useFetchCartQuery,
  useClearCart,
} from "@/api/cartqueries";

interface Props {
  onPress?: () => void;

  name?: string | null;

  itemquantity?: number | null;

  priceofone?: number | null;

  pricetotal?: number | null;

  imagelink?: string;
  itemid?: any;
  plainid?: any;
}
interface Items {
  name: string | null;
  price: number | null;
  description: string | null;
  category?: string | null;
  image_urls?: any;
  image_url_display?: string | undefined;
  itemId?: number | null;
  onPress?: () => void;
  index?: number;
}
export const HomeCard = ({
  onPress,
  name,
  price,
  description,
  category,
  image_url_display,
  image_urls,
  itemId,
  index = 0,
}: Items) => {
  const rotateY = useSharedValue(180);

  useEffect(() => {
    rotateY.value = withDelay(index * 120, withTiming(0, { duration: 500 }));
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateY: `${rotateY.value}deg`,
        },
      ],
      backfaceVisibility: "hidden",
    };
  });

  return (
    <Animated.View style={animatedStyle} className="shadow-md">
      <TouchableOpacity
        className="flex flex-col items-start w-60 h-48 relative mx-3"
        onPress={onPress}
      >
        <Image
          source={{ uri: image_url_display }}
          className="w-52 h-48 rounded-lg"
        />

        <View className="flex flex-col mt-2">
          <Text
            className="text-xl font-poppins-semibold text-black-100 w-52"
            numberOfLines={1}
          >
            {name}
          </Text>
          <Text className="text-xs font-poppins text-black-100">
            {description}
          </Text>

          <View className="flex flex-row items-center justify-between mt-2">
            <Text className="text-base font-poppins text-black-100">
              {"$" + price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export const SmallCard = ({
  onPress,
  name,
  description,
  price,
  image_urls,
}: Items) => {
  return (
    <View className="flex flex-col items-start w-36 h-64 relative shadow-md">
      <View className="flex flex-row items-center absolute px-2 top-1 right-1 bg-white/90 p-1 rounded-full z-50">
        <Image
          source={require("../assets/icons/Type=Star, State=Default, Direction=Default.jpg")}
          className="size-2.5"
        />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">
          4.2
        </Text>
      </View>

      <Image source={{ uri: image_urls }} className="size-36 rounded-lg" />

      <View className="flex flex-col mt-2">
        <Text className="text-xl font-poppins-bold text-black-100">{name}</Text>
        <Text className="text-xs font-poppins text-black-100">
          {description}
        </Text>

        <View className="flex flex-row items-center justify-between mt-2">
          <Text className="text-base font-poppins text-black-100">
            {"$" + price}
          </Text>
        </View>
      </View>
      <TouchableOpacity onPress={onPress} className="absolute bottom-3 right-1">
        <Image
          source={require("../assets/icons/plus.png")}
          className="w-8 h-8"
        />
      </TouchableOpacity>
    </View>
  );
};

export const CartCard = ({
  onPress,
  name,
  itemquantity,
  priceofone,
  pricetotal,
  imagelink,
  itemid,
  plainid,
}: Props) => {
  // const { cart, setCart, settotalitems, settotalprice } = useCartStore();
  // const { accessToken } = useAuthStore();

  // const handleplus = async (
  //   quan: number | null | undefined,
  //   endpt: number | undefined
  // ) => {
  //   try {
  //     console.log(endpt);

  //     const sarthak = await apiClient.put(
  //       `/cart/items/${endpt}`,
  //       {
  //         quantity: quan ? quan + 1 : 1,
  //       },
  //       {
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`,
  //         },
  //       }
  //     );
  //     setCart(sarthak.data.data.items);
  //     settotalitems(sarthak.data.data.total_items);
  //     settotalprice(sarthak.data.data.total_price);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const handledelete = async (norafatehi: number | undefined) => {
  //   try {
  //     console.log(norafatehi);

  //     const response = await apiClient.delete(`/cart/items/${norafatehi}`, {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //     });
  //     setCart(response.data.data.items);
  //     settotalitems(response.data.data.total_items);
  //     settotalprice(response.data.data.total_price);
  //   } catch (error: any) {
  //     console.error(error);
  //   }
  // };
  const handleplus = () => {};
  const handledelete = () => {};

  return (
    <View className="flex flex-row items-start w-60 h-30 relative bg-white my-5 mx-5">
      <Image
        source={{ uri: imagelink }}
        className="h-20 w-20 rounded-lg border"
      />

      <View className="flex flex-col mt-0 px-3">
        <Text
          className="text-2xl font-poppins-semibold text-black-100"
          numberOfLines={1}
        >
          {name}
        </Text>
        <Text className="text-base font-poppins-semibold text-black-100">
          {"Quantity: " + itemquantity}
        </Text>
        <Text className="text-base font-poppins-semibold text-black-100">
          {"Amount: $" +
            priceofone +
            " X " +
            itemquantity +
            " = $" +
            pricetotal}
        </Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => {}} className="py-5 pl-6">
          <Image
            source={require("../assets/icons/bin.png")}
            className="w-10 h-10"
          />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => {}} className="py-5 pl-6">
          <Image
            source={require("../assets/icons/plus.png")}
            className="w-10 h-10"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export const CartCard2 = ({
  onPress,
  name,
  itemquantity,
  priceofone,
  pricetotal,
  imagelink,
  itemid,
  plainid,
}: Props) => {
  const { cart, setCart, settotalitems, settotalprice } = useCartStore();
  const { accessToken } = useAuthStore();

  const handleplus = async (
    quan: number | null | undefined,
    endpt: number | undefined
  ) => {
    try {
      console.log(endpt);

      const sarthak = await apiClient.put(
        `/cart/items/${endpt}`,
        {
          quantity: quan ? quan + 1 : 1,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      setCart(sarthak.data.data.items);
      settotalitems(sarthak.data.data.total_items);
      settotalprice(sarthak.data.data.total_price);
    } catch (error) {
      console.error(error);
    }
  };

  const handledelete = async (norafatehi: number | undefined) => {
    try {
      console.log(norafatehi);

      const response = await apiClient.delete(`/cart/items/${norafatehi}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setCart(response.data.data.items);
      settotalitems(response.data.data.total_items);
      settotalprice(response.data.data.total_price);
    } catch (error: any) {
      console.error(error);
    }
  };
  return (
    <View className="bg-white rounded-xl shadow-md px-4 py-3 mx-4 my-2 flex-row items-center h-32">
      <Image
        source={{ uri: imagelink }}
        className="w-24 h-24 rounded-md mr-4"
      />

      <View className="flex-1 flex-row justify-between items-center">
        <View className="max-w-[75%]">
          <Text
            className="text-xl mb-2 font-poppins-semibold"
            numberOfLines={1}
          >
            {name}
          </Text>
          <Text
            className="text-base text-gray-500  font-poppins-semibold"
            numberOfLines={1}
          >
            {"Quantity: " + itemquantity}
          </Text>
          <Text className="text-base text-primary-100 mt-2 font-poppins-semibold">
            {"Amount: $" +
              priceofone +
              " X " +
              itemquantity +
              " = $" +
              pricetotal}
          </Text>
        </View>

        <View className="flex-col items-center space-y-2 mt-1 mr-3">
          <TouchableOpacity
            onPress={() => handleplus(itemquantity, itemid)}
            className=" rounded-full p-2"
          >
            <Image
              source={require("../assets/icons/plus.png")}
              className="w-10 h-10"
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handledelete(plainid)}
            className=" rounded-full p-2"
          >
            <Image
              source={require("../assets/icons/bin.png")}
              className="w-10 h-10"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export const CategoryCardBig = ({ onPress, name }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col items-start w-110 h-48  relative mx-0 mt-3"
    >
      <Image
        source={require("../assets/icons/Rectangle 32.png")}
        className="size-full rounded-2xl border-2"
      />

      <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-0 right-0 border-2">
        <Image
          source={require("../assets/icons/Type=Star, State=Default, Direction=Default.jpg")}
          className="size-3.5"
        />
        <Text className="text-xs font-rubik-bold text-primary-300 ml-1">
          4.5
        </Text>
      </View>

      <View className="flex flex-col items-start absolute top-0 inset-x-0">
        <Text
          className="text-5xl font-poppins-extrabold text-white px-4 pt-4"
          numberOfLines={1}
        >
          {name}
        </Text>
        <Text
          className="text-base font-poppins-semibold text-white px-4 pt-0"
          numberOfLines={1}
        >
          Description line1
        </Text>

        <View className="flex flex-row items-center justify-between w-full">
          <Text className="text-base font-poppins-extrabold text-white px-4">
            Description line2
          </Text>
        </View>
        <View>
          <Image
            source={require("../assets/icons/Frame 5972.png")}
            className="pl-4 mt-4"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export const FavouriteCard = ({
  name,
  price,
  image_url_display,
  description,
}: Items) => {
  const { favourites, removefavourite } = useItemStore();

  return (
    <View className="bg-white rounded-xl shadow-md px-4 py-3 mx-4 my-2 flex-row items-center h-32">
      <Image
        source={{ uri: image_url_display }}
        className="w-24 h-24 rounded-md mr-4"
      />

      <View className="flex-1 flex-row justify-between items-center">
        <View className="max-w-[75%]">
          <Text
            className="text-xl mb-2 font-poppins-semibold"
            numberOfLines={1}
          >
            {name}
          </Text>
          <Text
            className="text-sm text-gray-500  font-poppins-semibold"
            numberOfLines={1}
          >
            {description}
          </Text>
          <Text className="text-base text-primary-100 mt-2 font-poppins-semibold">
            {"Price: $" + price}
          </Text>
        </View>

        <View className="flex-col items-center space-y-2 mt-1 mr-3">
          <TouchableOpacity
            onPress={() => removefavourite(name)}
            className=" rounded-full p-2"
          >
            <Image
              source={require("../assets/icons/bin.png")}
              className="w-10 h-10"
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export const CategoryCard = ({ onPress }: Props) => {
  return (
    <TouchableOpacity
      disabled={true}
      onPress={onPress}
      className="flex flex-col items-start w-80 h-40 relative "
    >
      <Image
        source={require("../assets/icons/image.png")}
        className="size-full rounded-2xl border-2"
      />

      <View className="flex flex-col items-start absolute top-0 inset-x-0">
        <Text
          className="text-4xl font-poppins-extrabold text-primary-100 px-4 pt-4"
          numberOfLines={1}
        >
          Promo offer
        </Text>
        <Text
          className="text-base font-poppins-semibold text-primary-100 px-4 pt-0"
          numberOfLines={1}
        >
          Delivery
        </Text>

        <View className="flex flex-row items-center justify-between w-full">
          <Text className="text-xl font-poppins-extrabold text-black-100 px-4">
            20% Discount
          </Text>
        </View>
        <View>
          <Image
            source={require("../assets/icons/Frame 5972.png")}
            className="pl-4"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};
