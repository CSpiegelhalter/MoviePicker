import React from 'react';
// import { View, StyleSheet } from 'react-native-web';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { View, StyleSheet, TextInput } from 'react-native';

function InputBox({ icon, name, setValue, hidden }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} size={20} color='#4A4847' style={styles.icon} />}
            <TextInput style={styles.trxtInput} placeholder={name} onChangeText={(text) => setValue(text)} secureTextEntry={hidden} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F3EE',
        borderRadius: 25,
        flexDirection: 'row',
        width: '95%',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10,
        
    },
    textInput: {
        fontSize: 18,
        color: '#0c0c0c'
        // fontFamily: 
    }
})




export default InputBox;