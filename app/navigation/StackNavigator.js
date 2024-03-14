import { createNativeStackNavigator } from '@react-navigation/native-stack';

import MainScreen from '../screens/MainScreen';
import CheckItemsScreen from '../screens/CheckItemsScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default StackNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: 'tomato',
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
        <Stack.Screen
            name='Login'
            component={LoginScreen}
            options={{ title: 'Login' }}
        />
        <Stack.Screen
            name='Check'
            component={CheckItemsScreen}
            options={{ title: 'Check' }}
        />
    </Stack.Navigator>
);
