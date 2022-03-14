import { container } from 'aws-amplify';
import React, { useState } from 'react';
import { Platform, Text, StyleSheet, TextInput, View, Button, Image, TouchableHighlight } from 'react-native';
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
            <TouchableHighlight 

            style={styles.container} 
            >
                <Image style={styling}  source={icon}></Image>
            </TouchableHighlight>
        </>
    );
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '50%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'blue'

    },
    service: {
        width: '75%',
        height: 175,
        flexBasis: '50%',
        borderRadius: 50
    },
    clicked: {
        width: '75%',
        height: 175,
        flexBasis: '50%',
        borderRadius: 50,
        borderColor: 'blue'
    }
})

export default Service;