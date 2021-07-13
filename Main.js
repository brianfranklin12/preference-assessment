import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './screens/Welcome';
import Setup from './screens/Setup';
import Items from './screens/Items';

const Stack = createStackNavigator();

export default function Main() {
 
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} /> 
      <Stack.Screen name="Setup" component={Setup} />
      <Stack.Screen name="Items" component={Items} />
    </Stack.Navigator>
  );
}