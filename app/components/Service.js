import { container } from 'aws-amplify';
import React, { useState } from 'react';
import { Platform, Text, StyleSheet, TextInput, View, Button, Image, TouchableHighlight } from 'react-native';
function Service({ icon, onPress }) {

    const [styling, setStyling] = useState(styles.service)

    const changeStyle = () => {
        if (styling == styles.service) {
            setStyling(styles.clicked)
        }
        else {
            setStyling(styles.service)
        }
        onPress()
    }

    return (
        <>
            <TouchableHighlight
                underlayColor={'none'}
                onPress={changeStyle}
                style={styles.container}
            >
                <Image style={styling} source={icon}></Image>
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
        borderRadius: 50,
        margin: 10
    },
    clicked: {
        width: '75%',
        height: 175,
        flexBasis: '50%',
        borderRadius: 50,
        // borderStyle: 'solid',
        borderWidth: 6,
        borderColor: 'blue',
        margin: 10,
        opacity: .7
    }
})

export default Service;