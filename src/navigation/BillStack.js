import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartScreen, BillScreen, FeedBackScreen } from '../screens';

const Stack = createNativeStackNavigator();

const screenOptions = ({route}) => ({
  headerShown: false,
})


const BillStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName={'BillScreen'}
      screenOptions = {screenOptions}
    >
      <Stack.Screen
        name= {'BillScreen'}
        component = {BillScreen}
      />
      <Stack.Screen
        name= {'DetailScreen'}
        component = {CartScreen}
      />
      <Stack.Screen
        name= {'FeedBackScreen'}
        component = {FeedBackScreen}
      />
    </Stack.Navigator>
  )
}

export default BillStack