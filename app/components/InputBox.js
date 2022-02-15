import React from 'react';
// import { View, StyleSheet } from 'react-native-web';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { View, StyleSheet, TextInput } from 'react-native';
import style from '../config/defaultStyle';

function InputBox({ icon, name, setValue, hidden, value, change, textContentType, autoCapitalize, autoCorrect }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color='#4A4847' style={styles.icon} />}
            <TextInput 
            style={style.text} 
            textContentType={textContentType}
            autoCapitalize={autoCapitalize}
            placeholder={name} 
            autoCorrect={autoCorrect}
            onChangeText={change}
            value={value}
            secureTextEntry={hidden} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F3EE',
        borderRadius: 25,
        flexDirection: 'row',
        flex: 1,
        // justifyContent:'center',
        alignItems: 'center',
        width: '95%',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10,
        margin: 'auto'
        
    }
})




export default InputBox;