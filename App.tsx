/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {Component} from 'react';

import LoginScreen from './src/screens/LoginScreen';

const Stack = createNativeStackNavigator();
class App extends Component {
  render(): React.ReactNode {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
