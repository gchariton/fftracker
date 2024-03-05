import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { playSound } from '../src/playSound';

import Item from './Item';

function ItemsList({ submittedCode }) {
    const [itemsList, setItemsList] = useState([]);
    const [sound, setSound] = useState(null);

    useEffect(() => {
        if (submittedCode) {
            // Check if the submitted code already exists in itemsList
            if (!itemsList.some((item) => item.itemCode === submittedCode)) {
                // If it doesn't exist, add it to the list
                const newItem = { id: Date.now(), itemCode: submittedCode };
                setItemsList((prevItems) => [...prevItems, newItem]);
                playSound('soundAccept').then(setSound);
            } else {
                playSound('soundError').then(setSound);
            }
        }
    }, [submittedCode]);

    const removeItem = (itemCodeToRemove) => {
        setItemsList(
            itemsList.filter((item) => item.itemCode !== itemCodeToRemove)
        );
    };

    return (
        <View style={styles.container}>
            <View style={styles.counter}>
                <Text>Συνολικά: {itemsList.length}</Text>
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
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    counter: {
        padding: 10,
    },
    listcontainer: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        width: '90%',
    },
    separator: {
        height: 1,
        backgroundColor: 'black',
    },
});

export default ItemsList;
