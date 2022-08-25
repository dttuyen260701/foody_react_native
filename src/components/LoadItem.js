import { View, Text, StyleSheet, SafeAreaView, ActivityIndicator } from 'react-native'
import React from 'react'
import { HEIGHT } from '../contants/Contants'
import { Color } from '../contants'

const LoadItem = () => {
  return (
    <SafeAreaView style = {style_loadItem.parent}>
      <ActivityIndicator 
        style={{flex:1}}
        size={'large'}
      />
    </SafeAreaView>
  )
}

const style_loadItem = StyleSheet.create({
  parent:{
    flex:1,
    backgroundColor:Color.border_color,
    alignItems:'center',
  }
})

export default LoadItem