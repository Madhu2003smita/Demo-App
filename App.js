import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/LoginScreen';
import RegisterScreen from './src/RegisterScreen';
import InboxScreen from './src/InboxScreen';
//import HomeScreen from './src/HomeScreen';
//import LanguageSelector from './src/LanguageSelector';

const Stack = createStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name=" " component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Inbox" component={InboxScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
