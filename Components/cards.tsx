import {View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
interface Props {
    item: {
        image: any;

    };
    onPress?: () => void
}

export const HomeCard = ({ item, onPress }: Props) => {
    return (
        <TouchableOpacity
            className="flex flex-col items-start w-60 h-48 relative"
            onPress={onPress}
        >
            <View className="flex flex-row items-center absolute px-2 top-5 left-5 bg-white/90 p-1 rounded-full z-50">
                <Image source={require('../assets/icons/Type=Star, State=Default, Direction=Default.jpg')} className="size-2.5" />
                <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">
                    4.2
                </Text>
            </View>

            <Image source={require('../assets/icons/saladimg.jpg')}  className="w-52 h-48 rounded-lg" />

            <View className="flex flex-col mt-2">
                <Text className="text-xl font-poppins-bold text-black-100">
                    Power Salads
                </Text>
                <Text className="text-xs font-poppins text-black-100">
                    Fresh Energy in every bite
                </Text>

                <View className="flex flex-row items-center justify-between mt-2">
                    <Text className="text-base font-poppins text-black-100">
                        $120
                    </Text>

                </View>
            </View>
        </TouchableOpacity>
    )
}


export const SmallCard = ({ item, onPress }: Props) => {
    return (
        <TouchableOpacity
            className="flex flex-col items-start w-36 h-64 relative"
            onPress={onPress}
        >
            <View className="flex flex-row items-center absolute px-2 top-1 right-1 bg-white/90 p-1 rounded-full z-50">
                <Image source={require('../assets/icons/Type=Star, State=Default, Direction=Default.jpg')} className="size-2.5" />
                <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">
                    4.2
                </Text>
            </View>

            <Image source={require('../assets/icons/saladimg.jpg')}  className="size-36 rounded-lg" />

            <View className="flex flex-col mt-2">
                <Text className="text-xl font-poppins-bold text-black-100">
                    Power Salads
                </Text>
                <Text className="text-xs font-poppins text-black-100">
                    Fresh Energy in every bite
                </Text>

                <View className="flex flex-row items-center justify-between mt-2">
                    <Text className="text-base font-poppins text-black-100">
                        $120
                    </Text>

                </View>
            </View>
        </TouchableOpacity>
    );
};
export const CategoryCard = ({ item, onPress }: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="flex flex-col items-start w-80 h-40 relative "
        >
            <Image source={require('../assets/icons/image.png')} className="size-full rounded-2xl border-2" />

            <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-0 right-0 border-2">
                <Image source={require('../assets/icons/Type=Star, State=Default, Direction=Default.jpg')} className="size-3.5" />
                <Text className="text-xs font-rubik-bold text-primary-300 ml-1">
                    4.5
                </Text>
            </View>

            <View className="flex flex-col items-start absolute top-0 inset-x-0">
                <Text
                    className="text-5xl font-poppins-extrabold text-primary-100 px-4 pt-4"
                    numberOfLines={1}
                >
                   Grocery
                </Text>
                <Text className="text-base font-poppins-semibold text-primary-100 px-4 pt-0"  numberOfLines={1}>
                    Delivery
                </Text>

                <View className="flex flex-row items-center justify-between w-full">
                    <Text className="text-xl font-poppins-extrabold text-black-100 px-4">
                        20% Discount
                    </Text>

                </View>
                <View>
                    <Image source={require('../assets/icons/Frame 5972.png')} className="pl-4" />
                </View>
            </View>
        </TouchableOpacity>
    );
};
export const CategoryCardBig = ({ item, onPress }: Props) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            className="flex flex-col items-start w-110 h-48  relative mx-0 mt-3"
        >
            <Image source={require('../assets/icons/Rectangle 32.png')} className="size-full rounded-2xl border-2" />

            <View className="flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-0 right-0 border-2">
                <Image source={require('../assets/icons/Type=Star, State=Default, Direction=Default.jpg')} className="size-3.5" />
                <Text className="text-xs font-rubik-bold text-primary-300 ml-1">
                    4.5
                </Text>
            </View>

            <View className="flex flex-col items-start absolute top-0 inset-x-0">
                <Text
                    className="text-5xl font-poppins-extrabold text-white px-4 pt-4"
                    numberOfLines={1}
                >
                   Salads
                </Text>
                <Text className="text-base font-poppins-semibold text-white px-4 pt-0"  numberOfLines={1}>
                    Dishes that typically consist of a mix
                </Text>

                <View className="flex flex-row items-center justify-between w-full">
                    <Text className="text-base font-poppins-extrabold text-white px-4">
                        of various ingredients
                    </Text>

                </View>
                <View>
                    <Image source={require('../assets/icons/Frame 5972.png')} className="pl-4 mt-4" />
                </View>
            </View>
        </TouchableOpacity>
    );
};

