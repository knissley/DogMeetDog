import { Text, View } from 'react-native';
import WelcomeScreen from './app/screens/WelcomeScreen';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <WelcomeScreen />
  );
}
