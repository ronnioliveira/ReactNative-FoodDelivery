import { View, Text } from 'react-native'
import React, {useState, useEffect} from 'react'
import { restaurants } from '../../data'
import RestaurantItem from './restaurantItem';

export interface RestaurantsProps{
    id: string;
    name: string;
    image: string;
    rating: number;
}

export default function ResturantList() {

    const [restaurantsData, setRestaurantsData] = useState<RestaurantsProps[]>([])

    useEffect(() => {
        setRestaurantsData(restaurants)
    }, [])

  return (
    <View className='px-4 flex-1 w-full h-full mb-11 gap-4'>
      {restaurants.map(item => (
        <RestaurantItem restaurant={item} key={item.id}/>
      ))}
    </View>
  )
}