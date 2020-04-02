import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import Logo from '../../components/welcomeComponents/logo'

import LinearGradient from 'react-native-linear-gradient';
import { Dimensions, Platform, PixelRatio } from 'react-native';


 
export default class loginHome extends React.Component{
    render(){
        
        
        return (
            <View style={styles.container}>
                <LinearGradient 
                    start={{x: 1, y: .6}} 
                    end={{x: 1, y: 1}} 
                    colors={['#ff3d00', '#6200ea']} 
                    style={styles.linearGradient}
                >
                    <View style={styles.mainContent}>
                        <View style={styles.appIconContainer}>
                            <Logo/>
                        </View>
                        <View style={styles.welcomeContainer}>
                            
                            <Text style={styles.welcomeText}>
                                Welcome to meme
                            </Text>
                        </View>
                        <View style={{flex:0.45}}></View>
                        <View style={styles.signupOptionsConatiner}>
                            <View style={styles.first2signUpContainer}>
                            <View style={{paddingHorizontal:'1%',paddingBottom:"1%"}}>
                                <TouchableOpacity style={styles.signupOptions}>
                                    <View style={{flexDirection: 'row',justifyContent: "center",alignItems:'flex-start'}}>
                                        <View>
                                            <Image style={{height: 25, width: 25}} source={require('../../Images/mailSignupIcon.png')}/>
                                        </View>
                                        <View >
                                            <Text style={styles.signupOptionsText}>
                                                Sign Up using Email
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.signupOptions}>
                                    <View style={{flexDirection: 'row',}}>
                                        <View>
                                            <Image style={{height: 25, width: 25}} source={require('../../Images/googleSignupIcon.png')}/>
                                        </View>
                                        <View style={{justifyContent: "center"}}>
                                            <Text style={styles.signupOptionsText}>
                                                Sign Up with Google
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity >
                            </View>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.signupOptions}>
                                    <View style={{flexDirection: 'row'}}>
                                        <View>
                                            <Image style={{height: 25, width: 25}} source={require('../../Images/facebookSignupIcon.png')}/>
                                        </View>
                                        <View style={{justifyContent:'center' }}>
                                            <Text style={styles.signupOptionsText}>
                                                Sign Up with Facebook
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.skipContainer}>
                            <View>
                                <TouchableOpacity style={styles.skipOption}>
                                    <Text style={styles.skipText}>
                                        Skip -->
                                    </Text>
                                </TouchableOpacity>
                            </View>   
                        </View>
                    </View>
                </LinearGradient>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    },
   
    mainContent:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    linearGradient: {
        flex: 1,
    },
    appIconContainer:{
        flex: 0.25,   
    },
    welcomeContainer:{
        flex: 0.05,
        width: '100%',
        justifyContent: "center",
        alignItems: 'center'
    },
    welcomeText:{
        fontSize: 20,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color:'white',
        marginTop: 0,
    },
    
    signupOptionsConatiner:{
        
        flex: 0.15,
        width: '100%',
        alignItems:'center' ,
        justifyContent: 'flex-end',
        borderColor:'black'
    },
    first2signUpContainer:{
        flexDirection:'row',
        justifyContent:'center',
        
    },

    signupOptions:{
        marginBottom: 5,
        padding: "2%",
        backgroundColor:'white',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
        width: "100%",
        
    },
    emialContainer:{
        backgroundColor:'white'},
    signupOptionsText:{
        fontSize: 14 ,
        paddingLeft:'2%'
        
    },
    skipContainer:{
        flex: 0.1,
        
        width: '100%',
        justifyContent: "center",
        paddingRight: 20
    },
    skipOption:{
        alignSelf: 'flex-end',
        padding: "2%",
        borderWidth: 3,
        borderColor: '#ff3d00',
        borderRadius: 15,
        width: '35%',
        alignItems: "center",
        justifyContent: "center",
    },
    skipText:{
        fontSize: 20,
        fontWeight: 'bold'
    }
})