import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Toolbar from '../components/Toolbar'

const FoodScreen = () => {
  return (
    <SafeAreaView>
      <Toolbar
        title = {'Food'}
      />
      <Text>FoodScreen</Text>
    </SafeAreaView>
  )
}

const style_Food_Screen = StyleSheet.create({
  
})

export default FoodScreen