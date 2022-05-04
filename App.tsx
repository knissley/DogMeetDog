import { Text, View } from 'react-native';
import Welcome from './app/screens/Welcome';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createContext, useEffect, useState } from 'react';
import { UserInfoContext } from './app/context/userInfoContext';
import Home from './app/screens/Home';
import Register from './app/screens/Register';

const Stack = createNativeStackNavigator();

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
        {
          userInfo?.isLoggedIn
            ? <Home />
            : (
              <NavigationContainer>
                <Stack.Navigator>
                  <Stack.Screen
                    name="Welcome"
                    component={Welcome}
                    options={{
                      header: () => null
                    }}
                  />
                  <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{
                      headerStyle: {
                        backgroundColor: '#fff',
                      },
                      headerTintColor: '#FB9114',
                      headerTitleStyle: {
                        fontSize: 20,
                      },
                    }}
                  />
                </Stack.Navigator>
              </NavigationContainer>
            )
        }
      </UserInfoContext.Provider>
    </>
  );
}
