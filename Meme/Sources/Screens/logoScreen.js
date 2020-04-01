import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default class LogoScreen extends React.Component{

    render(){

        return(
            <View style={styles.mainContent}>
                <View style={styles.appIconContainer}>
                    <Image source={require('../Images/memeIcon.png')} style={{width: 250, height: 250}} />
                    <Text style={styles.taglineText}>
                        LETS LAUGH TOGETHER.
                    </Text>
                </View>
                <View style={styles.brandConatiner}>
                     <Text style={styles.brandText}>
                        From  </Text>
                    <TouchableOpacity   style={styles.brandButtonOpacity}>
                          <Text style={styles.brandnameText}>MayyMayy</Text>
                     </TouchableOpacity>
                </View>
                
            
            
            </View>
        )

    }

}

const styles = StyleSheet.create({
    mainContent:{
        flex:1,
        justifyContent: "center",
        alignItems: "center",

    },
    appIconContainer:{
        
        width: '100%',
        height:'80%',
        justifyContent: "center",
        alignItems: "center",
        
    },
    taglineText:{
        
        justifyContent: "center",
        alignItems: "center",
        fontSize:20,
        color:"red"

    },
    brandConatiner:{
        
        flexDirection:"row",
        width:'100%',
        height:'10%',
        justifyContent: "center",
        alignItems: "center",

    },
    brandText:{
        
        justifyContent: "center",
        alignItems: "center",
        fontSize:20,
        color:"red"

    },
    brandButtonOpacity:{
        color:"red",
            opacity:2,

    },
    brandnameText:{
        
        justifyContent: "center",
        alignItems: "center",
        fontSize:20,
        color:"red"

    }




})