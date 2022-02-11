import React from 'react';
import { View, StyleSheet } from 'react-native-web';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TextInput } from 'react-native';

function InputBox({ icon, name, setValue, hidden }) {
    return (
        <View style={styles.container}>
            {icon && <MaterialCommunityIcons name={icon} />}
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
    textInput: {
        fontSize: 18,
        // fontFamily: 
    }
})




export default InputBox;