import React from 'react';
import { Platform, Text, StyleSheet, TextInput, View, Button, Image } from 'react-native';
function Service({ icon }) {

    return (
        <>
            <Image style={styles.service}  source={icon}></Image>
        </>
    );
}

const styles = StyleSheet.create({

    service: {
        width: '40%',
        height: '20%',
        margin: 'auto',
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'space-around',
        borderRadius: 50
    }
})

export default Service;