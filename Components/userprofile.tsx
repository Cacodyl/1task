import {View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
interface Props {
    name: any;
    id: any;
    cart_id: any;

}



const Userprofile = ({name ,id, cart_id}: Props) => {
    return (
        <View className="flex flex-row justify-between items-center pl-5 mt-10 pr-10 ">
            <View>
                <Text className="text-2xl text-gray-500 font-poppins mt-1">
                    Welcome back
                </Text>
                <Text className="text-black text-6xl font-poppins-bold mt-2 py-3">
                    {name}
                </Text>
                <View className="flex flex-row justify-start items-center pl-1 mt-0 pr-5">
                    <Text className="text-xl text-gray-500 font-poppins ">
                        Customer ID:
                    </Text>
                    <Text className="text-xl text-black font-poppins-bold mt-1 pl-4">
                        {id}
                    </Text>

                </View>
                <View className="flex flex-row justify-start items-center pl-1 mt-1 pr-5">
                    <Text className="text-xl text-gray-500 font-poppins mt-1">
                        Cart Identification:
                    </Text>
                    <Text className="text-xl text-black font-poppins-bold mt-1 pl-4">
                        {cart_id}
                    </Text>

                </View>
            </View>
            <View>
                <TouchableOpacity>
                    <Image className="size-20 rounded-full" source={require('../assets/icons/1oX3as2c_400x400.jpg')}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Userprofile;
