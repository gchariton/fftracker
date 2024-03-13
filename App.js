import { StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import StackNavigator from './app/navigation/StackNavigator';
export default function App() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
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
