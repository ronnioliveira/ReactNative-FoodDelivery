import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { RestaurantsProps } from "..";

export default function CardRestaurants({
  restaurant,
}: {
  restaurant: RestaurantsProps;
}) {
  return (
    <Pressable>
      <Image
        source={{ uri: restaurant.image }}
        className="w-20 h-20 rounded-full"
      />
      <Text
        className="text-sm mt-2 w-20 text-center leading-4 text-black"
        numberOfLines={2}
      >
        {restaurant.name}
      </Text>
    </Pressable>
  );
}
