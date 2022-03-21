import React, { useState } from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, View, Button } from 'react-native';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import WelcomeScreen from './WelcomeScreen';
import GenreChoice from './GenreChoice';
import ServiceChoice from './ServiceChoice';
import LogoNav from '../components/LogoNav';
import MovieBrowser from './MovieBrowse';

const Stack = createNativeStackNavigator();


function Routes(props) {


    const [service, setService] = useState([])


    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{ headerTitleAlign: "center" }}>
                    
                    <Stack.Screen
                        name="ServiceChoice"
                        component={ServiceChoice}
                        options={{
                            headerTitle: (props) => (

                                <LogoNav {...props} />
                            )
                        }
                        }
                    />
                    <Stack.Screen
                        name="GenreChoice"
                        component={GenreChoice}
                        options={{
                            headerTitle: (props) => (

                                <LogoNav {...props} />
                            )
                        }
                        }
                    />
                    <Stack.Screen
                        name="MovieBrowser"
                        component={MovieBrowser}
                        options={{
                            headerTitle: (props) => (

                                <LogoNav {...props} />
                            )
                        }
                        }
                    />
                    <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name="Signup"
                        component={SignupScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>

    );
}

export default Routes;