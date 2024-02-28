import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

import Item from './Item';

function ItemsList({ submittedCode }) {
    return (
        <ScrollView style={styles.scrollview}>
            <Item itemCode={submittedCode} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollview: {
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        width: '90%',
    },
});

export default ItemsList;
