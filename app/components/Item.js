import React, { useState } from 'react';
import {
    Alert,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import { playSound } from '../src/playSound';

import { MaterialCommunityIcons } from '@expo/vector-icons';

function Item({ itemCode, onRemoveItem }) {
    const [sound, setSound] = useState(null);

    const handleOnPress = () => {
        Alert.alert(
            'ΠΡΟΣΟΧΗ!',
            'Το αντικείμενο θα αφαιρεθεί!\nΕίστε σίγουροι;',
            [
                {
                    text: 'ΑΚΥΡΟ',
                    onPress: () => console.log('Cancel Pressed'),
                },
                {
                    text: 'ΕΝΤΑΞΕΙ',
                    onPress: () => {
                        onRemoveItem(itemCode);
                        playSound('soundDelete').then(setSound);
                    },
                },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <MaterialCommunityIcons
                    name='cube-outline'
                    size={22}
                    color={'green'}
                />
                <Text style={styles.text}>{itemCode}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <TouchableHighlight
                    underlayColor='gray'
                    onPress={handleOnPress}
                    style={styles.icon}
                >
                    <MaterialCommunityIcons
                        name='trash-can-outline'
                        size={22}
                        color={'brown'}
                    />
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
    },
    icon: {
        padding: 2,
        borderRadius: 25,
    },
    text: {
        fontFamily: 'monospace',
        fontSize: 16,
        marginLeft: 5,
    },
});

export default Item;
