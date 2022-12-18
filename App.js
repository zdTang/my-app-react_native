import React,{useState} from "react";
import { View, StyleSheet,Text } from "react-native";

const App = () => {

const [focusSubject, setFocusSubject]=useState("Reading");

    return (
      <View style={styles.container}>
        {focusSubject
        ?(<Text>I have a subject,need build a timer</Text>)
        :(<Text>I don't have a subject</Text>)}
      </View>
    );
}




const styles = StyleSheet.create({
  container: {
    padding:50
  },
  
});

export default App;