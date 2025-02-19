
import {SafeAreaView, Text, View, TouchableOpacity, ScrollView, Image} from "react-native";
import{ Link } from 'expo-router';
import {HomeCard, SmallCard, CategoryCard} from "@/Components/cards";
import Filters from "@/Components/filters";
import Search from "@/Components/search";
export default function Index() {
  return (
    <SafeAreaView className={"flex-1 bg-white"}>

        <View className="flex flex-row justify-between items-center pl-5 mt-10 pr-10">
            <View>
                <Text className="text-xl font-poppins-bold mt-1">123 Alm Street, USA</Text>
                <Text className="text-gray-500 text-xl font-poppins">Welcome Back Alex</Text>
            </View>
            <View>
               <TouchableOpacity> <Image source={require('../../../assets/icons/Type=Cart, State=Default, Direction=Default.jpg')}/>
            </TouchableOpacity></View>
        </View>

        <View className="px-5 py-6 mt-0">
            <Text className="text-3xl text-black-100 font-poppins-semibold">Get Healthy</Text><Text className="text-primary-100 font-poppins-semibold text-2xl mt-2">is the Best Investment!</Text></View>
        <View className="flex flex-row justify-between items-center px-4 mt-0">
            <Text className="font-poppins-bold text-2xl font-bold">Recommendations</Text>
            <TouchableOpacity><Text className="font-poppins-semibold text-primary-100">View all</Text></TouchableOpacity></View>
        <View className="pl-5">
            <Filters />
        </View>
        <ScrollView horizontal
                    showsHorizontalScrollIndicator={false}
                    className="mt-1 mb-2">
        <View className=" flex flex-row gap-0 mt-5 px-5">

               <HomeCard />
            <HomeCard />
            <HomeCard />


        </View>
        </ScrollView>
        <ScrollView horizontal
                    showsHorizontalScrollIndicator={false}
                    className="mt-1 mb-2">
        <View className=" flex flex-row gap-5 px-5">

               <CategoryCard />
               <CategoryCard />


        </View>
        </ScrollView>


    </SafeAreaView>

  );
}
