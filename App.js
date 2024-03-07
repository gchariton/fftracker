import { StatusBar, StyleSheet, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import MainScreen from './app/screens/MainScreen';
import CheckItemsScreen from './app/screens/CheckItemsScreen';

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: 'brown',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
        }}
    >
        <Stack.Screen
            name='Main'
            component={MainScreen}
            options={{ title: 'KIOUSSIS TRANSYS' }}
        />
        <Stack.Screen name='Check' component={CheckItemsScreen} />
    </Stack.Navigator>
);
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
