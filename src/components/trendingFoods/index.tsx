import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { foods } from '../../data'

import CardFood from './cardFood'
import FoodProps from './interfaces/foodProps'

// interface FoodProps {
//     id: string;
//     name: string;
//     price: number;
//     delivery: number;
//     rating: number;
//     image: string;
//     restaurantId: string;
// }

export default function TrendingFoods() {
    const [foodsData, setFoodsData] = useState<FoodProps[]>([])

    useEffect(() => {
        setFoodsData(foods)
    }, [])

  return (
    <FlatList
        data={foods}
        renderItem={({item}) =>  <CardFood food={item}/> }
        horizontal={true}
        contentContainerStyle={{gap: 14, paddingLeft: 16, paddingRight: 16}}
        showsHorizontalScrollIndicator={false}
    />
  )
}