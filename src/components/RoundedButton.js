import React from 'react';
import { TouchableOpacity,Text,StyleSheet } from 'react-native';

export const RoundedButton=({style={},textStyle={},size=125,...props})=>{
    return (
        <TouchableOpacity style={[styles(size).radius,style]}>
            <Text style={[styles(size).text,textStyle]}  onPress={props.onPress}>{props.title}</Text>
           
        </TouchableOpacity>
    )
}


// about align see this link: https://stackoverflow.com/questions/32551291/in-css-flexbox-why-are-there-no-justify-items-and-justify-self-properties
const styles=(size)=>StyleSheet.create({
    radius:{
        borderRadius:size/2,
        width:size,
        height:size,
        alignItems:'center', // Horizontial, need both of them to do the trick
        justifyContent:'center', // vertical
        borderColor:'#fff',
        borderWidth:2
    },
    text:{color:'#fff',fontSize:size/3}
})