import { View, Text, Image} from 'react-native'
import React from 'react'

const items = [
    {
      image: require('../Gallary/images/shopping-bag.png'),
      text: "Pick-up"
    },
    {
      image: require('../Gallary/images/soft-drink.png'),
      text: "Soft Drinks"
    },
    {
      image: require('../Gallary/images/bread.png'),
      text: "Bakery Item"
    },
    {
      image: require('../Gallary/images/fast-food.png'),
      text: "fast foods"
    },
    {
      image: require('../Gallary/images/deals.png'),
      text: "Deals"
    },
    {
      image: require('../Gallary/images/coffee.png'),
      text: "Coffee & tea"
    },
    {
      image: require('../Gallary/images/desserts.png'),
      text: "Desserts"
    },
  
  ]

export default function Categories() {
  return (
    <View>
      <Image source={items[0].image}
        style={{
            width: 50,
            height: 40,
            resizeMode: 'contain'
        }}
      />
      <Text style={{ fontSize: 13, fontWeight: 900 }}>{items[0].text}</Text>
    </View>
  )
}