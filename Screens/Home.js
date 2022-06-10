import { View, Text, SafeAreaView, StyleSheet, StatusBar} from 'react-native'
import React from 'react'
import Header from '../Components/Header'


export default function Home() {
  return (
    <SafeAreaView style={styles.headerTab}>
      <Header/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  headerTab : {
    paddingTop: StatusBar.currentHeight
  }
})