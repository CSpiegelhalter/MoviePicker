import React from 'react';
import { SafeAreaView, StyleSheet, View, TouchableWithoutFeedback, FlatList, Button } from 'react-native';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

function Movie({ url }) {


    
    return (
        <>
            <TouchableWithoutFeedback>
                <Image style={styles.container} source={url} />
            </TouchableWithoutFeedback>


        </>
    );
}

const styles = StyleSheet.create({

    container: {
        width: '75%',
        height: '75%',

    }
})

export default Movie;