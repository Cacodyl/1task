import {View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView} from 'react-native'
import React from 'react'
import { useRouter} from "expo-router";
import Search from "@/Components/search";
import {CategoryCardBig} from "@/Components/cards";

const Categories = () => {
    const router = useRouter();
    return (
        <SafeAreaView className={"flex-1 bg-white"}>

            <View className="flex flex-row items-center pl-5 mt-5 pr-10">

                <View className="mt-2">
                    <TouchableOpacity>
                        <Image source={require('../../assets/icons/Type=Arrow 2, State=Default, Direction=Left.jpg')}/>
                    </TouchableOpacity>
                </View>

                <View className="flex-1 items-center">
                    <Text className="text-2xl font-poppins-bold mt-1 text-left">Categories</Text>
                </View>
            </View>
            <View className="flex flex-row justify-between items-center pl-5 mt-10 pr-10">
                <View>
                    <Text className="text-xl font-poppins-bold mt-1">123 Alm Street, USA
                    </Text>
                    <Text className="text-gray-500 text-xl font-poppins">Welcome Back Alex
                    </Text>
                </View>
                <View>
                    <TouchableOpacity>
                        <Image source={require('../../assets/icons/Type=Cart, State=Default, Direction=Default.jpg')}/>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView
                        showsVerticalScrollIndicator={false}
                        className="mt-1 mb-2">
            <View className="flex flex-col gap-5 mt-5 px-5">

               <CategoryCardBig onPress={() => router.push('/produce')}/>



                <CategoryCardBig />
            <CategoryCardBig />
            <CategoryCardBig />
            </View>
            </ScrollView>




        </SafeAreaView>

    );
}
export default Categories
