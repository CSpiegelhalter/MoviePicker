import React from 'react';
import { Platform, ScrollView, SafeAreaView, Text, StyleSheet, TextInput, View, Button, FlatList } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import AppText from '../components/AppText';
import Service from '../components/Service';
import Genres from '../components/Genres';


const genres = [
    'comedy ',
    'drama',
    'adventure',
    'action',
    'romantic comedy',
    'crime',
    'thriller',
    'mystery',
    'romance',
    'documentary',
    'animated',
    'live-action',
    'fantasy',
    'musical',
    'sci-fi',
    'horror',
    'family'
]

function GenreChoice() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', height: '100%' }} >
            <SafeAreaView style={styles.container}>
                <FlatList
                    nestedScrollEnabled={true}
                    data={genres}
                    keyExtractor={genre => genre}
                    renderItem={({ item }) =>
                        <Genres
                            genreName={item}
                            onPress={() => console.log(service)}
                        />
                    }
                />
            </SafeAreaView>
        </ View>
    );
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
    },
    scroll: {
        width: '100%',
        flexWrap: 'wrap',
    }
})

export default GenreChoice;