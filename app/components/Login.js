import React, { useState } from 'react';
import { Platform, Text, StyleSheet, TextInput, View } from 'react-native';
import Button from '../components/Button';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import InputBox from './InputBox';
import colors from '../config/colors';
import { Formik } from 'formik';
import * as Yup from 'yup';
import AppText from './AppText';

const validationSchema = Yup.object().shape({
    email = Yup.string().required().email().label('Email'),
    password = Yup.string().required().min(4).label('Password')
});


function Login() {


    return (
        <View style={styles.container}>

            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors }) => (
                    <>
                        <View style={styles.inputs}>
                            <Text>{email}</Text>
                            <Text>{password}</Text>
                            <InputBox
                                textContentType='emailAddress'
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType='email-address'
                                name={'Email'}
                                icon='email'
                                hidden={false}
                                onChange={handleChange('email')}
                            />
                            <AppText style={{color: 'red'}}>{errors.email}</AppText>
                            <InputBox
                                textContentType='password'
                                autoCapitalize='none'
                                autoCorrect={false}
                                name={'Password'}
                                icon='lock'
                                hidden={true}
                                onChange={handleChange('password')}
                            />
                             <AppText style={{color: 'red'}}>{errors.password}</AppText>
                        </View>
                        <View style={styles.buttons}>
                            <Button title="Login" color={colors.tertiary} onPress={handleSubmit} />
                            <Button title="Sign-up" color={colors.tertiary}  />
                        </View>
                    </>
                )}
            </Formik>


            {/* <TextInput placeholder='Email' style={styles.input} onChangeText={(text) => setEmail(text)} />
            <TextInput placeholder='Password' secureTextEntry style={styles.input} onChangeText={(text) => setPassword(text)} /> */}

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