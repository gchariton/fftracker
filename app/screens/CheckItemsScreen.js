import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InputScan from '../components/InputScan';
import ItemsList from '../components/ItemsList';

function CheckItemsScreen({}) {
    const [submittedCode, setSubmittedCode] = useState('');

    const handleCodeSubmit = (code) => {
        setSubmittedCode(code);
    };

    return (
        <View style={styles.container}>
            <InputScan onCodeSubmit={handleCodeSubmit} />
            <ItemsList submittedCode={submittedCode} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#CCD0FF',
        flex: 1,
        width: '100%',
    },
});

export default CheckItemsScreen;
