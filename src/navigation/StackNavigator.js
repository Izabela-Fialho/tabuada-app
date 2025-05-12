import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import MenuScreen from '../screens/MenuScreen'; 
import TabuadaScreen from '../screens/TabuadaScreen';
import PracticeScreen from '../screens/PracticeScreen';
import RandomPracticeScreen from '../screens/RandomPracticeScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Menu" component={MenuScreen} />
      <Stack.Screen name="Tabuada" component={TabuadaScreen} />
      <Stack.Screen name="Prática" component={PracticeScreen} />
      <Stack.Screen name="Tabuada Aleatória" component={RandomPracticeScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
