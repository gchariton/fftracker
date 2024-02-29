import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Item from './Item';

function ItemsList({ submittedCode }) {
    const [itemsList, setItemsList] = useState([]);

    useEffect(() => {
        // Fetch or process submittedCode here and update the itemsList state accordingly
        if (submittedCode) {
            const newItem = { id: Date.now(), itemCode: submittedCode };
            setItemsList((prevItems) => [...prevItems, newItem]);
        }
    }, [submittedCode]);

    return (
        <View style={styles.container}>
            <FlatList
                data={itemsList}
                renderItem={({ item }) => (
                    <View key={item.id}>
                        <Item itemCode={item.itemCode} />
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        width: '90%',
    },
});

export default ItemsList;
