import React from 'react';
import { Platform, Text, StyleSheet, TextInput, View, Button, Image } from 'react-native';

function Service({ icon }) {

    return (
        <>
            <Image style={styles.service} source={icon}></Image>
        </>
    );
}

const styles = StyleSheet.create({

    service: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%'
    }
})

export default Service;