import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import Login from '../components/Login';
import colors from '../config/colors';
import Screen from '../components/Screen';


function WelcomeScreen(props) {
    return (
        <>
        <Image style={styles.popcorn} source={require('../assets/popcornLogo.png')}></Image>
        <View style={styles.container}>
            <ImageBackground blurRadius={0} style={styles.background} source={require('../assets/background.jpg')}>
                <Screen >
                    
                    <View style={styles.buttonContainer}>
                    <Login />
                    </View>
                </Screen>
            </ImageBackground>
        </View>
        </>

    );
}

const styles = StyleSheet.create({
    popcorn: {
        alignSelf: 'center',
        position: 'absolute',
        width: '30%',
        height: '30%',
        top:35
    },
    container: {
        flex: 1,
        width: "100%",
        height: '100%',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -1
    },
    buttonContainer: {
        // flex: 1,
        // width: '100%',
        // height: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
        // bottom: 40,
        // padding: 30,
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.35)',
        width: '100%',
        height: '75%',
        position: 'absolute',
        marginTop: 150,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        // opacity: 0.5,
        elevation: 5
    },

    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        
    }
})
export default WelcomeScreen;