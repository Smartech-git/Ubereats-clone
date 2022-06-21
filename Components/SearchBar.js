import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function SearchBar(props) {
  const [text, onChange] = useState();

  const  handleKeyPress = ({ nativeEvent: { text, eventCount, target }}) => {
    props.getResturants(text)
    onChange("")
  };
  const Search = () => {
    props.getResturants(text);
    onChange("")
  }

  return (
    <View style={{marginTop: 14, flexDirection: "row"}}>
      <GooglePlacesAutocomplete
        placeholder='Search'
        textInputProps = {{
          selectionColor: 'rgba(0, 0, 0, 0.55)',
          spellCheck: false,
          autoCorrect: false,
          onChangeText: (e) => onChange(e),
          value: text,
          returnKeyType: "search",
          onSubmitEditing: handleKeyPress
        }}
        styles={{
            textInput: {
              backgroundColor: "#eee",
              borderRadius: 20,
              fontWeight: "700",
              marginTop: 7,
              height: 38,
            },
            textInputContainer: {
              backgroundColor: '#eee',
              borderRadius: 50,
              flexDirection: "row",
              margingRight: 10,
              alignItems: 'center',
            }
        }}
        renderLeftButton = {() => (
            <View style={{
              marginLeft: 8, 
              backgroundColor: 'white', 
              borderRadius: 50, 
              height: 34, 
              width: 34,
              alignItems: "center",
              justifyContent: "center"
            }}>
                <Ionicons name="md-location-sharp" size={24} color="black" />
            </View>
        )}
        renderRightButton = {() => (
          <TouchableOpacity  onPress={Search}>
            <View style = {{
              flexDirection: 'row',
              marginRight: 8,
              backgroundColor: "white",
              padding: 8,
              borderRadius: 38,
              alignItems: "center",
              }}
            >
              <AntDesign name="clockcircle" size={13} style={{marginRight: 7}} color="black" />
              <Text>Search</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}