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

        <SafeAreaView style={styles.container}>
            <FlatList
                nestedScrollEnabled={true}
                data={movieKeys}
                contentContainerStyle={{ margin: 10 }}
                keyExtractor={(item, index) => String(index)}
                renderItem={({ item }) =>
                    <View style={styles.container}>
                        <Text>{item}</Text>
                        <Movie
                            movieArray={movies[item]}
                        />
                    </View>
                }
            />

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({

    container: {
        marginTop: 50
    }
})

export default MovieBrowser;