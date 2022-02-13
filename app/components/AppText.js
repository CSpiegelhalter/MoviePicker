import React from 'react';
import { Platform, Text, StyleSheet } from 'react-native';
import style from '../config/style';

function AppText({children}) {
    return (
        <Text style={style.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    // text: {
       
    //     ...Platform.select({
    //         ios: {
    //             fontSize: 20,
    //             fontFamily: 'Avenir'
    //         },
    //         android: {
    //             fontSize: 18,
    //             fontFamily: 'Roboto'
    //         }
    //     })
    // }
})

export default AppText;