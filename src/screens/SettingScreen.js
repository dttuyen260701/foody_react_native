import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { BorderItem, Toolbar } from '../components'
import { FontSize, Methods } from '../contants'
import { Actions, useBillState } from '../provider'
import { FOODS_SCREEN } from '../contants/Contants'

const SettingScreen = (props) => {

  //navigation
  const {navigation, route} = props
  //function of navigate to/back
  const {navigate, goBack} = navigation

  const [state, dispatch] = useBillState()

  return (
    <SafeAreaView>
      <Toolbar
        title = {'Settings'}
      />
      <Text style={style_Settings.text_Thanks}>
      </Text>
      <BorderItem/>
      <TouchableOpacity
        style = {style_Settings.btn}
        onPress = {() => {
          if(state.user.ID_Cus === -1){
            navigate('LoginScreen', {mail:'', pass:''})
          } else {
            navigate('InformationScreen')
          }
        }}
      >
        <Text style = {style_Settings.text_btn}>
          {state.user.ID_Cus === -1 ? 'Sign In' : 'Your Information'}
        </Text>
      </TouchableOpacity>
      <BorderItem/>
      <TouchableOpacity
        style = {style_Settings.btn}
        onPress = {() => {
          if(state.user.ID_Cus === -1){
            navigate('ResgisterScreen')
          } else {
            dispatch(Actions.set_user({ID_Cus: -1}))
            Methods.saveUser('-1')
            navigate(FOODS_SCREEN)
          }
        }}
      >
        <Text style = {style_Settings.text_btn}>
          {state.user.ID_Cus === -1 ? 'Sign Up' : 'Log Out'}
        </Text>
      </TouchableOpacity>
      <BorderItem/>
      <TouchableOpacity
        style = {style_Settings.btn}
        onPress = {() => {
          navigate('AboutUsScreen')
        }}
      >
        <Text style = {style_Settings.text_btn}>
          About Us
        </Text>
      </TouchableOpacity>
      <BorderItem/>
      <TouchableOpacity
        style = {style_Settings.btn}
        onPress = {() => {
          navigate('TOSScreen')
        }}
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