import { Text, View,StyleSheet,SafeAreaView, ScrollView,Button } from "react-native";
import LogIn from "./Src/Screens/LogIn";
import SignUp from "./Src/Screens/SignUp";
import { useRouter } from "expo-router";
const Index=()=> {
  const router = useRouter();
  return (
    <SafeAreaView
      style={styles.container}>
        <ScrollView>
          <View>
            <LogIn/>
          </View>
         
          

        </ScrollView>


    </SafeAreaView>
  );
}

export default Index;

const styles= StyleSheet.create(
  {
  container:{
        flex: 1,
        backgroundColor:"white",

  }
}
)
