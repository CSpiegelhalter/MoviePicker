import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel/src/carousel/Carousel';


const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 4);

function Movie({ movieArray }) {

    var renderItem = (item, index) => {

        return (
            <View style={styles.itemContainer}>
                <Image style={{ height: '100%', width: '100%' }} source={{ uri: item.item['thumbnail'] }} />

            </View>
        );
    }

    return (
        <>
            <Carousel
                data={movieArray}
                renderItem={renderItem}
                sliderWidth={1000}
                inactiveSlideShift={0}
                containerCustomStyle={styles.carouselContainer}
                itemWidth={ITEM_WIDTH}
            />


        </>
    );
}

const styles = StyleSheet.create({

    carouselContainer: {
        // width: '100%',
        // alignSelf: 'flex-end',
        marginTop: 50
    },
    itemContainer: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        alignItems: 'center',
        justifyContent: 'center'
        // backgroundColor: 'dodgerblue'
    },
})

export default Movie;