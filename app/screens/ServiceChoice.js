import React from 'react';
import { Platform, ScrollView, SafeAreaView, Text, StyleSheet, TextInput, View, Button, FlatList } from 'react-native';
// import Button from '../components/Button';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import AppText from '../components/AppText';
import Service from '../components/Service';


const icons = [
    {
        icon: require('../assets/netflixlogo.png'),
        id: 'netflix'
    },
    {
        icon: require('../assets/disney_plus.jpg'),
        id: 'disney'
    },
    {
        icon: require('../assets/HBO.jpg'),
        id: 'hbo'
    },
    {
        icon: require('../assets/hulu.jpg'),
        id: 'hulu'
    },
    {
        icon: require('../assets/amazonprime.jpg'),
        id: 'prime'
    }
]

function ServiceChoice() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', height: '100%' }} >
            <SafeAreaView style={styles.container}>
                {/*  <ScrollView contentContainerStyle={styles.scroll}>
                    <View> */}
                <FlatList
                    nestedScrollEnabled={true}
                    data={icons}
                    keyExtractor={icon => icon.id}
                    renderItem={({ item, index }) =>
                        <Service
                            icon={item.icon}
                            onPress={() => console.log('heyyyyy')}
                        />
                    }
                />
                {/* {icons.map((item, index) => (
                        <Service icon={item.icon} key={index} onPress={() => console.log('heyyyyy')}></Service>
                    ))
                    } */}
                {/* </View>
                </ScrollView>*/}
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
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',

    }
})

export default ServiceChoice;