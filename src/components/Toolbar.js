import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Color from '../contants/Color'
import { HEIGHT } from '../contants/Contants'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { FontSize } from '../contants';

const Toolbar = (props) => {
  const {title, left_icon, right_icon, left_Press, right_Press} = props
  return (
    <View style = {style_Toolbar.toolbar}>
     {left_icon && <Ionicons
        name={left_icon}
        size={33}
        onPress = {left_Press}
        color = 'white'
        style = {style_Toolbar.icon}
      />}
      <Text
        style = {style_Toolbar.tittle}
      >
        {title}
      </Text>
     {right_icon && <Ionicons
        name={right_icon}
        size={33}
        onPress = {right_Press}
        color = 'white'
        style = {style_Toolbar.icon}
      />}
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
  icon:{
    padding: 5
  },
  tittle:{
    flex: 1,
    textAlign:'center',
    fontSize: FontSize.title,
    fontWeight: 'bold',
    color: 'white'
  }
})

export default Toolbar