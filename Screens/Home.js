import { View, Text, SafeAreaView, StatusBar, ScrollView} from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import SearchBar from '../Components/SearchBar'
import Categories from '../Components/Categories'
import ResturantItem from '../Components/ResturantItem'

export default function Home() {
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
        <ResturantItem />
        <ResturantItem />
      </ScrollView>
    </SafeAreaView>
  )
}