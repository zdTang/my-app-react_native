import React,{useState} from "react";
import { View, StyleSheet,Text } from "react-native";
import {Focus} from "./src/features/Focus"
const App = () => {

const [focusSubject, setFocusSubject]=useState("Reading");

// Be aware of the {JSX}, cannot put variables between elements directly!!!
    return (
      <View style={styles.container}>
        {focusSubject  
        ?(<Focus/>)
        :(<View ><Text style={styles.container}>I don't have a subject</Text></View>)}
      </View>
      
    );
}




const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:"blue"
  },
  
});

export default App;