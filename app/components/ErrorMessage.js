import React from 'react';
import { StyleSheet } from 'react-native';
import AppText from './AppText';

function ErrorMessage({ error }) {
    return (
        <AppText style={[{color: 'yellow'}]}>{error}</AppText>
    );
}

// const styles = StyleSheet.create({
//     errorColor: { color: 'red' }
// })
const styles = StyleSheet.create({
    errorColor: {
      color: "steelblue",
    },
  });

export default ErrorMessage;