import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import Screen from './Screen';
import colors from '../config/colors';

function LoginScreen(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleOnPress = () => {
        if (username === 'admin' && password === 'admin') {
            setUsername('');
            setPassword('');
            setErrorMsg('');
            props.navigation.navigate('Check');
        } else {
            setErrorMsg('Please check your credentials...');
            setUsername('');
            setPassword('');
        }
    };
    return (
        <Screen>
            <View style={styles.logincard}>
                <TextInput
                    style={styles.input}
                    placeholder='Username'
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <TouchableOpacity style={styles.button} onPress={handleOnPress}>
                    <Text style={styles.text}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.errorblock}>
                <Text style={styles.errortext}>{errorMsg}</Text>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 10,
        margin: 10,
        padding: 10,
    },
    errorblock: {
        justifyContent: 'left',
        width: '90%',
    },
    errortext: {
        color: 'red',
        fontSize: 15,
        textAlign: 'left',
        padding: 20,
    },
    input: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 10,
        margin: 10,
        padding: 10,
    },
    logincard: {
        backgroundColor: colors.white,
        borderWidth: 2,
        borderColor: colors.secondary,
        borderRadius: 10,
        elevation: 5,
        paddind: 20,
        width: '90%',
    },
    text: {
        color: colors.black,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default LoginScreen;
