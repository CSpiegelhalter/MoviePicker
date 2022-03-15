import React from 'react';
import { Platform, ScrollView, SafeAreaView, Text, StyleSheet, TextInput, View, Button, FlatList } from 'react-native';
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
            <AppText style={{alignSelf: 'center', margin: 'auto', color: 'black'}}>Select streaming services:</AppText>
                <FlatList
                    nestedScrollEnabled={true}
                    data={icons}
                    keyExtractor={icon => icon.id}
                    renderItem={({ item }) =>
                    
                        <Service
                            icon={item.icon}
                            id={item.id}
                            onPress={() => console.log(item.id)}
                        />
                    }
                />
                <Button
                title="Next: Genres"></Button>
            </SafeAreaView>
        </ View>
    );
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        // alignItems: 'center'
    },
    scroll: {
        width: '100%',
        flexWrap: 'wrap',
    }
})

export default ServiceChoice;