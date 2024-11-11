import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { RestaurantsProps } from "..";
import { Ionicons } from "@expo/vector-icons";

export default function RestaurantItem({
  restaurant,
}: {
  restaurant: RestaurantsProps;
}) {
  return (
    <Pressable className="flex flex-row items-center justify-start gap-2">
      <Image
        source={{ uri: restaurant.image }}
        className="w-20 h-20 rounded-full"
      />
      <View>
        <Text
          className="flex-row text-black leading-4 font-bold"
          numberOfLines={2}
        >
          {restaurant.name}
        </Text>

        <View className="flex-row items-center gap-1">
          <Ionicons name="star" size={14} color="#CA8A04" />
          <Text className="text-sm">{restaurant.rating}</Text>
        </View>
      </View>
    </Pressable>
  );
}
