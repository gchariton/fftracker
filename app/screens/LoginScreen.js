import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import Screen from './Screen';

function LoginScreen(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleOnPress = () => {
        if (username === 'admin' && password === 'admin') {
            setErrorMsg('');
            props.navigation.navigate('Check');
        } else {
            setErrorMsg('Please check again your credentials.');
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
                    <Text style={styles.text}>Submit</Text>
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
        backgroundColor: 'tomato',
        borderWidth: 1,
        borderColor: 'gray',
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
        fontWeight: 'bold',
        textAlign: 'left',
        padding: 20,
    },
    input: {
        fontSize: 20,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        margin: 10,
        padding: 10,
    },
    logincard: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'gray',
        borderRadius: 10,
        elevation: 5,
        paddind: 20,
        shadowColor: 'black',
        shadowOffset: {
            height: 2,
            width: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        width: '90%',
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default LoginScreen;
