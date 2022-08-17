import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CONTANTS } from '../contants';
import {FoodDetailScreen, FoodScreen} from '../screens'

const Stack = createNativeStackNavigator();

const screenOptions = ({route}) => ({
  headerShown: false,
})

const FoodStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName={CONTANTS.FOODS_SCREEN}
      screenOptions = {screenOptions}
    >
      <Stack.Screen
        name= {'FoodScreen'}
        component = {FoodScreen}
      />
      <Stack.Screen
        name= {'DetailScreen'}
        component = {FoodDetailScreen}
      />
    </Stack.Navigator>
  )
}

export default FoodStack