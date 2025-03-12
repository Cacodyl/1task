import {View, Text, SafeAreaView, Image} from 'react-native'
import React from 'react'

const Searchpage = () => {
    return (
        <SafeAreaView className="flex-1">
            <View className="h-2/5 text-xl font-poppins">
                <Image source={require('../../assets/icons/Rectangle 32 - Copy.png')} className="size-full border-0" />


                <View className="flex flex-col items-start absolute top-52 inset-x-0">


                    <Text className="text-base font-poppins text-white px-4">
                        View in Google Maps
                    </Text>

                    <Text
                        className="text-5xl font-poppins-semibold text-white px-4 pt-4"
                        numberOfLines={1}
                    >
                        Power Salads
                    </Text>
                    <Text className="text-base font-poppins-semibold text-white px-4 pt-0"  numberOfLines={1}>
                        Fresh Energy in every bite
                    </Text>






                </View>
            </View>
            <View className="h-2/5 bg-white border-0.5 border-gray-200 rounded-lg">
                <View className="flex flex-row items-center justify-start">
                <Text
                    className="text-4xl font-poppins-semibold text-primary-100 px-3 pt-4"
                    numberOfLines={1}>
                    Details
                </Text>
                    <Text className="text-2xl font-poppins-semibold text-gray-500 px-5 pt-4">
                               See reviews
                    </Text>
                </View>
                <Text className="text-sm font-poppins text-gray-500 px-5 pt-2">
                    Power salads are nutrient-dense and flavorful dishes designed to provide energy and support a healthy lifestyle. Combining various fresh and nutritious ingredients, such as leafy greens, grains, nuts, and proteins, makes power salads not only filling but also beneficial for health. Read More
                </Text>
                <Text
                    className="text-2xl font-poppins-semibold text-primary-100 px-3 pt-4"
                    numberOfLines={1}>
                    Other Products
                </Text>



            </View>
            <View className="h-1/5 bg-white shadow-2xl">


            </View>








        </SafeAreaView>
    )
}
export default Searchpage
