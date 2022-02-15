import React, { useState } from 'react';
import { Platform, Text, StyleSheet, TextInput, View } from 'react-native';
import Button from '../components/Button';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import InputBox from './InputBox';
import colors from '../config/colors';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import ErrorMessage from './ErrorMessage';
import AppText from './AppText';

const passwordNotLongEnough = 'password must be at least 8 characters'
const invalidEmail = 'email must be a valid email'


const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('email must be a valid email')
        .required('Must have an email')

        .label('Email'),
    password: Yup.string()
        .required('Must have a password')
        .min(4, passwordNotLongEnough)
        .label('Password')
});


function Login(props) {



    return (
        <View style={styles.container}>

            <Formik
                enableReinitialize={true}
                initialValues={{ email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors, values }) => (
                    <>
                        <View style={styles.inputs}>
                            <View style={styles.inputWrapper}>
                                <MaterialCommunityIcons name={'email'} size={20} color='#4A4847' style={styles.icon} />
                                <TextInput
                                    textContentType='emailAddress'
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType='email-address'
                                    name='Email'
                                    // icon='email'
                                    // hidden={false}
                                    onChangeText={handleChange('email')}
                                    value={values.email}
                                />
                            </View>
                            {/* <ErrorMessage error={errors.email}/>
                             */}
                            {errors.email ?
                                <Text style={{ fontSize: 18, color: 'yellow' }}>{errors.email}</Text> : null
                            }
                            <View style={styles.inputWrapper}>
                                <MaterialCommunityIcons name={'lock'} size={20} color='#4A4847' style={styles.icon} />
                                <TextInput
                                    textContentType='password'
                                    autoCapitalize='none'
                                    autoCorrect={false}
                                    name='Password'
                                    icon='lock'
                                    hidden={true}
                                    onChangeText={handleChange('password')}
                                    value={values.password}
                                />
                            </View>
                            {/* <AppText style={{color: "white"}}>{errors.password}</AppText> */}
                            {/* <ErrorMessage error={errors.password}/> */}
                            {errors.password ?
                                <Text style={{ fontSize: 18, color: 'yellow' }} >{errors.password}</Text> : null
                            }
                        </View>
                        <View style={styles.buttons}>
                            <Button title="Login" color={colors.tertiary} onPress={handleSubmit} />
                            <Button title="Sign-up" color={colors.tertiary} />
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
    inputWrapper: {
        backgroundColor: '#F8F3EE',
        borderRadius: 25,
        flexDirection: 'row',
        flex: 1,
        // position: 'absolute',
        alignItems: 'center',
        width: '95%',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10,
        margin: 'auto'

    },
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
        flex:1,
        // flexDirection: 'row',
        width: '100%',
        height: '80%',
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