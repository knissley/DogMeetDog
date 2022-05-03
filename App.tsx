import { Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createContext, useEffect, useState } from 'react';
import { UserInfoContext } from './app/context/userInfoContext';
import axios from 'axios';

// const Stack = createNativeStackNavigator();

export default function App() {
  const [userInfo, setUserInfo] = useState({});

  return (
    <>
      <UserInfoContext.Provider value={{ userInfo, setUserInfo }} >
        <WelcomeScreen />
      </UserInfoContext.Provider>
    </>
  );
}
