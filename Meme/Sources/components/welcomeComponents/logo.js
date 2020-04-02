import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'

export default class Logo extends React.Component{
    render(){
               
        return (
        <View style={styles.imgContainer} >
<Image source={require('../../Images/appIcon.png')} style={{width: 200, height: 150}} resizeMode='contain' />
<Text style={styles.taglineText}>
LETS LAUGH TOGETHER.
</Text></View>

)}
}
const styles = StyleSheet.create({
 imgContainer:{
     flex:1,
     justifyContent:'flex-end',
     alignItems:'center'
    },

    taglineText:{
        fontSize: 19,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color:'white',
        
    },
})