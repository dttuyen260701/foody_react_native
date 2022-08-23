import { View, Text, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity, Keyboard, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Color, CONTANTS, FontSize, Methods } from '../contants'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { HEIGHT } from '../contants/Contants'
import { Toolbar } from '../components'

const RegisterScreen = (props) => { 

  //navigation
  const {navigation, route} = props
  //function of navigate to/back
  const {navigate, goBack} = navigation

  const [mail, setMail] = useState('')
  const [pass, setPass] = useState('')
  const [Repass, setRePass] = useState('')
  const [errMail, setErrMail] = useState(false)
  const [errPass, setErrPass] = useState(false)
  const [errRePass, setReErrPass] = useState(false)
  const [keyboardShow, setKeyboardShow] = useState(false)

  const ValidationMail = (mail) =>  (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  const ValidationPass = (pass) =>  pass.length >= 3

  const register = (gmail, pass) => {
    Methods.check_mail(gmail).then(resp_check => {
      if(resp_check.value){
        Methods.register_user(gmail, pass).then(resp => {
          if(resp.value){
            goBack()
            navigate('LoginScreen', {mail:mail, pass:pass})
          } else {
            alert('Error')
          }
        }).catch(err => console.log(err))
      } else {
        alert('Email existed')
      }
    }).catch(err => console.log(err))
  }

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', () =>{
      setKeyboardShow(true)
    })
    Keyboard.addListener('keyboardDidHide', () =>{
      setKeyboardShow(false)
    })
  }, ['keyboard'])

  useEffect(() => {
    setErrPass(ValidationPass(pass))
  }, [pass])

  useEffect(() => {
    setErrMail(ValidationMail(mail))
  }, [mail])

  useEffect(() => {
    setReErrPass(Repass === pass)
  }, [Repass])

  return (
    <SafeAreaView style={{ flex:1, backgroundColor:Color.primary_color}}>
    <Toolbar
      title = 'Register'
      left_icon = {'chevron-back-outline'}
      left_Press = {() => goBack()}
    />
      <View style={style_login.first_area}>
        <Text style={{
          color:'white',
          fontSize:30,
          fontWeight:'bold',
          flex:2,
          marginLeft:10
        }}>
          Join with Us?
        </Text>
        <Image 
          source={require('../assets/KFC.png')}
          style ={style_login.logo_login}
        />
      </View>
      <View style={style_login.second_area}>
        <Text 
          style={{
            color:Color.primary_color,
            fontSize:FontSize.medium
          }}
        >
          Email: 
        </Text>
        <TextInput
          style ={{color:'black'}}
          placeholder='Your email'
          placeholderTextColor={Color.placeholder}
          onChangeText={(text)=>{
            setMail(text)
          }}
          value={mail}
        />
        <View style={{height:1, backgroundColor:'black'}}></View>
        <Text
          style={{
            color:'red',
            fontSize:12,
          }}
        >
          {(!errMail && keyboardShow) ? 'Email not in correct format!!':''}
        </Text> 
        <Text 
          style={{
            color:Color.primary_color,
            fontSize:FontSize.medium
          }}
        >
          Password: 
        </Text>
        <TextInput
          style ={{color:'black'}}
          placeholder='Your password'
          placeholderTextColor={Color.placeholder}
          secureTextEntry={true}
          onChangeText={(text)=>{
            setPass(text)
          }}
          value={pass}
        />
        <View style={{height:1, backgroundColor:'black'}}></View>
        <Text
          style={{
            color:'red',
            fontSize:12,
            marginBottom:5
          }}
        >
          {(!errPass && keyboardShow) ? 'Password must be at least 3 characters!!':''}
        </Text> 
        <Text 
          style={{
            color:Color.primary_color,
            fontSize:FontSize.medium
          }}
        >
          Re-enter Password: 
        </Text>
        <TextInput
          style ={{color:'black'}}
          placeholder='Re-enter Your password'
          placeholderTextColor={Color.placeholder}
          secureTextEntry={true}
          onChangeText={(text)=>{
            setRePass(text)
          }}
          value = {Repass}
        />
        <View style={{height:1, backgroundColor:'black'}}></View>
        <Text
          style={{
            color:'red',
            fontSize:12,
            marginBottom:5
          }}
        >
          {(!errRePass && keyboardShow) ? 'Password must be at least 3 characters!!':''}
        </Text> 
        <View style={style_login.third_area}>
          <TouchableOpacity
            style={{
              ...style_login.button_register, 
              backgroundColor:(errMail && errPass) ? Color.primary_color : Color.button_Cart
            }}
            activeOpacity={0.8}
            onPress={() => {
              if(Repass === pass){
                register(mail, pass)
              }
            }}
          >
            <Text
              style={{
                fontSize:FontSize.medium,
                fontWeight:'bold',
                color:'white'
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={style_login.fourth_area}>
        <View
          style={{
            height:30,
            flexDirection:'row',
            alignItems:'center',
            marginHorizontal:10
          }}
        >
          <View style={{height:1, flex:1, backgroundColor:'white'}}></View>
          <Text
            style={{
              fontSize:FontSize.small,
              fontWeight:'bold',
              color:'white',
              alignSelf:'center',
              marginHorizontal:10
            }}
          >Use another method?</Text>
          <View style={{height:1, flex:1, backgroundColor:'white'}}></View>
        </View>
        <View
          style={{
            height:50,
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'center',
          }}
        >
          <Ionicons
            name='logo-facebook'
            size={40}
            color={'white'}
          />
          <View style={{width:10}}/>
          <Ionicons
            name='logo-google'
            size={40}
            color={'white'}
          />
        </View>
      </View>
      <View style={style_login.fifth_area}>

      </View>
    </SafeAreaView>
  )
}

const style_login = StyleSheet.create({
  first_area:{
    flex:6,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'    
  },
  second_area:{
    height: HEIGHT*90/195,
    marginHorizontal:15,
    justifyContent:'center',
    backgroundColor:'white',
    padding:10,
    borderRadius:20,
  },
  third_area:{
    flex:1,
    justifyContent:'center',
    marginBottom:10
  },
  fourth_area:{
    flex:1.5,
    marginTop:10
  },
  fifth_area:{
    flex:1
  },
  logo_login:{
    flex:3,
    height:Dimensions.get('window').height*3/13,
    marginRight:10,
    resizeMode:'center'
  },
  button_register:{
    marginHorizontal:25,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    width:'60%',
    borderRadius:50,
    height:50,
  },
})

export default RegisterScreen