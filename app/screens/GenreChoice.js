import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Genres from '../components/Genres';


const genres = [
    'Comedy ',
    'Drama',
    'Adventure',
    'Action',
    'Romantic Comedy',
    'Crime',
    'Thriller',
    'Mystery',
    'Romance',
    'Documentary',
    'Animated',
    'Live-action',
    'Fantasy',
    'Musical',
    'Sci-fi',
    'Horror',
    'Family'
]

function GenreChoice() {
    const navigation = useNavigation();
    const [genreSelect, setGenreSelect] = useState([])

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
                onPress={() => console.log(genreSelect)}
                />
            </SafeAreaView>
        </ View>
    );
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        // flexDirection: 'row',
        // justifyContent: 'center'
    },
    scroll: {
        width: '100%',
        flexWrap: 'wrap',
    }
})

export default GenreChoice;