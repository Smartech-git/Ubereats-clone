import { View, Text, Image, ScrollView} from 'react-native'
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
    <View style={{
       marginTop: 5,
       marginBottom: 5,
       paddingHorizontal: 5
    }}>
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
                items.map((item, index) =>(
                
                    <View key={index} style={{
                        alignItems:'center', 
                        justifyContent: 'center',
                        backgroundColor: 'white',
                        margin: 5,
                        paddingHorizontal:15,
                        paddingVertical: 8,
                        borderRadius: 10
                    }}>
                        <Image source={item.image}
                            style={{
                                width: 25,
                                height: 25,
                                resizeMode: 'contain'
                            }}
                        />
                        <Text style={{ fontSize: 10, fontWeight: '900' }}>{item.text}</Text>
                    </View> 
                ))
            }  
        </ScrollView>
    </View>
  )
}