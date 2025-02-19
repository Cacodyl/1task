import {SplashScreen, Stack} from "expo-router";
import "./globals.css";
import { useFonts} from "expo-font"
import {useEffect} from "react";


export default function RootLayout() {
const [fontsLoaded] = useFonts({
  "Poppins-Bold": require('../assets/fonts/Poppins-Bold.ttf'),
  "Poppins-Medium": require('../assets/fonts/Poppins-Medium.ttf'),
  "Poppins-Light": require('../assets/fonts/Poppins-Light.ttf'),
  "Poppins-ExtraBold": require('../assets/fonts/Poppins-ExtraBold.ttf'),
  "Poppins-SemiBold": require('../assets/fonts/Poppins-SemiBold.ttf'),
  "Poppins-Regular": require('../assets/fonts/Poppins-Regular.ttf'),



});



  useEffect(() => {
    if(fontsLoaded) {
      SplashScreen.hideAsync();


    }
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;
  return <Stack screenOptions={{ headerShown: false }}/>;
}
