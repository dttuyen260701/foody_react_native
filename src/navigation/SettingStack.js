import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CONTANTS } from '../contants';
import {AboutUs, AboutUsScreen, InformationScreen, LoginScreen, RegisterScreen, SettingScreen, TOSScreen} from '../screens'

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
      <Stack.Screen
        name='LoginScreen'
        component={LoginScreen}
      />
      <Stack.Screen
        name='ResgisterScreen'
        component={RegisterScreen}
      />
      <Stack.Screen
        name='InformationScreen'
        component={InformationScreen}
      />
      <Stack.Screen
        name='AboutUsScreen'
        component={AboutUsScreen}
      />
      <Stack.Screen
        name='TOSScreen'
        component={TOSScreen}
      />
    </Stack.Navigator>
  )
}

export default SettingStack