import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { BorderItem, Toolbar } from '../components'
import { FontSize } from '../contants'

const SettingScreen = () => {

  const [user, setUser] = useState({

  })

  return (
    <SafeAreaView>
      <Toolbar
        title = {'Settings'}
      />
      <Text style={style_Settings.text_Thanks}>
        Vua Do An
      </Text>
      <BorderItem/>
      <TouchableOpacity
        style = {style_Settings.btn}
        onPress = {() => {}}
      >
        <Text style = {style_Settings.text_btn}>
          Your Information
        </Text>
      </TouchableOpacity>
      <BorderItem/>
      <TouchableOpacity
        style = {style_Settings.btn}
        onPress = {() => {}}
      >
        <Text style = {style_Settings.text_btn}>
          Log Out
        </Text>
      </TouchableOpacity>
      <BorderItem/>
      <TouchableOpacity
        style = {style_Settings.btn}
        onPress = {() => {}}
      >
        <Text style = {style_Settings.text_btn}>
          About Us
        </Text>
      </TouchableOpacity>
      <BorderItem/>
      <TouchableOpacity
        style = {style_Settings.btn}
        onPress = {() => {}}
      >
        <Text style = {style_Settings.text_btn}>
          Terms of use and privacy policy 
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const style_Settings = StyleSheet.create({
  text_Thanks:{
    backgroundColor:'gray',
    color:'black',
    fontSize: FontSize.medium,
    height: 40,
    textAlignVertical:'center',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  btn:{
    backgroundColor:'white',
    padding: 5
  },
  text_btn:{
    color:'black',
    fontSize: FontSize.medium
  }
})

export default SettingScreen