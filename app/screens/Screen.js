import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../config/colors';

function Screen({ children, style }) {
    return <View style={[styles.container, style]}>{children}</View>;
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,
        borderTopColor: colors.secondary,
        borderTopWidth: 2,
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
});

export default Screen;
