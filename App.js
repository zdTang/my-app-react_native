import React,{useState} from "react";
import { View, StyleSheet,Text } from "react-native";
import Focus from "./src/features/Focus"
const App = () => {

const [focusSubject, setFocusSubject]=useState("Reading");

    return (focusSubject
      ?<Focus/>
      :<View ><Text style={styles.container}>I don't have a subject</Text></View>
    );
}




const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:50
  },
  
});

export default App;