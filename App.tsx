import Welcome from './app/screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { UserInfoContext } from './app/context/userInfoContext';
import Search from './app/screens/Search';
import Register from './app/screens/Register';
import Filter from './app/screens/Filter';
import { navigationRef } from './app/routes/RootNavigation';
import Profile from './app/screens/Profile';
import Messages from './app/screens/Messages';
import Chat from './app/screens/Chat';

const Stack = createNativeStackNavigator();

type UserInfo = {
  id?: number;
  email?: string;
  isLoggedIn?: boolean;
  name?: string;
};
const UserInfo: UserInfo = {};

const headerOptions = {
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerTintColor: '#FB9114',
  headerTitleStyle: {
    fontSize: 20,
  },
};

export default function App() {
  const [userInfo, setUserInfo] = useState(UserInfo);

  return (
    <>
      <UserInfoContext.Provider value={{ userInfo, setUserInfo }} >
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator>
            <Stack.Group>
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
            </Stack.Group>
            <Stack.Group>
              <Stack.Screen
                name="Search"
                component={Search}
                options={{
                  ...headerOptions,
                  animation: 'fade',
                }}
              />
              <Stack.Screen
                name="Filter"
                component={Filter}
                options={{
                  ...headerOptions,
                  presentation: 'modal'
                }}
              />
            </Stack.Group>
            <Stack.Group>
              <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                  ...headerOptions,
                  animation: 'fade',
                }}
              />
            </Stack.Group>
            <Stack.Group>
              <Stack.Screen
                name="Messages"
                component={Messages}
                options={{
                  ...headerOptions,
                  animation: 'fade',
                }}
              />
              <Stack.Screen
                name="Chat"
                component={Chat}
                options={{
                  ...headerOptions,
                  animation: 'simple_push',
                }}
              />
            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
      </UserInfoContext.Provider>
    </>
  );
};

