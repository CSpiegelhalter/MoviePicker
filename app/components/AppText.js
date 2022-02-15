import React from 'react';
import { Platform, Text, StyleSheet } from 'react-native';
import defaultStyle from '../config/defaultStyle';

function AppText({children}) {
    return (
        <Text style={defaultStyle.text} >{children}</Text>
    );
}

// const styles = StyleSheet.create({

// })

export default AppText;