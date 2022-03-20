import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, Dimensions, FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Movie from '../components/Movie';
import Carousel from 'react-native-snap-carousel/src/carousel/Carousel';
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
    // console.log(movies['Crime'][0]['thumbnail']);



    var renderItem = (item, index) => {
        console.log(item.item['thumbnail']);
        // console.log(movies['Action']);
        return (
            <View style={styles.itemContainer}>
                <Image style={{height: '100%', width: '100%'}} source={{ uri: item.item['thumbnail'] }} />

            </View>
        );
    }

    return (
        <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', height: '100%' }} >
            <SafeAreaView style={styles.container}>
                {/* {movieKeys.map((item, index) => { */}
                <Carousel
                    //   ref={(c) => { this._carousel = c; }}
                    data={movies['Action']}
                    renderItem={renderItem}
                    sliderWidth={1000}
                    containerCustomStyle={styles.carouselContainer}
                    itemWidth={ITEM_WIDTH}
                // itemHeight={250}
                />
                {/* }) */}


            </SafeAreaView>
        </ View>
    );
}

const styles = StyleSheet.create({

    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        flexDirection: 'row'
    },
    carouselContainer: {
        marginTop: 50
    },
    itemContainer: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'dodgerblue'
    },
    scroll: {
        width: '100%',
        flexWrap: 'wrap',
    }
})

export default MovieBrowser;