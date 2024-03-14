import React from 'react';
import { StyleSheet, View } from 'react-native';

function Screen({ children, style }) {
    return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#CCD0FF',
        borderTopWidth: 2,
        borderTopColor: 'gray',
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
});

export default Screen;
