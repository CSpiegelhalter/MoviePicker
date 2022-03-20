import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Movie from '../components/Movie';
import Carousel from 'react-native-snap-carousel/src/carousel/Carousel';
import Genres from '../components/Genres';
import AppText from '../components/AppText';
import allMovies from '../api/allMovies';

function MovieBrowser({ route }) {
    const navigation = useNavigation();
    const movies = route.params.movies
    const movieKeys = Object.keys(movies);
    console.log(movies);

    var renderItem = (item, index) => {
        console.log(movies[item][index]);
        return (
            <Movie url={movies[item]['thumbnail']} />
        );
    }

    return (
        <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', height: '100%' }} >
            <SafeAreaView style={styles.container}>
                {movieKeys.map((item, index) => {
                    <Carousel
                        //   ref={(c) => { this._carousel = c; }}
                        data={movies[item]}
                        renderItem={renderItem}
                        sliderWidth={1000}
                        itemWidth={25}
                        itemHeight={25}
                    />
                })

                }
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

export default MovieBrowser;