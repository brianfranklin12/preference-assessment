import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Main from './Main';
import About from './screens/About';
import { StatusBar } from 'react-native';

const Drawer = createDrawerNavigator();

export default function App() {
 
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Drawer.Navigator>
        <Drawer.Screen name="App" component={Main} /> 
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}