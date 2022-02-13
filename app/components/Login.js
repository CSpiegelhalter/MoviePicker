import React, { useState } from 'react';
import { Platform, Text, StyleSheet, TextInput, View } from 'react-native';
import Button from '../components/Button';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import InputBox from './InputBox';
import colors from '../config/colors';

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')




    return (
        <View style={styles.container}>
            <View style={styles.inputs}>
                <Text>{email}</Text>
                <Text>{password}</Text>
                <InputBox  textContentType='emailAddress' autoCapitalize="none" autoCorrect={false} keyboardType='email-address' name={'Email'} icon='email' setValue={setEmail} hidden={false} />
                <InputBox textContentType='password' autoCapitalize='none' autoCorrect={false} name={'Password'} setValue={setPassword} icon='lock' hidden={true} />
            </View>
            <View style={styles.buttons}>
                <Button title="Login" color={colors.tertiary} onPress={() => console.log(email, password)} />
                <Button title="Sign-up" color={colors.tertiary} onPress={() => console.log('pressed sign up')} />
                {/* <TextInput placeholder='Email' style={styles.input} onChangeText={(text) => setEmail(text)} />
            <TextInput placeholder='Password' secureTextEntry style={styles.input} onChangeText={(text) => setPassword(text)} /> */}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    },
    buttons: {
        width: '100%',
        alignItems: 'center',
        paddingBottom: 50
    },
    inputs: {
        width: '100%',
        height: '35%',
        alignItems: 'center',
        marginTop: 150
        // bottom: 0
    },
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        // flexDirection: 'row'
        justifyContent: 'space-between'
    }
})

export default Login;