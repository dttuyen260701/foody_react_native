import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {CartScreen, PickMapScreen} from '../screens'

const Stack = createNativeStackNavigator();

const screenOptions = ({route}) => ({
  headerShown: false,
})

const CartStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName={'CartScreen'}
      screenOptions = {screenOptions}
    >
      <Stack.Screen
        name= {'CartScreen'}
        component = {CartScreen}
        initialParams = {{for_screen:true}}
      />
      <Stack.Screen
        name= {'PickMapScreen'}
        component = {PickMapScreen}
      />
    </Stack.Navigator>
  )
}

export default CartStack