import { View, Text, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity, Keyboard, SafeAreaView, Button } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Color, CONTANTS, FontSize, Methods } from '../contants'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { HEIGHT, WIDTH } from '../contants/Contants'
import { Toolbar } from '../components'
import { Actions, useBillState } from '../provider'

const InformationScreen = (props) => {

  const {navigation, route} = props

  const {navigate, goBack} = navigation

  const [state, dispatch] = useBillState()

  const [nameBTN, setNameBTN] = useState('Change')

  const [Name_Cus, setName_Cus] = useState(state.user.Name_Cus)
  
  useEffect(() => {

  }, [state.user])

  const onChangeNamePress = () => {
    if(nameBTN === 'Change'){
      setNameBTN('Save')
    } else {
      setNameBTN('Change')
    }
  }

  const onSave_Press = () => {
    Methods.update_user({
      ...state.user,
      Name_Cus: Name_Cus
    }).then(resp => {
      if(resp.value)
        dispatch(Actions.set_user({
          ...state.user,
          Name_Cus: Name_Cus
        }))
      setNameBTN('Change')
    }).catch(err => console.log(err))
  }

  return (
    <SafeAreaView
      style = {{
        backgroundColor:'white',
        flex:1
      }}
    >
      <Toolbar
        title = {'Account'}
        left_icon = 'chevron-back-outline'
        left_Press = {() => goBack()}
      />
      <Image
        source={require('../assets/KFC.png')}
        style = {style_Profile.image}
      />
      <View style={{height:1, backgroundColor:'black'}}></View>
      <View style ={{flex: 1}}>
        <View style={{flexDirection:'row', padding: 10}}>
          <Text style={style_Profile.text_title}>
            Mail: 
          </Text>
          <Text style={style_Profile.text}>
            {state.user.Gmail}
          </Text>
        </View>
        <View style={{flexDirection:'row', padding: 10, marginRight: 10, alignItems:'center'}}>
          <Text style={style_Profile.text_title}>
            Name: 
          </Text>
          <TextInput 
            style={style_Profile.text}
            editable = {!(nameBTN === 'Change')}
            value = {Name_Cus}
            onChangeText = {txt => setName_Cus(txt)}
          />
          <Button
            title={nameBTN}
            color={Color.button_Cart}
            onPress = {onChangeNamePress}
          />
        </View>
        <View style={{flexDirection:'row', padding: 10, alignItems:'center', marginRight: 10}}>
          <Text style={style_Profile.text_title}>
            Password: 
          </Text>
          <TextInput
            secureTextEntry={true}
            editable={false}
            style={style_Profile.text}
          >
            {state.user.Password}
          </TextInput>
        </View>
      </View>
      <View style={{height:1, backgroundColor:'black'}}></View>
      <TouchableOpacity 
        style = {style_Profile.button}
        activeOpacity = {0.9}
        onPress = {() => onSave_Press()}
      >
        <Text 
          style={style_Profile.text_btn}
        >
          SAVE
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const style_Profile = StyleSheet.create({
  image:{
    height: WIDTH/6*3,
    width: WIDTH/6*3,
    margin: 50,
    resizeMode:'cover',
    borderRadius:200,
    alignSelf:'center',
    alignItems:'center',
    alignContent:'center'
  },
  text_title:{
    color:'black',
    fontSize:FontSize.medium,
    fontWeight:'bold',
    marginLeft:20
  },
  text:{
    color:'black',
    fontSize:FontSize.medium,
    marginLeft: 10,
    flex:1,
    textAlign:'center'
  },
  button:{
    height: HEIGHT*1/14,
    width: WIDTH*40/100,
    backgroundColor: Color.button_Cart,
    alignItems:'center',
    alignSelf:'center',
    borderRadius: 30,
    borderWidth: 3,
    borderColor: Color.border_color,
    marginVertical: 3,
  },
  text_btn:{
    fontWeight:'bold',
    fontSize: FontSize.medium - 2,
    flex:1,
    textAlignVertical:'center',
    color: 'white'
  }
})

export default InformationScreen