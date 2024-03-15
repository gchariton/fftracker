import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { playSound } from '../src/playSound';

import colors from '../config/colors';
import Item from './Item';

function ItemsList({ isTriggered, scannedCode }) {
    const [itemsList, setItemsList] = useState([]);
    const [sound, setSound] = useState(null);

    useEffect(() => {
        if (scannedCode) {
            // Check if the submitted code already exists in itemsList
            if (!itemsList.some((item) => item.itemCode === scannedCode)) {
                // If it doesn't exist, add it to the list
                const newItem = { id: Date.now(), itemCode: scannedCode };
                setItemsList((prevItems) => [...prevItems, newItem]);
                playSound('soundAccept').then(setSound);
            } else {
                playSound('soundError').then(setSound);
            }
        }
    }, [isTriggered, scannedCode]);

    const removeItem = (itemCodeToRemove) => {
        setItemsList(
            itemsList.filter((item) => item.itemCode !== itemCodeToRemove)
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.counter}>
                <Text>
                    Συνολικά:{' '}
                    <Text style={{ fontWeight: 'bold' }}>
                        {itemsList.length}
                    </Text>
                </Text>
            </View>
            <View style={styles.listcontainer}>
                <FlatList
                    data={itemsList}
                    renderItem={({ item }) => (
                        <Item
                            key={item.id}
                            itemCode={item.itemCode}
                            onRemoveItem={removeItem}
                        />
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={styles.separator} />
                    )}
                    ListEmptyComponent={
                        <Text style={{ padding: 5 }}>Κενή λίστα...</Text>
                    }
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        width: '100%',
    },
    counter: {
        padding: 10,
    },
    listcontainer: {
        backgroundColor: colors.white,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: colors.secondary,
        elevation: 5,
        flex: 1,
        marginBottom: 10,
        width: '90%',
    },
    separator: {
        height: 1,
        backgroundColor: colors.black,
    },
});

export default ItemsList;
