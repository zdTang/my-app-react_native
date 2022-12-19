import React from "react";
import {View,StyleSheet,Text} from "react-native";
import {TextInput} from "react-native-paper"

// Here we must install the specific "react-native-paper" version. the latest version have conflict.
// no default here, will need {} to import !
export const Focus = () => {



    return ( 
    <View style={styles.container}>
        <View style={styles.titleContainer}>
        <Text style={styles.title}>what to Focus?</Text>
        <TextInput style={styles.inputContainer}/>
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
        marginTop:20
    }


});

