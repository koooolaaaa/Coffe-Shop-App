import {  Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { router, Stack } from 'expo-router';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface HeaderProps {
    title: string;
    showHeaderRight: boolean;
    bgColor: string;
}

const PageHeader: React.FC<HeaderProps> = ({ title, showHeaderRight,bgColor }) => {
  return (
    <Stack.Screen
        options={{
            headerShadowVisible: false, 
            headerStyle: {
                backgroundColor: bgColor, 
            },
            headerTitleAlign: 'center', 

            headerTitle: () => (
                <Text
                    className='text-xl text-[#242424] font-[Sora-Semibold]'
                >
                    {title}
                </Text>
            ),

            headerRight: showHeaderRight ? () => (
                <FontAwesome5 
                name='heart' 
                style={{marginRight: 10}}
                size={24}
                color='black'
                />
            ): undefined,
            headerBackVisible: false, 

            headerLeft: () => (
                <GestureHandlerRootView
                    className='flex-row items-center gap-4'
                >
                    <TouchableOpacity
                        className='pl-2'
                        onPress={() => router.back()}
                    >
                        <Feather
                            name='arrow-left'
                            size={24}
                            color='black'
                        />
                    </TouchableOpacity>
                </GestureHandlerRootView>
            ), 
        }}
    />
  )
}

export default PageHeader


