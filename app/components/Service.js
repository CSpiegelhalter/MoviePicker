import { container } from 'aws-amplify';
import React, { useState } from 'react';
import { Platform, Text, StyleSheet, TextInput, View, Button, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
function Service({ icon }) {

    const [styling, setStyling] = useState(styles.service)

    const changeStyle = () => {
        if (styling == styles.service) {
            setStyling(styles.clicked)
            console.log('hey');
        }
        else {
            setStyling(styles.service)
        }
    }

    return (
        <>
            <TouchableOpacity style={styles.container} onPress={changeStyle}>
                <Image style={styling}  source={icon}></Image>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '50%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    service: {
        width: '75%',
        height: 175,
        flexBasis: '50%',
        borderRadius: 50
    },
    clicked: {
        width: '100%',
        height: 75,
        flexBasis: '50%',
        borderRadius: 50,
        borderColor: 'blue'
    }
})

export default Service;