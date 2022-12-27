import MyView from "./MyView";
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from "./Detail";
import HatimCounter from "./HatimCounter";
import Countries from "./Countries";
import CountryDetail from "./CountryDetail";
import QuizPicker from "./QuizPicker";
import Quiz from "./Quiz";

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
                <Stack.Screen name="Find Capital" component={Detail}
                              options={{
                                  headerTintColor: 'white',
                                  headerStyle: { backgroundColor: 'darkblue' }
                              }}/>
                <Stack.Screen name="Hatim Counter" component={HatimCounter}
                            options={{
                                headerTintColor: 'white',
                                headerStyle: { backgroundColor: 'darkblue' }
                }}/>
                <Stack.Screen name="Countries" component={Countries}
                              options={{
                                  headerTintColor: 'white',
                                  headerStyle: { backgroundColor: 'darkblue' }
                              }}/>
                <Stack.Screen name="CountryDetail" component={CountryDetail}
                              options={{
                                  title: 'Detail',
                                  headerTintColor: 'white',
                                  headerStyle: { backgroundColor: 'darkblue' }
                              }}/>
                <Stack.Screen name="QuizPicker" component={QuizPicker}
                              options={{
                                  title: 'Pick Quiz',
                                  headerTintColor: 'white',
                                  headerStyle: { backgroundColor: 'darkblue' }
                              }}/>
                <Stack.Screen name="Quiz" component={Quiz}
                              options={{
                                  title: 'Quiz',
                                  headerTintColor: 'white',
                                  headerStyle: { backgroundColor: 'darkblue' }
                              }}/>
            </Stack.Navigator>
        </NavigationContainer>
  );
}

