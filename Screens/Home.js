import { View, Text, SafeAreaView, StatusBar} from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import SearchBar from '../Components/SearchBar'
import Categories from '../Components/Categories'

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
      <Categories/>
    </SafeAreaView>
  )
}