import { StatusBar, StyleSheet, View } from 'react-native';

import CheckItemsScreen from './app/screens/CheckItemsScreen';
import MainScreen from './app/screens/MainScreen';

export default function App() {
    return (
        <View style={styles.container}>
            <MainScreen />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#CCD0FF',
        alignItems: 'center',
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
});
