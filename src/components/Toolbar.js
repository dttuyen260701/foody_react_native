import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Color from '../contants/Color'
import { HEIGHT } from '../contants/Contants'

const Toolbar = (props) => {
  const {title} = props
  return (
    <View style = {style_Toolbar.toolbar}>
      <Text>{title}</Text>
    </View>
  )
}

const style_Toolbar = StyleSheet.create({
  toolbar:{
    height:HEIGHT * 1/14,
    backgroundColor: Color.primary_color,
    flexDirection:'row',
    alignItems:'center',
  },
})

export default Toolbar