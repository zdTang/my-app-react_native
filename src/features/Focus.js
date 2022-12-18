import React from "react";
import {
    View,
    StyleSheet,
    Text
} from "react-native";

export const Focus = () => {



    return ( 
    <View>
    <Text style={styles.container}>what to Focus?</Text>
    </View>
    );
}




const styles = StyleSheet.create({
    container: {
        padding: 50
    },

});

export default Focus;