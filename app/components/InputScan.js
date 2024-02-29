import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Audio } from 'expo-av';

import { MaterialCommunityIcons } from '@expo/vector-icons';

function InputScan({ onCodeSubmit }) {
    const [inputCode, setInputCode] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [sound, setSound] = useState(null);

    async function playSound() {
        const { sound } = await Audio.Sound.createAsync(
            require('../sounds/soundAccept.wav')
        );
        setSound(sound);
        await sound.playAsync();
    }

    function handleOnFocus() {
        setIsFocused(true);
    }

    const handleInputSubmit = () => {
        onCodeSubmit(inputCode);
        playSound();
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
                placeholder={isFocused ? '' : 'Enter QR code...'}
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
        borderWidth: 1,
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
