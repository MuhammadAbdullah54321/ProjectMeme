import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import LogoScreen from '../logoScreen';
import LoginHome from './loginHome'
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions, Platform, PixelRatio } from 'react-native';


 
class Welcome extends React.Component{
    
      
        state={
            isloading: true,
            
        };
         
        
componentDidMount(){
        
           this.myInterval=setTimeout(
               ()=> this.setState({ isloading: false }),
               3000
               );
           
       
           }
        componentWillUnmount(){
            clearTimeout(this.myInterval)
        }
      

    render(){
        
        if(this.state.isloading){
            return(
            <View style={{flex:1}}> 
            
            <LogoScreen/>
              
                </View>);
       }

        
        if(!this.state.isloading)
        {return (
            <View style={styles.container}>
            <LoginHome/>

            </View>
        )
    }
}
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    },
})

export default Welcome