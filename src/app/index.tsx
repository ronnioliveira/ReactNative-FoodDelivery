import { View, ScrollView } from "react-native";

import Header from "../components/header";
import Constants from 'expo-constants'
import Banner from "../components/banner";
import SearchBar from "../components/searchBar/Index";
import Section from "../components/section";
import TrendingFoods from "../components/trendingFoods";
import TrendindResturants from "../components/trendingRestaurants";
import ResturantList from "../components/restaurantList";



const statusBarHeight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView style={{flex: 1}} className="bg-slate-200" showsVerticalScrollIndicator={false}>
      <View style={{marginTop: statusBarHeight + 24}} className="px-4">
        <Header/>

        <Banner/>
        <SearchBar/>
      </View>

      <Section
        title="Big deals"
        subTitle="Check here"
        size="text-lg"
        action={() => console.log('Check was clicked')}
      />

      <TrendingFoods/>

      <Section
        title="Customers lovers"
        subTitle="Check here"
        size="text-lg"
        action={() => console.log('Check was clicked')}
      />

      <TrendindResturants/>



      <Section
        title="Restaurants"
        subTitle="See more"
        size="text-lg"
        action={() => console.log('Check was clicked')}
      />
      <ResturantList/>

    </ScrollView>
  );
}
