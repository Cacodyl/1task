import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { Link } from "expo-router";
import { CartCard } from "@/Components/cards";
import Filters from "@/Components/filters";
import Search from "@/Components/search";
import useProfileStore from "@/app/store/useProfileStore";
import Userprofile from "@/Components/userprofile";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import apiClient from "@/api/axiosInstance";
import useAuthStore from "@/app/store/useAuthStore";

const Profilepage = () => {
  const { userid, cartId, username, setProfile } = useProfileStore();
  const { accessToken } = useAuthStore();

  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Userprofile name={username} id={userid} cart_id={cartId} />

      <TouchableOpacity className="px-0 py-3 mt-8 pr-10 bg-gray-200 rounded-2xl mx-4">
        <View className="flex flex-row justify-start items-center pl-5  pr-10">
          <Image
            className="size-7"
            source={require("../../assets/icons/shopping-bag.png")}
          />
          <Text className="text-2xl text-black font-poppins mt-1 pl-5">
            Your Orders
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="px-0 py-3 mt-8 pr-10 bg-gray-200 rounded-2xl mx-4">
        <View className="flex flex-row justify-start items-center pl-5  pr-10">
          <Image
            className="size-7"
            source={require("../../assets/icons/marker.png")}
          />
          <Text className="text-2xl text-black font-poppins mt-1 pl-5">
            Addresses
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.push("/favourites")}
        className="px-0 py-3 mt-8 pr-10 bg-gray-200 rounded-2xl mx-4"
      >
        <View className="flex flex-row justify-start items-center pl-5  pr-10">
          <Image
            className="size-7"
            source={require("../../assets/icons/heart.png")}
          />
          <Text className="text-2xl text-black font-poppins mt-1 pl-5">
            Favourites
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        className="px-0 py-3 mt-8 pr-10 bg-gray-200 rounded-2xl mx-4"
        onPress={() => router.push("/cartpage")}
      >
        <View className="flex flex-row justify-start items-center pl-5  pr-10">
          <Image
            className="size-7"
            source={require("../../assets/icons/shopping-cart.png")}
          />
          <Text className="text-2xl text-black font-poppins mt-1 pl-5">
            View Cart
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity className="px-0 py-3 mt-8 pr-10 bg-gray-200 rounded-2xl mx-4">
        <View className="flex flex-row justify-start items-center pl-5  pr-10">
          <Image
            className="size-7"
            source={require("../../assets/icons/sign-out-alt.png")}
          />
          <Text className="text-2xl text-black font-poppins mt-1 pl-5">
            Sign Out
          </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Profilepage;
