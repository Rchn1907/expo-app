import MyView from "./MyView";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from "./Detail";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Test App"
                    component={MyView}
                    options={{
                        headerTintColor: 'white',
                        headerStyle: { backgroundColor: 'darkblue' }
                    }}
                />
                <Stack.Screen name="Detail" component={Detail}
                              options={{
                                  headerTintColor: 'white',
                                  headerStyle: { backgroundColor: 'darkblue' }
                              }}/>
            </Stack.Navigator>
        </NavigationContainer>
  );
}

