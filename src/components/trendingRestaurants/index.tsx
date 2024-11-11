
import { View, Text, FlatList } from 'react-native'
import React, {useState, useEffect} from 'react'
import { restaurants } from '../../data'
import CardRestaurants from './cardRestaurants'

export interface RestaurantsProps{
    id: string;
    name: string;
    image: string;
    rating: number;
}

export default function TrendindResturants() {
    const [restaurantsData, setRestaurantsData] = useState<RestaurantsProps[]>([])

    useEffect(() => {
        setRestaurantsData(restaurants)
    }, [])

  return (
    <FlatList
        data={restaurants}
        renderItem={({item}) =>  <CardRestaurants restaurant={item}/> }
        horizontal={true}
        contentContainerStyle={{gap: 14, paddingLeft: 16, paddingRight: 16}}
        showsHorizontalScrollIndicator={false}
    />
  )
}