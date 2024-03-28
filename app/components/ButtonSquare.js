import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

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
        backgroundColor: colors.primary,
        borderColor: colors.secondary,
        borderWidth: 2,
        borderRadius: 10,
        elevation: 5,
        height: '15%',
        justifyContent: 'center',
        margin: 5,
        width: '40%',
    },
    icon: {
        color: colors.white,
        padding: 3,
    },
    text: {
        color: colors.black,
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ButtonSquare;
