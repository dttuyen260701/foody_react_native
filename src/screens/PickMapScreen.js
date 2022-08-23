import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import {Toolbar, SlideShow , FoodItem} from '../components'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Color, FontSize, Methods } from '../contants';
import MapView from 'react-native-maps';
import { HEIGHT, WIDTH } from '../contants/Contants';

const PickMapScreen = (props) => {
  
  //navigation
  const {navigation, route} = props
  //function of navigate to/back
  const {navigate, goBack} = navigation

  const [searchText, setSearchText] = useState('')

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <Toolbar
        title = 'Pick Address'
        left_icon = {'chevron-back-outline'}
        left_Press = {() => goBack()}
      />
      <View style = {style_PickMap.search_view}>
        <Ionicons
          style={{position:'absolute', top:10, left:10, height:30, width:30, tintColor:'black'}}
          name = {'search-outline'}
          color = {'black'}
          size = {27}
        />
        <TextInput
          placeholder='Search'
          style={style_PickMap.search_input}
          autoCorrect={false}
          onChangeText = {(text) => setSearchText(text)}
          placeholderTextColor = {Color.border_color}
          value={searchText}
        />
      </View>
      <MapView
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        // onRegionChange={}
        style={{flex: 1}}
      />
      <TouchableOpacity 
        style = {style_PickMap.button}
        onPress = {() => {}}
        activeOpacity = {0.9}
      >
        <Text style={style_PickMap.text_btn}>
          PICK
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const style_PickMap = StyleSheet.create({
  search_view:{
    height:50,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  search_input:{
    height:40,
    flex:1,
    borderRadius:5,
    padding:5,
    opacity:0.8,
    paddingStart:40,
    color:'black',
    fontSize: FontSize.medium,
    borderWidth: 1,
    borderColor: Color.primary_color,
    marginHorizontal: 5
  },
  button:{
    height: HEIGHT*1/14,
    width: WIDTH*45/100,
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

export default PickMapScreen