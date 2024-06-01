import { View,SafeAreaView, Text,StyleSheet, StatusBar, TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';


export default function Home() {
  return (
    <SafeAreaView style={Styles.Homecontainer}>
      <View>
        <Text>Hello user</Text>
        {/* <ion-icon name="person-circle-outline"></ion-icon> */}
      </View>
      <AntDesign name="search1" size={24} color="black" /> 
      <TextInput
       placeholder='search'
       style={Styles.Searchbox}
       />
      


    </SafeAreaView>
  )
}

const Styles= StyleSheet.create(
  {
    Homecontainer:{
      paddingTop:StatusBar.currentHeight,
      padding:30,
      flex:1,
      backgroundColor:"white",
    },
    Searchbox:{
      elevation:20,
      color:"white",

    }
  }
)
