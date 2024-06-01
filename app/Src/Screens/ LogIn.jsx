import { View, Text,Image,StyleSheet,TextInput,Pressable, } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { auth } from '../../Firebase-Auth/firebaseconfig';
import { signInWithEmailAndPassword } from "firebase/auth";


const LogIn=()=> {
    const [email, setEmail] = useState("");//empty string
    const [password, setPassword] = useState("");//empty string
    let [errors,setErrors]= useState({});
    const router = useRouter();

    const validateform = () => {
        errors = {}
    
        if (email=="")  errors.email = "email is required";
    
        if (password=="")  errors.password = "password is required";
    
        setErrors(errors)
    
        return Object.keys(errors).length === 0;//this line of code checks if the object named errors is empty or not, It returns true if the errors object is empty
      }

    const LoginBtn= ()=>{
        if (validateform()){
            signInWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log("Login successful!")
                router.push(`/Src/Screens/Home`)
                
                 
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                alert("User Not found!\nClick on the Sign Up Button");
                
            });
            setEmail("");
            setPassword("");
           
            

        }

    }
  return (
    <View style={{ backgroundColor: "white",flex:1 }}>

        <Image source={require('../Images/login.png')} />

        <View style={Styles.LogInContainer}>
          <Text style={Styles.WelcomeText} > Welcome to Education App </Text>
           <View style={{ paddingHorizontal: 10, paddingTop: 10 }}>
              <TextInput
                placeholder="Enter your Email"
                style={Styles.input}
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                />
                
                 { errors.email ? <Text style={Styles.errortext}>{errors.email}</Text>:null}
           </View>
           <View style={{ paddingHorizontal: 10, paddingTop: 10 }}>
             <TextInput
                placeholder="Enter your Password"
                style={Styles.input}
                value={password}
                onChangeText={setPassword}
                // secureTextEntry
             />
                {errors.password ? (
                    <Text style={Styles.errortext}>{errors.password}</Text>
                    ) : null
                 }
            </View>
            <Pressable onPress={LoginBtn}>
                <View style={Styles.ButtonView}>              
                    <Text style={Styles.ButtonText} >Log in</Text>               
                </View>
            </Pressable>
            
            <Pressable onPress={()=> router.push(`/Src/Screens/SignUp`) } >
                {/* we have to give the file location relative to the app directory */}
                <View style={Styles.SignUpButton}>
                    <Text style={Styles.ButtonText}>Sign up</Text>
                </View>
            </Pressable>

            
       </View>
    </View>
  )
}

export default LogIn;

const Styles= StyleSheet.create(
    {
        Image:{
            alignItems: "center",
            alignContent: "center"
        },
        LogInContainer:{
            backgroundColor: "white",
            paddingTop: 30,
            marginTop: -20,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
        },
        WelcomeText: {
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
        },
        input: {
            marginTop: 40,
            borderWidth: 1,
            padding: 5,
            paddingHorizontal: 10,
            borderColor: "black",
            fontSize: 15,
            borderRadius: 15,
            
        },
        input: {
            marginTop: 40,
            borderWidth: 1,
            padding: 5,
            paddingHorizontal: 10,
            borderColor: "black",
            fontSize: 15,
            borderRadius: 15,
            
        },
        ButtonView: {
            alignSelf: "center",
            backgroundColor: "#0C7DE4",
            marginTop: 40,
            padding: 10,
            paddingHorizontal:50,
            borderRadius: 30,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",

        },
        ButtonText: {
            fontSize: 20,
            textAlign: "center",
            color: "white",
            // backgroundColor:Colors.Primary,

        },
        SignUpButton:{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            backgroundColor:"#0C7DE4",
            marginTop: 15,
            padding: 10,
            paddingHorizontal:50,
            borderRadius:30,
      
        },
        errortext: {
            color: "red",
            paddingLeft:5,
          }
    }
)
