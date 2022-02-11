import React, { useState } from 'react';
import { Platform, Text, StyleSheet, TextInput, View } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')




    return (
        <View style={styles.container}>
            <TextInput placeholder='Email' style={styles.input} onChangeText={text => setEmail(text)} />
            <TextInput placeholder='Password' style={styles.input} onChangeText={text => setPassword(text)} />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    container: {
        flex: 1,
        backgroundColor:'rgba(255,255,255,0.8)',
        width: '95%',
        // height: '10%',
        marginTop: 70,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        // opacity: 0.5,
        elevation: 5
    }
})

export default Login;