import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity, Keyboard, Alert, SafeAreaView } from 'react-native'
import { Color, CONTANTS, FontSize, Methods } from '../contants'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { Toolbar } from '../components'
import { Actions, useBillState } from '../provider'
import { HEIGHT } from '../contants/Contants'

const LoginScreen = (props) => {

  //navigation
  const {navigation, route} = props
  //function of navigate to/back
  const {navigate, goBack} = navigation

  const [state, dispatch] = useBillState()

  const [mail, setMail] = useState(route.params.mail)
  const [pass, setPass] = useState(route.params.pass)
  const [errMail, setErrMail] = useState(false)
  const [errPass, setErrPass] = useState(false)
  const [keyboardShow, setKeyboardShow] = useState(false)

  const ValidationMail = (mail) =>  (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  const ValidationPass = (pass) =>  pass.length >= 3

  const login = (gmail, password) =>{
    Methods.load_user_gmail(gmail).then(responeUser =>{
      if(responeUser.length == 0){
        alert('Wrong Gmail')
      } else {
        if(responeUser[0].Password === password){
          dispatch(Actions.set_user(responeUser[0]))
          Methods.saveUser(responeUser[0].ID_Cus)
          goBack()
          navigate(CONTANTS.FOODS_SCREEN)
        } else {
          alert('Wrong Password')
        }
      }
    }).catch(err => console.log(err))
  }

  useEffect(() => {
    console.log('render')
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

  return (
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>
      <Toolbar
        title = 'Login'
        left_icon = {'chevron-back-outline'}
        left_Press = {() => goBack()}
      />
      <View style={style_login.first_area}>
        <Text style={{
          color:'black',
          fontSize:30,
          fontWeight:'bold',
          flex:2,
          marginLeft:10
        }}>
          Already have an Account?
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
            marginBottom:10
          }}
        >
          {(!errPass && keyboardShow) ? 'Password must be at least 3 characters!!':''}
        </Text> 
      </View>
      <View style={style_login.third_area}>
        <TouchableOpacity
          style={{
            ...style_login.button_login, 
            backgroundColor:(errMail && errPass) ? Color.primary_color : Color.button_Cart
          }}
          activeOpacity={0.8}
          onPress={() => login(mail, pass)}
        >
          <Text
            style={{
              fontSize:FontSize.medium,
              fontWeight:'bold',
              color:'white'
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style_login.button_register}
          activeOpacity={0.8}
          onPress = {() => {
            navigate('ResgisterScreen')
          }}
        >
          <Text
            style={{
              fontSize:FontSize.small,
              fontWeight:'bold',
              color:Color.primary_color
            }}
          >
            New User? Register now!
          </Text>
        </TouchableOpacity>
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
          <View style={{height:1, flex:1, backgroundColor:'black'}}></View>
          <Text
            style={{
              fontSize:FontSize.small,
              fontWeight:'bold',
              color:Color.primary_color,
              alignSelf:'center',
              marginHorizontal:10
            }}
          >Use another method?</Text>
          <View style={{height:1, flex:1, backgroundColor:'black'}}></View>
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
            color={'black'}
          />
          <View style={{width:10}}/>
          <Ionicons
            name='logo-google'
            size={40}
            color={'black'}
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
    flex:5,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'    
  },
  second_area:{
    height:HEIGHT*30/125,
    marginHorizontal:15,
    justifyContent:'center'
  },
  third_area:{
    height: HEIGHT*20/125
  },
  fourth_area:{
    flex:2,
  },
  fifth_area:{
    flex:0.5
  },
  logo_login:{
    flex:3,
    marginRight:10,
    resizeMode:'center'
  },
  button_login:{
    flex:1,
    marginHorizontal:25,
    marginVertical:5,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    width:'60%',
    borderRadius:50,
  },
  button_register:{
    flex:1,
    marginHorizontal:25,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    width:'70%',
    marginBottom:5
  }
})

export default LoginScreen