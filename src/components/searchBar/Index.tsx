import React from "react";
import { View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View className="w-full flex-row border border-slate-500 h-14 rounded-full items-center gap-2 px-4 bg-transparent">
      <Feather name="search" size={24} color="gray" />
      <TextInput placeholder="Search for food..." className="flex-1 w-full h-full"/>
    </View>
  );
}
