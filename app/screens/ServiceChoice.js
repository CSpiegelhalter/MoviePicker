import React from 'react';
import { Platform, Text, StyleSheet, TextInput, View, Button } from 'react-native';
// import Button from '../components/Button';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import AppText from '../components/AppText';
import Service from '../components/Service';


const icons = [
    // require('../assets/netflixlogo.jfif'),
    require('../assets/disney_plus.jpg'),
    require('../assets/HBO.jpg'),
    require('../assets/hulu.jpg'),
    require('../assets/amazonprime.jpg')
]

function ServiceChoice() {
    const navigation = useNavigation();

    return (
        <>
            <View style={styles.container}>

                {icons.map( (item, index) => (
                    <Service icon={item} key={index}></Service>
                ))
                }

            </View>
        </>
    );
}

const styles = StyleSheet.create({
   
    container: {
        width: '100%',
        height: 'auto',
        flex: 1,
        flexWrap: 'wrap',
        // alignItems: 'center',
        // flexDirection: 'column',
        // justifyContent: 'space-around',
        margin: 'auto',
        // overflowY: 'auto'
    }
})

export default ServiceChoice;