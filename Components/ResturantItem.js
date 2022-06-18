import { View, Text, Image, TouchableOpacity, Pressable, ScrollView} from 'react-native'
import React, {useState} from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export const restaurantsArray = [
    {
        name: "Joe's Shanghai",
        rating: 4,
        image_url: "https://s3-media4.fl.yelpcdn.com/bphoto/xM4eGRjk_EfSc1V8MdkRXw/o.jpg",
        display_address: "46 Bowery St, New York, NY 10013",
        transactions: [
            "pickup",
            "delivery",
        ]
    },
    {
        name: "Thursday Kitchen",
        rating: 4.5,
        image_url: "https://s3-media2.fl.yelpcdn.com/bphoto/kx6lT4K3kNV8ZUauntNQhA/o.jpg",
        display_address: "424 E 9th St, New York, NY 10009",
        transactions: [
            "pickup",
            "delivery",
            "restaurant_reservation"
        ]
    },
    {
        name: "loveMama",
        rating: 4.5,
        image_url: "https://s3-media1.fl.yelpcdn.com/bphoto/bLlFKTlVuLfmF-lIDGIjZA/o.jpg",
        display_address: "174 2nd Ave, New York, NY 10009",
        transactions: [
            "pickup",
            "delivery",
        ]
    }
];

const StringFac= (arg) => {
    return(
        arg.replace('_', ' ')
    )
}

export default function ResturantItem(props) {
  return (
    <TouchableOpacity activeOpacity={1}>
        {
            props.restaurantsData.map((res, index) => (
                <View key={index} style={{padding: 10, marginBottom: 2, paddingTop: 20, paddingBottom: 20, backgroundColor: 'white'}}>
                    <ResturantImage image ={res.image_url}/>
                    <ResturantInfo name={res.name} rating={res.rating.toFixed(1)} display_address={res.display_address} transactions= {res.transactions}/>
                </View>
            ))
        }
    </TouchableOpacity>  
  )
}

const ResturantImage = (props) => {
    const [liked, setLiked]= useState(false);
    return (
        <View >
            <Image source = {{ uri: props.image}} style={{
                width: "100%",
                height: 200,
                borderRadius: 15
            }} />
            <TouchableOpacity onPress={() => {setLiked((prev) => !prev)}} style={{position: 'absolute', bottom: 20, right: 10 }}>
                <View style={{backgroundColor: liked? 'rgba(1, 1, 1, 0.4)':'rgba(1,1,1, 0.5)', borderRadius: 50, padding: 6}}>
                    {liked ? <MaterialCommunityIcons name="heart" size={26} color="#F74440" /> : <MaterialCommunityIcons name="heart-outline" size={26} color="white" />}
                </View>
            </TouchableOpacity>
        </View>
    )
}

const ResturantInfo =(props)=>{
    return (
        <View>
            <View style={{
                flexDirection: 'row',
                justifyContent:'space-between',
                alignItems: 'flex-start',
                marginTop: 10
            }}>
                <View>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>{props.name}</Text>
                    <View style={{width: 150}}>
                        <Text style={{ fontSize: 14, color:"rgba(0,0,0,1)"}}>{props.display_address}</Text>
                    </View>
                </View>
                <View style={{
                    backgroundColor:"#eee",
                    height: 40,
                    width: 60,
                    flexDirection: "row",
                    alignItems: 'center',
                    justifyContent: "space-between",
                    borderRadius: 50,
                    paddingHorizontal: 10
                }} >
                    <AntDesign name="star" size={14} color="#ffab00" />
                    <Text style={{color: '#ffab00', fontSize: 15, fontWeight:"900"}}>{props.rating}</Text>
                </View>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop: 10}}>
               {
                props.transactions.map((item, index)=> (
                    <View key={index} style={{backgroundColor:"black", paddingHorizontal: 10, alignItems: 'center', paddingVertical:4 ,
                    borderRadius: 50,
                    flexDirection: 'row',
                    marginRight: 5
                }}>
                    <Text style={{color: 'white', fontSize: 12}}>
                        {StringFac(item)}
                    </Text>
                </View>
                ))
               }
            </ScrollView>
        </View>
    )
}