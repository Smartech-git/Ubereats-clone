import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function ResturantItem() {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 1}}>
        <View style={{padding: 10, paddingBottom: 30, backgroundColor: 'white'}}>
            <ResturantImage/>
            <ResturantInfo/>
        </View>
    </TouchableOpacity>  
  )
}

const ResturantImage = () => {
    return (
        <View >
            <Image source = {{ uri:"https://media.istockphoto.com/photos/delicious-meal-picture-id1295387240?b=1&k=20&m=1295387240&s=170667a&w=0&h=KtWYFjSBgpNgVkE3P-WKZ2F6V-VxyUBBtJIP_k8IANM=" }} style={{
                width: "100%",
                height: 200,
                borderRadius: 10
            }} />
            <TouchableOpacity style={{position: 'absolute', bottom: 20, right: 10 }}>
                <View style={{backgroundColor: 'rgba(0,0,0, 0.5)', borderRadius: 50, padding: 6}}>
                  <MaterialCommunityIcons name="heart-outline" size={26} color="white" />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const ResturantInfo =()=>{
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent:'space-between',
            alignItems: 'center',
            marginTop: 10
        }}>
            <View>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Fabulous Kitchen Thai Cusine</Text>
                <Text style={{ fontSize: 16, color:"rgba(0,0,0,1)"}}>30-45 - min</Text>
            </View>
            <View style={{
                backgroundColor:"#eee",
                height: 40,
                width: 60,
                alignItems: 'center',
                justifyContent: "center",
                borderRadius: 50
            }} >
                <Text style={{color: '#ffab00', fontSize: 15, fontWeight:"900"}}>4.5</Text>
            </View>
        </View>
    )
}