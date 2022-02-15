import React from 'react';
import { Platform, Text, StyleSheet, TextInput, View } from 'react-native';
import Button from '../components/Button';
import colors from '../config/colors';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Must be a valid email')
        .required('Must have an email')
        .label('Email'),
    password: Yup.string()
        .required('Must have a password')
        .min(4, 'Password must be at least 8 characters')
        .label('Password'),
    username: Yup.string()
        .required('Must have a username')
        .label('Username')
});


function Signup(props) {



    return (
        <KeyboardAwareScrollView  contentContainerStyle={{flex: 1,
            justifyContent: 'space-around',
            alignItems: 'center',
            width: null,
            height: null,}}>
        <View style={styles.container}>

            <Formik
                enableReinitialize={true}
                initialValues={{ email: "", password: "", username: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors, values, setFieldTouched, touched }) => (
                    <>
                        <View style={styles.inputs}>
                            <View style={styles.inputWrapper}>
                                <FontAwesome5 name="user-alt" size={20} color='#4A4847' style={styles.icon} />
                                <TextInput
                                    textContentType='username'
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholder='Username'
                                    name='Username'
                                    onChangeText={handleChange('username')}
                                    value={values.email}
                                    onBlur={() => setFieldTouched('username')}
                                />
                            </View>

                            {errors.username && touched.username ?
                                <Text style={{ fontSize: 18, color: 'yellow' }}>{errors.username}</Text> : null
                            }





                            <View style={styles.inputWrapper}>
                                <MaterialCommunityIcons name={'email'} size={20} color='#4A4847' style={styles.icon} />
                                <TextInput
                                    textContentType='emailAddress'
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    placeholder='Email'
                                    keyboardType='email-address'
                                    name='Email'
                                    onChangeText={handleChange('email')}
                                    value={values.email}
                                    onBlur={() => setFieldTouched('email')}
                                />
                            </View>

                            {errors.email && touched.email ?
                                <Text style={{ fontSize: 18, color: 'yellow' }}>{errors.email}</Text> : null
                            }
                            <View style={styles.inputWrapper}>
                                <MaterialCommunityIcons name={'lock'} size={20} color='#4A4847' style={styles.icon} />
                                <TextInput
                                    style={{height: 50}}
                                    textContentType='password'
                                    autoCapitalize='none'
                                    placeholder='Password'
                                    autoCorrect={false}
                                    name='Password'
                                    icon='lock'
                                    hidden={true}
                                    onChangeText={handleChange('password')}
                                    value={values.password}
                                    onBlur={() => setFieldTouched('password')}
                                />
                            </View>

                            {errors.password && touched.password ?
                                <Text style={{ fontSize: 18, color: 'yellow' }} >{errors.password}</Text> : null
                            }
                        </View>
                        <View style={styles.buttons}>
                            <Button title="Sign-up" color={colors.tertiary} onPress={handleSubmit} />
                        </View>
                    </>
                )}
            </Formik>

        </View>
        </KeyboardAwareScrollView>
    );
}

const styles = StyleSheet.create({
    heightControl: {
        flex: 1,
        height: 20
    },
    inputWrapper: {
        backgroundColor: '#F8F3EE',
        borderRadius: 25,
        flexDirection: 'row',
        flex: 1,
        alignSelf: 'flex-start',
        alignItems: 'center',
        height: 2,
        width: '93%',
        padding: 15,
        // marginVertical: 30,
        // position: 'absolute',
        // margin: 'auto'
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
        paddingBottom: 35
    },
    inputs: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        height: 10,
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginTop: 100
    },
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        // alignItems: 'center',
        justifyContent: 'space-between'
    }
})

export default Signup;