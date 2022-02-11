import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import AppText from './AppText';


function Button(props) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: props.color }]} onPress={props.onPress}>
            <AppText>{props.title}</AppText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 25,
        width: '75%',
        height: 50,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Button;