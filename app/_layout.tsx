import { SplashScreen, Stack } from "expo-router";
import "./globals.css";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import useAuthStore from "@/app/store/useAuthStore";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Slot } from "expo-router";
import { QueryProvider } from "./provider/QueryProvider";

export default function RootLayout() {
  const router = useRouter();
  const { accessToken } = useAuthStore();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!accessToken || accessToken === "null") {
      router.replace("/sign-in");
    } else {
      router.replace("/(tabs)");
    }
    setLoading(false);
  }, []);

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded || loading)
    return (
      <QueryProvider>
        <Slot />
      </QueryProvider>
    );

  return (
    <QueryProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </QueryProvider>
  );
}
