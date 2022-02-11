import React from 'react';
import { ImageBackground, StyleSheet, View, Dimensions, Text } from 'react-native';
import AppText from '../components/AppText';
import Button from '../components/Button';
import Login from '../components/Login';
import colors from '../config/colors';


function WelcomeScreen(props) {
    return (
        <View style={styles.container}>
            <ImageBackground blurRadius={0} style={styles.background} source={require('../assets/background.jpg')}>
                <View style={styles.buttonContainer}>
                    <Login />
                    <Button title="Login" color={colors.tertiary} onPress={() => console.log('pressed login')} />
                    <Button title="Sign-up" color={colors.tertiary} onPress={() => console.log('pressed sign up')} />
                </View>
            </ImageBackground>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        // height: '25%',
        backgroundColor: 'black',
    },
    buttonContainer: {
        flex: 1,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        bottom: 40,
        padding: 30,
    },

    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
        
    }
})
export default WelcomeScreen;