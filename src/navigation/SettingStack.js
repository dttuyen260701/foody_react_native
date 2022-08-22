import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CONTANTS } from '../contants';
import {SettingScreen} from '../screens'

const Stack = createNativeStackNavigator();

const screenOptions = ({route}) => ({
  headerShown: false,
})

const SettingStack = () => {
  return (
    <Stack.Navigator 
      initialRouteName={'SettingsScreen'}
      screenOptions = {screenOptions}
    >
      <Stack.Screen
        name='SettingsScreen'
        component={SettingScreen}
      />
    </Stack.Navigator>
  )
}

export default SettingStack