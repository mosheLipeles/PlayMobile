import 'react-native-gesture-handler';

import React from 'react';
import Intro from "./app/Intro"
import Menu from "./app/screens/MenuScreen";
import RCP from "./app/screens/RCPScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class App extends React.Component {
    render() {
        const Stack = createStackNavigator();
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Intro"
                        component={Intro}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="Menu"
                        component={Menu}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="RCP"
                        component={RCP}
                        options={{ headerShown: false }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}