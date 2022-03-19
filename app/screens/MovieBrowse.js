import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Movie from '../components/Movie';
import Genres from '../components/Genres';
import AppText from '../components/AppText';
import allMovies from '../api/allMovies';

function MovieBrowser({ route }) {
    const navigation = useNavigation();
    const movies = route.params.services

    console.log(movies);

    _renderItem = movies.map((item, index) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{ item.title }</Text>
            </View>
        );
    })

    return (
        <View style={{ flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', height: '100%' }} >
            <SafeAreaView style={styles.container}>
               
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