import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'

import LinearGradient from 'react-native-linear-gradient';

class Welcome extends React.Component{
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
                            <Image source={require('../../Images/appIcon.png')} style={{width: 150, height: 150}} />
                        </View>
                        <View style={styles.welcomeAndTaglieContainer}>
                            <Text style={styles.welcomeText}>
                                Welcome to Meme
                            </Text>
                            <Text style={styles.taglineText}>
                                Fun It.
                            </Text>
                        </View>
                        <View style={styles.signupOptionsConatiner}>
                            <View>
                                <TouchableOpacity style={styles.signupOptions}>
                                    <View style={{flexDirection: 'row',}}>
                                        <View>
                                            <Image style={{height: 64, width: 64}} source={require('../../Images/mailSignupIcon.png')}/>
                                        </View>
                                        <View style={{justifyContent: "center"}}>
                                            <Text style={styles.signupOptionsText}>
                                                Sign Up using Email and Password
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.signupOptions}>
                                    <View style={{flexDirection: 'row',}}>
                                        <View>
                                            <Image style={{height: 64, width: 64}} source={require('../../Images/googleSignupIcon.png')}/>
                                        </View>
                                        <View style={{justifyContent: "center"}}>
                                            <Text style={styles.signupOptionsText}>
                                                Sign Up with Google
                                            </Text>
                                        </View>
                                    </View>
                                </TouchableOpacity >
                            </View>
                            <View>
                                <TouchableOpacity style={styles.signupOptions}>
                                    <View style={{flexDirection: 'row',}}>
                                        <View>
                                            <Image style={{height: 64, width: 64}} source={require('../../Images/facebookSignupIcon.png')}/>
                                        </View>
                                        <View style={{justifyContent: "center"}}>
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
    welcomeBackground:{
        flex: 1,
        backgroundColor: "#ff3d00"
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
        flex: 5,
        width: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
    welcomeAndTaglieContainer:{
        flex: 1,
        width: '100%',
        justifyContent: "center",
        alignItems: "center"
    },
    welcomeText:{
        fontSize: 40,
        fontFamily: 'Roboto',
        fontWeight: 'bold'
    },
    taglineText:{
        fontSize: 30,
    },
    signupOptionsConatiner:{
        flex: 7,
        width: '100%',
        alignItems: "center",
        justifyContent: "center"
    },
    signupOptions:{
        margin: 5,
        padding: "2%",
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
        width: 600,
    },
    signupOptionsText:{
        fontSize: 30,
        paddingLeft: 30
    },
    skipContainer:{
        flex: 2,
        // borderWidth: 2,
        // borderColor: 'yellow',
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
        fontSize: 40,
        fontWeight: 'bold'
    }
})

export default Welcome