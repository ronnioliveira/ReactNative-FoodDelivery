import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface Props {
  title: string;
  size: "text-lg" | "text-xl" | "text-2xl";
  subTitle: string;
  action: () => void;
}

export default function Section({ title, size, subTitle, action }: Props) {
  return (
    <View className="flex w-full justify-between flex-row px-4 my-4 items-center">
      <Text className={`${size} font-semibold`}>{title}</Text>
      <TouchableOpacity onPress={action}>
        <Text>{subTitle}</Text>
      </TouchableOpacity>
    </View>
  );
}
