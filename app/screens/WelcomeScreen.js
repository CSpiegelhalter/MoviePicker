import React from 'react';
import { ImageBackground, StyleSheet, View, Dimensions, Text } from 'react-native';

function WelcomeScreen(props) {
    return (
       
        <ImageBackground  style={styles.background} source={require('../assets/background.jpg')}>
            <View style={styles.loginButton}><Text>Login</Text></View>
            <View style={styles.signupButton}><Text>Sign-up</Text></View>
        </ImageBackground>
    
    );
}
const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;

const styles = StyleSheet.create({
   
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: '55%',
        height: 50,
        backgroundColor: '#ffffff',
        bottom: "20%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupButton: {
        width: '55%',
        height: 50,
        backgroundColor: '#ffffff',
        bottom: "18%",
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default WelcomeScreen;