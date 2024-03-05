import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ButtonSquare from '../components/ButtonSquare';

function MainScreen({}) {
    return (
        <View style={styles.container}>
            <ButtonSquare icon={'login-variant'} title={'Login'} />
            <ButtonSquare
                icon={'archive-arrow-down-outline'}
                title={'Receiving'}
            />
            <ButtonSquare icon={'archive-check-outline'} title={'Check In'} />
            <ButtonSquare
                icon={'order-bool-descending-variant'}
                title={'Pick Order'}
            />
            <ButtonSquare
                icon={'package-variant-closed'}
                title={'Pack Order'}
            />
            <ButtonSquare icon={'transfer'} title={'Transfer'} />
            <ButtonSquare
                icon={'axis-z-rotate-counterclockwise'}
                title={'Cycle Count'}
            />
            <ButtonSquare icon={'check-circle-outline'} title={'Check'} />
            <ButtonSquare icon={'printer-pos'} title={'Print'} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: '100%',
        justifyContent: 'center',
        width: '100%',
    },
});

export default MainScreen;
