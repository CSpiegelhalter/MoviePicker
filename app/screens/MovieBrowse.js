import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, Dimensions, FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Movie from '../components/Movie';
import Genres from '../components/Genres';
import AppText from '../components/AppText';
import allMovies from '../api/allMovies';


const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);


function MovieBrowser({ route }) {
    const navigation = useNavigation();
    const movies = route.params.movies
    const movieKeys = Object.keys(movies);

    return (
        <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', height: '100%' }} >
            <SafeAreaView style={styles.container}>
                <FlatList
                    nestedScrollEnabled={true}
                    data={movieKeys}
                    keyExtractor={movie => movie}
                    renderItem={({ item }) =>
                        <Movie
                            movieArray={movies[item]}
                        />
                    }
                />

            </SafeAreaView>
        </ View>
    );
}

const styles = StyleSheet.create({

    container: {
        // width: '100%',
        height: '100%',
        // flex: 1,
        // alignItems: 'flex-end'
        // flexDirection: 'row'
    }
})

export default MovieBrowser;