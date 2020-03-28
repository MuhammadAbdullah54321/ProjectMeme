import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'

import LinearGradient from 'react-native-linear-gradient';

class Welcome extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <LinearGradient 
                    start={{x: 1, y: .5}} 
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
                                Fun It
                            </Text>
                        </View>
                        <View style={styles.signupOptionsConatiner}>
                            <View>
                                <TouchableOpacity style={styles.signupOptions}>
                                    <Text style={styles.signupOptionsText}>
                                        Sign Up using E-mail
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            <View>
                                <TouchableOpacity style={styles.signupOptions}>
                                    <Text style={styles.signupOptionsText}>
                                        Sign Up with Google
                                    </Text>
                                </TouchableOpacity >
                            </View>
                            <View>
                                <TouchableOpacity style={styles.signupOptions}>
                                    <Text style={styles.signupOptionsText}>
                                        Sign Up with Facebook
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.skipContainer}>
                            <View>
                                <TouchableOpacity style={styles.skipOption}>
                                    <Text style={styles.skipText}>
                                        Skip --->
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
        borderWidth: 3,
        borderColor: 'white',
        margin: 3,
        padding: 3
    },
    welcomeAndTaglieContainer:{
        borderWidth: 3,
        borderColor: 'white',
        margin: 3,
        padding: 3
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
        borderWidth: 3,
        borderColor: 'white',
        margin: 1,
        padding: 3,
        marginTop: 100
    },
    signupOptions:{
        margin: 5,
        padding: "5%",
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
        width: 500,
        alignItems: "center",
        justifyContent: "center"
    },
    signupOptionsText:{
        fontSize: 30
    },
    skipContainer:{
        borderWidth: 3,
        borderColor: 'white',
        margin: 1,
        padding: 3,
        marginTop: 150,
        width: '100%',
        paddingLeft: '65%'
    },
    skipOption:{
        margin: 3,
        padding: "5%",
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 15,
        width: 200,
        alignItems: "center",
        justifyContent: "center"
    },
    skipText:{
        fontSize: 30,
        fontWeight: 'bold'
    }
})

export default Welcome