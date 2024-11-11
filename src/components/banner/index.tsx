import { View, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";

import PagerView from "react-native-pager-view";

export default function Banner() {
  return (
    <View className="w-full h-36 md:h-60 rounded-2xl mt-5 mb-4">
      <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={7}>
        <TouchableWithoutFeedback
          className="w-full h-36 md:h-60 rounded-2xl"
          key="1"
          onPress={() => console.log("Clicked first item")}
        >
            <Image source={require('../../assets/images/blendBoard.png')}
            className="w-full h-36 md:h-60 rounded-2xl"
            />
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          className="w-full h-36 md:h-60 rounded-2xl"
          key="2"
          onPress={() => console.log("Clicked second item")}
        >
            <Image source={require('../../assets/images/blendBoard-2.png')}
            className="w-full h-36 md:h-60 rounded-2xl"
            />
        </TouchableWithoutFeedback>
      </PagerView>
    </View>
  );
}
