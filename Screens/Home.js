import { View, Text, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import React ,{useEffect, useState} from 'react';
import Header from '../Components/Header';
import SearchBar from '../Components/SearchBar';
import Categories from '../Components/Categories';
import ResturantItem, {restaurantsArray} from '../Components/ResturantItem';
import axios from 'axios';

const YELP_API_KEY = "tveSaaH4WfbNVgYLLK2AXLVqN6v7hd91ctfmHPM5b1UkS4VLzWajJqZCSqkwO4HA7N4dClwVz76yyC-Z10atJRgHXNwt3SSjzq1TDdnMzbCW_YLlADtmDO94DTatYnYx";

export default function Home(){
  const [restaurantData, setRestuarantData] = useState(restaurantsArray)

  function getResturants() {
    const config = {
      headers: {
        Authorization:
          `Bearer ${YELP_API_KEY}`,
      },
      params: {
        term: "restaurants",
        location: "Hollywood",
        limit: 20,
      },
    };

    axios
    .get("https://api.yelp.com/v3/businesses/search", config)
    .then((response) => {
      setRestuarantData(response.data.businesses); //These are the results sent back from the API!
    });
  }

  useEffect( ()=>{
    //getResturants()
  }, [])

  return (
    <SafeAreaView 
      style={{
        paddingTop: StatusBar.currentHeight, 
        backgroundColor: "#eee",
        flex: 1
      }}
    >
      <View style={{backgroundColor: "white", padding: 15}}>
        <Header/>
        <SearchBar/>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories/>
        <ResturantItem restaurantsData = {restaurantData} />
      </ScrollView>
      <StatusBar/>
    </SafeAreaView>
  )
}