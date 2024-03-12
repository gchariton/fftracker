import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import InputScan from '../components/InputScan';
import ItemsList from '../components/ItemsList';

function CheckItemsScreen({}) {
    const [submittedCode, setSubmittedCode] = useState('');
    const [trigger, setTrigger] = useState(false);

    const handleCodeSubmit = (code) => {
        setSubmittedCode(code);
        setTrigger(!trigger);
    };

    return (
        <View style={styles.container}>
            <InputScan onCodeSubmit={handleCodeSubmit} />
            <ItemsList scannedCode={submittedCode} isTriggered={trigger} />
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
