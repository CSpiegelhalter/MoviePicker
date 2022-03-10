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
        width: '75%',
        height: 175,
        // margin: 'auto',
        // margin: 5,
        // flex: 1,
        flexBasis: '50%',
        alignSelf: 'center',
        // justifyContent: 'space-around',
        borderRadius: 50
    }
})

export default Service;