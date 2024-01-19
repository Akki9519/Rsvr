
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from '../screens/Login';
import Welcome from '../screens/Welcome';
import ForgetPassword from '../screens/ForgetPassword';
import Signup from '../screens/Signup';
import HomeNavigation from './HomeNavigation';
import BottomTabNavigation from './BottonTabNavigation';

const Stack = createNativeStackNavigator();

export default function AppNavigation() {
  return (
  <NavigationContainer>
     <Stack.Navigator initialRouteName="Welcome"  screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Dashboard" component={BottomTabNavigation} />
        <Stack.Screen name="Forget" component={ForgetPassword}/>
        <Stack.Screen name="HomeNavigation" component={HomeNavigation}/>
      </Stack.Navigator>
  </NavigationContainer>
  )
}