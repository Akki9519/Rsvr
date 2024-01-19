import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreeen from '../screens/HomeScreeen';
import BookingSummary from '../component/BookingSummary';
import Detail from '../component/Detail';
const HomeStack = createNativeStackNavigator();

export default function HomeNavigation() {
  return (
    <>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Screen"
          component={HomeScreeen}
          options={{headerShown: false}}
        />

        <HomeStack.Screen name="Detail" component={Detail} />
        <HomeStack.Screen name="Booking Form" component={BookingSummary} />
      </HomeStack.Navigator>
    </>
  );
}

const styles = StyleSheet.create({});
