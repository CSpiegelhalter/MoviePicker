import React from 'react';
import { Platform, Text, StyleSheet, TextInput, View } from 'react-native';
import Button from '../components/Button';
import colors from '../config/colors';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';


const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email('Must be a valid email')
        .required('Must have an email')
        .label('Email'),
    password: Yup.string()
        .required('Must have a password')
        .min(4, 'Password must be at least 8 characters')
        .label('Password')
});




function Login() {
    const navigation = useNavigation();

    return (
        <>
            <View style={styles.container}>

                <Formik
                    // enableReinitialize={true}
                    initialValues={{ email: "", password: "" }}
                    onSubmit={(values) => console.log(values)}
                    validationSchema={validationSchema}
                >
                    {({ handleChange, handleSubmit, errors, values, setFieldTouched, touched }) => (
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
                                        textContentType='password'
                                        autoCapitalize='none'
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
                                <Button title="Login" color={colors.tertiary} onPress={handleSubmit} />
                                <Button title="Sign-up" color={colors.tertiary} onPress={() => navigation.navigate("Signup")} />
                            </View>
                        </>
                    )}
                </Formik>

            </View>
        </>
    );
}

const styles = StyleSheet.create({
    inputWrapper: {
        backgroundColor: '#F8F3EE',
        borderRadius: 25,
        flexDirection: 'row',
        flex: 1,
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
        flex: 1,
        width: '100%',
        height: '80%',
        alignItems: 'center',
        marginTop: 150
    },
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})

export default Login;