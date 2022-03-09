import React from 'react';
import { Platform, Text, StyleSheet, TextInput, View, Button, Image } from 'react-native';

function LogoNav() {

    return (
        <>
            <Image style={styles.logo}  source={require('../assets/popcornLogo.png')}></Image>
        </>
    );
}

const styles = StyleSheet.create({

    logo: {
        height: 50,
        width: 50,
        alignSelf: 'center'
    }
})

export default LogoNav;