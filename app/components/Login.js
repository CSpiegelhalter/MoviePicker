import React from 'react';
import { Platform, Text, StyleSheet, TextInput, View } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

function Login() {
    return (
        <View>
            <TextInput placeholder='Email' style={styles.text} />
            <TextInput placeholder='Password' style={styles.text} />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {

        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: 'Avenir'
            },
            android: {
                fontSize: 18,
                fontFamily: 'Roboto',
                backgroundColor: 'white'
            }
        })
    }
})

export default Login;