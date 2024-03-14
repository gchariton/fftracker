import React from 'react';
import { StyleSheet } from 'react-native';

import ButtonSquare from '../components/ButtonSquare';
import Screen from './Screen';

function MainScreen({ navigation }) {
    return (
        <Screen style={styles.container}>
            <ButtonSquare
                icon={'login-variant'}
                title={'Login'}
                onPress={() => navigation.navigate('Login')}
            />
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
            <ButtonSquare
                icon={'check-circle-outline'}
                title={'Check'}
                onPress={() => navigation.navigate('Check')}
            />
            <ButtonSquare icon={'printer-pos'} title={'Print'} />
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});

export default MainScreen;
