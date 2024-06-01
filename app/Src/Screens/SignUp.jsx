import { View, Text,SafeAreaView,Image,StyleSheet,TextInput,Button } from 'react-native'
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from '../../Firebase-Auth/firebaseconfig'
import { useRouter } from 'expo-router';



const SignUp=()=> {
  const [Name,setName]= useState("");
  const [username,setUsername]= useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]= useState("");
  let [errors,setErrors]= useState({});
  const router = useRouter();

  const validateform = () => {
    errors = {}
    if (Name=="")  errors.Name = "Name is required";
    if (username=="")  errors.username = "username is required";
    if (email=="")  errors.email = "email is required";
    if (password=="")  errors.password = "password is required";

    setErrors(errors)

    return Object.keys(errors).length === 0;//this line of code checks if the object named errors is empty or not, It returns true if the errors object is empty
  }

  
  const handlesignup = () => 
    {
      //if there are no errors then the validateform funcn returns true thus the next step will be taken
      if(validateform()){
        createUserWithEmailAndPassword(auth, email, password)
        .then( async (userCredential) => 
          {
            // Signed up 
            const user = userCredential.user;
            console.log('Registered with:', user.email);
            console.log("Name of the user:",user.displayName);
            // alert("Sign Up Successful!");
            router.push(`/Src/Screens/Home`);
        
        
          })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        alert("Alreday Signed Up!");
        });
      setName("");
      setUsername("");
      setEmail("");
      setPassword("");
      setErrors({});
    
  }

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
          { errors.Name ? <Text style={Styles.errortext}>{errors.Name}</Text>:null}
        </View>
        <View style={{alignItems:"center",}}>
          <TextInput 
            placeholder="Enter Username"
            style={Styles.nameinput}
            value={username}
            onChangeText={setUsername}
          
          />
          { errors.username ? <Text style={Styles.errortext}>{errors.username}</Text>:null}
        </View>
        <View style={{alignItems:"center",}}>
          <TextInput 
            placeholder="Enter Email Address"
            style={Styles.nameinput}
            value={email}
            onChangeText={setEmail}
          />
          { errors.email ? <Text style={Styles.errortext}>{errors.email}</Text>:null}
        </View>
        <View style={{alignItems:"center",}}>
          <TextInput 
            placeholder="Enter Password"
            style={Styles.nameinput}
            value={password}
            onChangeText={setPassword}
          />
          { errors.password ? <Text style={Styles.errortext}>{errors.password}</Text>:null}
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
      
      
    },
    errortext: {
      display:"flex",
      color: "red",
      paddingLeft:5,
    }
    
  }
)
