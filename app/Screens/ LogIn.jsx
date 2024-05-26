import { View, Text,Image,StyleSheet,Pressable,TextInput,Button,SafeAreaView} from "react-native";
import { useState } from "react";
import { Link } from "expo-router";
import Colors from "../Colors/Colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import SignUp from "./SignUp";

import { useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native-gesture-handler";
const navigation = useNavigation();



function LogIn({navigation}) {

    const [username, setUsername] = useState("");//empty string
    const [password, setPassword] = useState("");//empty string
    const [errors, setErrors] = useState({})//empty object
    
    const ValidateForm = () => {
        let errors = {}
    
        if (username == "") errors.username = "Username is required"
    
        if (password == "") errors.password = "password is required"
    
        setErrors(errors)
    
        return Object.keys(errors).length === 0;//this line of code checks if the object named errors is empty or  not, It returns true if the errors object is empty
    }
    
    const handlesubmit = () => {
        //if there are no errors then the validateform funcn returns true thus the next step will be taken
            
        if (ValidateForm()) {
            console.log("submitted", username, password)
            setUsername("");
            setPassword("");
            setErrors({});
        }
            // console.log("submitted", username, password)
            // setUsername("");
            // setPassword("");
    
    }
    return(
            <SafeAreaView style={{ backgroundColor: "white",flex:1 }}>
    
                <Image source={require("../Images/login.png")} style={styles.Image} />

                <View style={styles.container} >
                    <Text style={styles.WelcomeText} > Welcome to Education App </Text>
    
    
                    <View style={{ paddingHorizontal: 10, paddingTop: 10 }}>
                        <TextInput
                            placeholder="Enter your Username"
                            style={styles.input}
                            value={username}
                            onChangeText={setUsername}
                            autoCapitalize="none"
                        />
    
                        {errors.username ? (
                            <Text >{errors.username}</Text>
                        ) : null
                        }
                    </View>
    
                    <View style={{ paddingHorizontal: 10, paddingTop: 10 }}>

                        <TextInput
                            placeholder="Enter your Password"
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />
                        
                        {errors.password ? (
                            <Text >{errors.password}</Text>
                        ) : null
                        }
                    </View>
                </View>
    
                <View style={styles.ButtonView}>
                    <Pressable onPress={handlesubmit}>
                        <Text style={styles.ButtonText} >Log in</Text>
                    </Pressable>
                </View>
    
                {/* <Link href={{pathname:"/../Src/Screens/SignUp"}} asChild>
                    <Pressable onPress={()=>navigation.navigate('root', {screen:"SignUp"} )} >
                    <Pressable>
                        <View style={styles.SignUpButton}>
                            <Text style={styles.ButtonText}>Sign Up</Text>
                        </View>    
                    </Pressable>
                </Link> */}
                <>
                <TouchableOpacity onPress={()=> navigation.navigate("SignUp")} >
                        <View style={styles.SignUpButton}>
                            <Text style={styles.ButtonText}>Sign Up</Text>
                        </View> 

                </TouchableOpacity>
                </>
                
            </SafeAreaView>
    
        )
    
    }

export default LogIn;

const styles = StyleSheet.create(
    {
        container: {
            
            backgroundColor: "white",
            paddingTop: 40,
            marginTop: -20,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,

        },
        Image: {
            alignItems: "center",
            alignContent: "center"
        },
        WelcomeText: {
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
        },
        ButtonView: {
            alignSelf: "center",
            backgroundColor: Colors.Primary,
            marginTop: 40,
            padding: 10,
            paddingHorizontal:30,
            borderRadius: 20,
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
        icon: {
            marginRight: 20
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
        SignUpButton:{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            backgroundColor: Colors.Primary,
            marginTop: 10,
            padding: 10,
            paddingHorizontal:30,
            borderRadius: 20,
      
        }
    }
)
