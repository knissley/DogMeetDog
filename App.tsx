import { Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createContext, useEffect, useState } from 'react';
import { UserInfoContext } from './app/context/userInfoContext';

// const Stack = createNativeStackNavigator();
type UserInfo = {
  id?: number;
  email?: string;
  isLoggedIn?: boolean;
  name?: string;
};
const UserInfo: UserInfo = {};

export default function App() {
  const [userInfo, setUserInfo] = useState(UserInfo);

  return (
    <>
      <UserInfoContext.Provider value={{ userInfo, setUserInfo }} >
        {userInfo?.isLoggedIn ? console.log('logged in') : console.log('not logged in')}
        <WelcomeScreen />
      </UserInfoContext.Provider>
    </>
  );
}
