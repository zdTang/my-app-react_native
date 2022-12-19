import React from "react";
import {View,StyleSheet,Text} from "react-native";
import {TextInput} from "react-native-paper"
import { RoundedButton } from "../components/RoundedButton";

// Here we must install the specific "react-native-paper" version. the latest version have conflict.
// no default here, will need {} to import !
export const Focus = () => {



    return ( 
    <View style={styles.container}>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>what to Focus?</Text>
        <View style={styles.inputContainer}>
        {/* <TextInput style={{flex:1,marginRight:20}}/> */}
        <TextInput style={styles.inputText}/>
        <RoundedButton size={50} title="+"></RoundedButton>
        </View>

        </View>

    </View>
    );
}




const styles = StyleSheet.create({
    container: {
        flex:1,
        padding:50
    },
    titleContainer:{
        flex:1,
        padding:16,
        justifyContent:"center"
    },
    title:{
        color:"white",
        fontWeight:"bold",
        fontSize:24
    },
    inputContainer:{
        //paddingTop:20,
        marginTop:20,
        flexDirection:"row",

    },
    inputText:{flex:1,marginRight:20}


});

