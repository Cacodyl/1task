import {View, Text, SafeAreaView, ScrollView, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import Search from "@/Components/search";
import {Link, useRouter} from "expo-router";

import {CategoryCard, SmallCard} from "@/Components/cards";

const Produce = () => {
    return (
        <SafeAreaView className={"flex-1 bg-white"}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                className="mt-1 mb-2">

                <View className="flex flex-row items-center pl-5 mt-5 pr-10">

                    <View className="mt-2">
                        <TouchableOpacity>
                            <Image source={require('../assets/icons/Type=Arrow 2, State=Default, Direction=Left.jpg')}/>
                        </TouchableOpacity>
                    </View>
                    <View className="flex-1 items-center">
                        <Text className="text-2xl font-poppins-bold mt-1 text-left">Product</Text>


                    </View>
                </View>
                <View className="px-6">
                    <Search />
                </View>
                <ScrollView horizontal
                            showsHorizontalScrollIndicator={false}
                            className="mt-5 mb-0">
                    <View className=" flex flex-row gap-5 px-4 mb-2 pb-0 ">

                        <CategoryCard />
                        <CategoryCard />


                    </View>
                </ScrollView>

                <View className="flex flex-row justify-between items-center px-4 mt-0">
                    <Text className="font-poppins-bold text-2xl font-bold">Recommendations</Text>
                    <TouchableOpacity>
                        <Text className="font-poppins-semibold text-primary-100">View all</Text>
                    </TouchableOpacity>
                </View>

                <ScrollView horizontal
                            showsHorizontalScrollIndicator={false}
                            className="mt-1 mb-0">
                    <View className=" flex flex-row gap-8 mt-3 px-4">

                        <SmallCard />
                        <SmallCard/>
                        <SmallCard />


                    </View>

                </ScrollView>

                <View className="flex flex-row justify-between items-center px-4 mt-3">
                    <Text className="font-poppins-bold text-2xl font-bold">Favorites</Text>
                    <TouchableOpacity><Text className="font-poppins-semibold text-primary-100">
                        View all
                    </Text></TouchableOpacity>
                </View>

                <ScrollView horizontal
                            showsHorizontalScrollIndicator={false}
                            className="mt-1 mb-2">
                    <View className=" flex flex-row gap-8 mt-3 px-4">

                        <SmallCard />
                        <SmallCard/>
                        <SmallCard />


                    </View>
                </ScrollView>

            </ScrollView>
        </SafeAreaView>

    );
}
export default Produce
