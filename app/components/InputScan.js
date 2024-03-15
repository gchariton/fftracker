import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';

function InputScan({ onCodeSubmit }) {
    const [inputCode, setInputCode] = useState('');
    const [isFocused, setIsFocused] = useState(false);

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
        backgroundColor: colors.white,
        borderWidth: 2,
        borderColor: colors.secondary,
        borderRadius: 5,
        flexDirection: 'row',
        elevation: 5,
        height: 50,
        marginTop: 20,
        width: '90%',
    },
    icon: {
        color: colors.primary,
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
