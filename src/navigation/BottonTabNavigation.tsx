import React from 'react'
import {Image } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeNavigation from './HomeNavigation';
import MyNotification from '../screens/MyNotification';

import Profile from '../screens/Profile';
const Tab = createMaterialBottomTabNavigator();
export default function BottomTabNavigation() {
  return ( <Tab.Navigator
     initialRouteName='Home'
       screenOptions={{ 
       }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigation}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <Image source={require("../assets/images/icons/Home.png")} style={{height:30 ,width:30 ,tintColor: focused ? "red":"black"}}/>
           
          ),
        }}
      />
<Tab.Screen
        name="Notification"
        component={MyNotification}
        options={{
          tabBarIcon: ({ focused}) => (
            <Image source={require("../assets/images/icons/bell.png")} style={{height:30 ,width:30 ,tintColor: focused ? "red":"black"}}/>
          ),
        }}
      />
      
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused}) => (
            <Image source={require("../assets/images/icons/user.png")} style={{height:30 ,width:30 ,tintColor: focused ? "red":"black"}}/>
          ),
        }}
      />
  
  </Tab.Navigator>
  )
    }
