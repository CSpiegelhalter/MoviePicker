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
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: '100%' }} >
            <SafeAreaView style={styles.container}>
                <ScrollView contentContainerStyle={styles.scroll}>

                    {icons.map((item, index) => (
                        <Service icon={item} key={index}></Service>
                    ))
                    }
                </ScrollView>
            </SafeAreaView>
</ View>
            );
}

            const styles = StyleSheet.create({

                container: {
                width: '100%',
            height: '100%',
            // flexGrow: 1,
            // flex: 1,


            flexDirection: 'row',

        // margin: 'auto',
        // overflowY: 'auto'
    },
            scroll: {
                width: '100%',
            flexWrap: 'wrap',
            flex: 1,
            // alignItems: 'center',
            // justifyContent: 'center',
        
    }
})

            export default ServiceChoice;