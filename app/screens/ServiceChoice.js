import React, { useEffect, useState } from 'react';
import { Platform, ScrollView, SafeAreaView, Text, StyleSheet, TextInput, View, Button, FlatList } from 'react-native';
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
        id: 'disney-plus'
    },
    {
        icon: require('../assets/HBO.jpg'),
        id: 'hbo-max'
    },
    {
        icon: require('../assets/hulu.jpg'),
        id: 'hulu'
    },
    {
        icon: require('../assets/amazonprime.jpg'),
        id: 'amazon-prime-video'
    }
]

function ServiceChoice() {
    const navigation = useNavigation();

    const [myServices, setMyServices] = useState([])
    useEffect(() => {
        
      }, [myServices]);

    const editServices = (id) => {
        if (!(myServices.includes(id))) {
            setMyServices([...myServices, id])
        }
        else {
            let holder = myServices.filter((a) => a !== id)
            setMyServices(holder)
        }
    }

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
                            onPress={() => editServices(item.id)}
                        />
                    }
                />
                <Button
                title="Next: Genres" 
                onPress={() => navigation.navigate('GenreChoice', { services: myServices })}
                />
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