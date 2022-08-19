import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BillDetailScreen, BillScreen } from '../screens';

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
        component = {BillDetailScreen}
      />
    </Stack.Navigator>
  )
}

export default BillStack