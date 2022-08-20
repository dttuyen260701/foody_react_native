import React from 'react';
import { AuthProvider } from '../auth/AuthProvider';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Color, CONTANTS } from '../contants';
import { NavigationContainer } from '@react-navigation/native'
import FoodStack from './FoodStack'
import CartStack from './CartStack'
import BillStack from './BillStack'
import SettingStack from './SettingStack'

const Tab = createBottomTabNavigator()

const screenOptions = ({route}) => ({
  headerShown: false,
  tabBarActiveTintColor: Color.primary_color,
  tabBarActiveBackgroundColor:'white',
  tabBarInactiveBackgroundColor:'white',
  tabBarIcon: ({focused, color, size}) => {
    let screenName = route.name
    let iconName = ''
    switch(screenName){
      case CONTANTS.FOODS_SCREEN:
        iconName = 'fast-food-outline'
        break
      case CONTANTS.CARTS_SCREEN:
        iconName = 'cart-outline'
        break
      case CONTANTS.BILLS_SCREEN:
        iconName = 'card-outline'
        break
      case CONTANTS.SETTINGS_SCREEN:
        iconName = 'settings-outline'
        break
      default:
        break
    }
    return <Ionicons
      name={iconName} color={color} size={size}
    />
  },
})

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions = {screenOptions}>
        <Tab.Screen
          name = {CONTANTS.FOODS_SCREEN}
          component = {FoodStack}
        />
        <Tab.Screen
          name = {CONTANTS.CARTS_SCREEN}
          component = {CartStack}
        />
        <Tab.Screen
          name = {CONTANTS.BILLS_SCREEN}
          component = {BillStack}
        />
        <Tab.Screen
          name = {CONTANTS.SETTINGS_SCREEN}
          component = {SettingStack}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}