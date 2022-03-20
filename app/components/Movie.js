import React from 'react';
import { SafeAreaView, StyleSheet, View, Image, Dimensions, TouchableWithoutFeedback, FlatList, Button } from 'react-native';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import Carousel from 'react-native-snap-carousel/src/carousel/Carousel';


const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

function Movie({ movieArray }) {
    console.log('hey?');

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
        <>
            <Carousel
                    //   ref={(c) => { this._carousel = c; }}
                    data={movieArray}
                    renderItem={renderItem}
                    sliderWidth={1000}
                    containerCustomStyle={styles.carouselContainer}
                    itemWidth={ITEM_WIDTH}
                // itemHeight={250}
            />
  

        </>
    );
}

const styles = StyleSheet.create({

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
})

export default Movie;