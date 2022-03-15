import React from 'react';
import { SafeAreaView, StyleSheet, View, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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