import { View, Text,SafeAreaView,Image,StyleSheet,TextInput,Button } from 'react-native'
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../Firebase-Auth/firebaseconfig'



const SignUp=()=> {
  const [Name,setName]= useState("");
  const [username,setUsername]= useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  const [error,setErrors]= useState({});



  
  const handlesignup = () => {
    //if there are no errors then the validateform funcn returns true thus the next step will be taken
    createUserWithEmailAndPassword(auth, email, password)
      .then( async (userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log('Registered with:', user.email);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

      alert("Sign Up Successful!")

      setName("");
      setUsername("");
      setEmail("");
      setPassword("");
      setErrors({});
    
  }







  return (
    <SafeAreaView style={{ backgroundColor: "white",flex:1 }}>
      <View>
        <Image  source={require('../Images/login.png')} />
      </View>
      <View style={Styles.SignUpContainer}>
        <View style={{alignItems:"center",}}>
          <TextInput 
            placeholder="Enter full Name"
            style={Styles.nameinput}
            value={Name}
            onChangeText={setName}
          
          />
        </View>
        <View style={{alignItems:"center",}}>
          <TextInput 
            placeholder="Enter Username"
            style={Styles.nameinput}
            value={username}
            onChangeText={setUsername}
          
          />
        </View>
        <View style={{alignItems:"center",}}>
          <TextInput 
            placeholder="Enter Email Address"
            style={Styles.nameinput}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={{alignItems:"center",}}>
          <TextInput 
            placeholder="Enter Password"
            style={Styles.nameinput}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <Button title="submit" onPress={handlesignup } />

      </View>
      
    </SafeAreaView>
  )
}


export default SignUp;

const Styles= StyleSheet.create(
  {
    SignUpContainer:{
      backgroundColor: "white",
      paddingTop: 30,
      marginTop: -20,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
        
    },
    nameinput: 
    {
      marginTop:20,
      borderWidth: 1,
      padding: 5,
      paddingHorizontal: 10,
      paddingVertical:10,
      borderColor: "black",
      fontSize: 15,
      borderRadius: 15,
      maxWidth: "70%",
      minWidth:"70%",
      
      // alignSelf:"center"
      
      
    }
    
  }
)
