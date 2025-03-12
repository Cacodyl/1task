import {View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity} from 'react-native'
import React from 'react'


const SignIn = () => {

    return (
        <SafeAreaView className="bg-white flex-1">
            <ScrollView contentContainerClassName="flex-1">
                <View className="flex-1 bg-white px-5 justify-end mb-12">
                    <View className="items-start">
                              <Text className="text-5xl font-poppins-bold text-primary-100 leading-tight" >Smart Shop</Text>

                        <Text className="text-5xl font-poppins-bold text-primary-100 leading-tight">Healthy Living</Text>
                    </View>

                    <Text className="text-sm font-poppins-semibold text-left my-5">
                        Modern shopping solution focused on a healthy balanced lifestyle. We provide a variety of quality support for your health needs.
                    </Text>

                            <TouchableOpacity className="w-5/6 h-14 my-2 self-center">
                        <Image source={require('../assets/icons/getstart.png')} className="w-full h-full object-cover" />
                    </TouchableOpacity>

                    <Text className="text-sm font-poppins text-gray-600 mt-5 text-center">
                        Don’t have an account? <Text className="text-green-600 font-bold">Sign Up</Text>
                       </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default SignIn
    