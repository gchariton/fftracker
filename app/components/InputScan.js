import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';

function InputScan({ onCodeSubmit }) {
    const [inputCode, setInputCode] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    function handleOnFocus() {
        setIsFocused(true);
    }

    function handleOnFocus() {
        setIsFocused(true);
    }

    const handleInputSubmit = () => {
        onCodeSubmit(inputCode);
        setInputCode('');
    };

    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                name='qrcode-scan'
                size={30}
                style={styles.icon}
            />
            <TextInput
                style={styles.textinput}
                onFocus={handleOnFocus}
                value={inputCode}
                onChangeText={setInputCode}
                onSubmitEditing={handleInputSubmit}
                autoFocus={true}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 5,
        flexDirection: 'row',
        height: 50,
        width: '90%',
    },
    icon: {
        padding: 5,
    },
    textinput: {
        fontSize: 20,
        fontWeight: 'bold',
        padding: 5,
        width: '100%',
    },
});

export default InputScan;
