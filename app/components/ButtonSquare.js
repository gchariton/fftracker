import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
function ButtonSquare({ icon, title, onPress }) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <MaterialCommunityIcons name={icon} size={40} style={styles.icon} />
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'gray',
        borderWidth: 2,
        borderRadius: 10,
        height: 100,
        justifyContent: 'center',
        marginBottom: 10,
        marginRight: 10,
        width: 150,
    },
    icon: {
        color: 'dodgerblue',
        padding: 3,
    },
    text: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ButtonSquare;
