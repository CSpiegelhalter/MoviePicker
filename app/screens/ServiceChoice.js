import React from 'react';
import { Platform, ScrollView, SafeAreaView, Text, StyleSheet, TextInput, View, Button } from 'react-native';
// import Button from '../components/Button';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import AppText from '../components/AppText';
import Service from '../components/Service';


const icons = [
    require('../assets/netflixlogo.png'),
    require('../assets/disney_plus.jpg'),
    require('../assets/HBO.jpg'),
    require('../assets/hulu.jpg'),
    require('../assets/amazonprime.jpg')
]

function ServiceChoice() {
    const navigation = useNavigation();

    return (
        <>
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.container}>

                    {icons.map((item, index) => (
                        <Service icon={item} key={index}></Service>
                    ))
                    }
                </ScrollView>
            </SafeAreaView>

        </>
    );
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        // height: '100%',
        // flexGrow: 1,
        flexWrap: 'wrap',
        // alignItems: 'center',
        flexDirection: 'row',
        // justifyContent: 'center',
        // margin: 'auto',
        // overflowY: 'auto'
    }
})

export default ServiceChoice;