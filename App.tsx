import { Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createContext, useState } from 'react';
import { UserInfoContext } from './app/context/userInfoContext';

// const Stack = createNativeStackNavigator();

export default function App() {
  const [globalEmail, setGlobalEmail] = useState('');

  console.log('global email in app: ', globalEmail);

  return (
    <>
      <UserInfoContext.Provider value={{ globalEmail, setGlobalEmail }} >
        <WelcomeScreen />
      </UserInfoContext.Provider>
    </>
  );
}
