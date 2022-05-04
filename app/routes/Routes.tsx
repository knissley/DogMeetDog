import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from '@react-navigation/native';
import Welcome from '../screens/Welcome';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};
