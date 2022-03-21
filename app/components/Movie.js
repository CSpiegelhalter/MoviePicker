import React from 'react';
import { StyleSheet, View, Image, FlatList, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel/src/carousel/Carousel';


const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.5);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 5);

function Movie({ movieArray }) {

    // var renderItem = (item, index) => {

    //     return (
    //         <View style={styles.itemContainer}>
    //             <Image style={{ height: '100%', width: '100%' }} source={{ uri: item['thumbnail'] }} />

    //         </View>
    //     );
    // }

    return (
        <>
            {/* <Carousel
                data={movieArray}
                renderItem={renderItem}
                sliderWidth={SLIDER_WIDTH -50}
                inactiveSlideShift={0}
                contentContainerStyle={styles.carouselContainer}
                itemWidth={ITEM_WIDTH}
                useScrollView={true}   
            /> */}
            <FlatList
                // nestedScrollEnabled={true}
                horizontal={true}
                data={movieArray}
                contentContainerStyle={{}}
                keyExtractor={(item, index) => String(index)}
                renderItem={({ item }) =>
                <View style={styles.itemContainer}>
                    <Image style={{ height: '100%', width: '100%' }} source={{ uri: item['thumbnail'] }} />
                    </View>
                }
            />


        </>
    );
}

const styles = StyleSheet.create({

    carouselContainer: {
        // width: '100%',
        // alignSelf: 'flex-end',
        // flex: 1,
        // left:0,
        // justifyContent: '',
        marginTop: 50
    },
    itemContainer: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        margin: 10,
        // alignItems: 'center',
        // justifyContent: 'center'
        // backgroundColor: 'dodgerblue'
    },
})

export default Movie;