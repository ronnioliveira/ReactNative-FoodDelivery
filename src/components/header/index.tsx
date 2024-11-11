
import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons, Feather } from '@expo/vector-icons'

export default function Header() {
  return (
    <View className='flex flex-row items-center justify-between w-full'>
      <TouchableOpacity className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
        <Ionicons name='menu' size={20} color='#121212'/>
      </TouchableOpacity>

      <View className='flex flex-col items-center justify-center'>
        <Text className='text-sm text-slate-600'>Location</Text>
        <View className='flex-row items-center justify-center gap-2'>
            <Feather name='map-pin' size={14} color='#FF0000' />
            <Text className='text-lg font-bold'>Liverpool, UK</Text>
        </View>
      </View>
      
      <TouchableOpacity className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
        <Feather name='bell' size={20} color='#121212'/>
      </TouchableOpacity>
    </View>
  )
}