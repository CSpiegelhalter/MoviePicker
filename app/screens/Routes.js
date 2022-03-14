import React from 'react';
import { Image, ImageBackground, ScrollView, StyleSheet, View, Button } from 'react-native';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import WelcomeScreen from './WelcomeScreen';
import Genres from '../components/Genres';
import ServiceChoice from './ServiceChoice';
import LogoNav from '../components/LogoNav';

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator>
        {/* <Stack.Screen name="Signup" component={SignupScreen} /> */}
        <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
)


function Routes(props) {
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
                            ),
                            headerLeft: () => (
                                <Button
                                    onPress={() => alert('This is a button!')}
                                    title="Info"
                                    color="#fff"
                                />
                            ),
                            headerRight: () => (
                                <Button
                                    onPress={() => alert('This is a button!')}
                                    title="Info"
                                    color="#fff"
                                />
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

const styles = StyleSheet.create({
    popcorn: {
        alignSelf: 'center',
        position: 'absolute',
        width: '30%',
        height: '30%',
        top: 35
    },
    container: {
        flex: 1,
        width: "100%",
        height: '100%',
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: -1
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.35)',
        width: '100%',
        height: '75%',
        position: 'absolute',
        marginTop: 150,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        // zIndex: -1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        // opacity: 0.5,
        elevation: 5
    },

    background: {
        flex: 1,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',

    }
})
export default Routes;