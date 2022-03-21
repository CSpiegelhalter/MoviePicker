import React from 'react';
import { StyleSheet, View, Image, FlatList, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel/src/carousel/Carousel';


const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.5);
const ITEM_HEIGHT = Math.round(ITEM_WIDTH * 3 / 5);

function Movie({ movieArray, genre }) {

    return (
        <>

            <FlatList
                // nestedScrollEnabled={true}
                horizontal={true}
                data={movieArray}
                contentContainerStyle={{}}
                keyExtractor={(item, index) => String(index)}
                renderItem={({ item }) =>
                    <View style={styles.container}>
                        <Text>{genre}</Text>
                        <View style={styles.itemContainer}>
                            <Image style={{ height: '100%', width: '100%' }} source={{ uri: item['thumbnail'] }} />
                        </View>
                    </View>
                }
            />


        </>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    },
    itemContainer: {
        width: ITEM_WIDTH,
        height: ITEM_HEIGHT,
        margin: 10,
    },
})

export default Movie;