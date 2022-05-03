import { Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createContext, useState } from 'react';

// const Stack = createNativeStackNavigator();

export const UserContext = createContext('');

export default function App() {
  let globalEmail = '';
  const setGlobalEmail = (email: string) => {
    globalEmail = email;
  }

  return (
    <>
      <UserContext.Provider value={globalEmail}>
        <WelcomeScreen setGlobalEmail={setGlobalEmail} />
      </UserContext.Provider>
    </>
  );
}
