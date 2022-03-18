import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Genres from '../components/Genres';
import AppText from '../components/AppText';
import allMovies from '../api/allMovies';


const genres = [
    'Comedy ',
    'Drama',
    'Adventure',
    'Action',
    'Romantic',
    'Crime',
    'Thriller',
    'Mystery',
    'Romance',
    'Documentaries',
    'Animated',
    'Live-action',
    'Fantasy',
    'Musical',
    'Sci-Fi',
    'Horror',
    'TV Shows',
    'Family'
]

function GenreChoice({ route }) {
    const navigation = useNavigation();
    const [genreSelect, setGenreSelect] = useState([])
    const services = route.params.services

    useEffect(() => {

    }, [genreSelect]);

    const editServices = (genre) => {
        if (!(genreSelect.includes(genre))) {
            setGenreSelect([...genreSelect, genre])
        }
        else {
            let holder = genreSelect.filter((a) => a !== genre)
            setGenreSelect(holder)
        }
        console.log(genreSelect);
    }

    return (
        <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', height: '100%' }} >
            <SafeAreaView style={styles.container}>
            <AppText style={{alignSelf: 'center', margin: 'auto', color: 'black'}}>Choose Genres:</AppText>
                <FlatList
                    nestedScrollEnabled={true}
                    data={genres}
                    keyExtractor={genre => genre}
                    renderItem={({ item }) =>
                        <Genres
                            genreName={item}
                            onPress={() => editServices(item)}
                        />
                    }
                />
                <Button
                title="Next: Choose movies/shows" 
                // onPress={() => console.log(services)}
                onPress={() => console.log(allMovies.allNetflix(services, genreSelect))}
                />
            </SafeAreaView>
        </ View>
    );
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
    },
    scroll: {
        width: '100%',
        flexWrap: 'wrap',
    }
})

export default GenreChoice;