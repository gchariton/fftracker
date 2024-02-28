import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

function Item({ itemCode }) {
    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                name='cube-outline'
                size={20}
                color={'green'}
                style={styles.icon}
            />
            <Text style={styles.text}>{itemCode}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
    },
    text: {
        fontFamily: 'monospace',
        fontSize: 16,
        marginLeft: 5,
    },
});

export default Item;
