import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const DeliveryToggle = () => {
    const [isDelivery, setIsDelivery] = useState<boolean>(true);

  return (
    <View
        className='flex-row justify-between bg-[#EDEDED] mx-7 p-1 rounded-xl mt-7' 
    >
        <TouchableOpacity
            className={`py-1 px-[15%] font-[Sora-Semibold] rounded-xl ${isDelivery ? 'bg-[#C67C4E]' : ''}`} 
            onPress={() => setIsDelivery(true)}
        >
            <Text className={`text-lg ${isDelivery ? 'text-white' : 'text-black'}`}>
                Deliver
            </Text>
        </TouchableOpacity>

        <TouchableOpacity
        className={`py-1 px-[15%] font-[Sora-Semibold] rounded-xl ${!isDelivery ? 'bg-[#C67C4E]' : ''}`} // Dynamic classes
        onPress={() => setIsDelivery(false)}
      >
        <Text className={`text-lg ${!isDelivery ? 'text-white' : 'text-black'}`}>
          Pick Up
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default DeliveryToggle

const styles = StyleSheet.create({})