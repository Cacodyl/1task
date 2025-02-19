import {View, Text, Image} from 'react-native'
import React from 'react'
import {Tabs} from "expo-router";
const TabIcon = ({ focused, icon, title }:{focused: boolean, icon: any; title: string}  ) => (
    <View className="flex-1 mt-3 flex flex-col items-center">
        <Image source={icon} tintColor={focused ? '#61AC4D' : '#666876'} resizeMode="contain" className="size-6"/>
        <Text className={`${focused ? 'text-primary-100 font-poppins-semibold' : 'text-primary-200 font-poppins'} text-xs w-full text-center mt-1`}>
            {title}
        </Text>
    </View>
);

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{tabBarShowLabel: false, tabBarStyle: {backgroundColor: 'white', position: 'absolute', borderTopColor: '#FFFFFF', borderTopWidth: 1, minHeight: 70,}
            }}
        >

            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home', headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={require('../../../assets/icons/homeicon.png')}  // Change to your own image
                            title="Home"
                        />
                    )
                }}
            />


            <Tabs.Screen
                name="searchpage"
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={require('../../../assets/icons/searchicon.png')}  // Change to your own image
                            title="Search"
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="categories"
                options={{
                    title: 'Categories',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={require('../../../assets/icons/tabler_category.png')}  // Change to your own image
                            title="Categories"
                        />
                    )
                }}
            />




            {/* ✅ Profile Tab */}
            <Tabs.Screen
                name="profilepage"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <TabIcon
                            focused={focused}
                            icon={require('../../../assets/icons/proficon.png')}  // Change to your own image
                            title="Profile"
                        />
                    )
                }}
            />

        </Tabs>
    )
}
export default TabsLayout
