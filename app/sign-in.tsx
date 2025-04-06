import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import React from "react";
import apiClient from "@/api/axiosInstance";
import { useRouter } from "expo-router";
import useAuthStore from "@/app/store/useAuthStore";
import { useState } from "react";
import { useEffect } from "react";
import useCatStore from "./store/useCatStore";
import useItemStore from "./store/useItemStore";

const SignIn = () => {
  const router = useRouter();
  const { setTokens } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await apiClient.post("/auth/login", {
        api_key: "dda6216b-be2d-457f-84a3-a0ac6dd20bf1",
      });
      setTokens(
        response.data.data.access_token,
        response.data.data.refresh_token
      );
    } catch (err: any) {
      const errorType = err.response?.data?.error?.code || "error hehehe";
      
    } finally {
      setLoading(false);
    }
  };
  const pressedSignin = () => {
    router.replace("/(tabs)");
  };
  useEffect(() => {
    handleLogin();
  }, []);

  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView contentContainerClassName="flex-1">
        <View className="flex-1 bg-white px-5 justify-end mb-12">
          <View className="items-start">
            <Text className="text-5xl font-poppins-bold text-primary-100 leading-tight">
              Smart Shop
            </Text>

            <Text className="text-5xl font-poppins-bold text-primary-100 leading-tight">
              Healthy Living
            </Text>
          </View>

          <Text className="text-sm font-poppins-semibold text-left my-5">
            Modern shopping solution focused on a healthy balanced lifestyle. We
            provide a variety of quality support for your health needs.
          </Text>

          <TouchableOpacity
            className="w-5/6 h-14 my-2 self-center"
            onPress={pressedSignin}
          >
            <Image
              source={require("../assets/icons/getstart.png")}
              className="w-full h-full object-cover"
            />
          </TouchableOpacity>

          <Text className="text-sm font-poppins text-gray-600 mt-5 text-center">
            Don’t have an account?{" "}
            <Text className="text-green-600 font-bold">Sign Up</Text>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignIn;
