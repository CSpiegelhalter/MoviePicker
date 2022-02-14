import React from 'react';
import { Platform, Text, StyleSheet } from 'react-native';
import style from '../config/style';

function AppText({children}) {
    return (
        <Text style={style.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({

})

export default AppText;