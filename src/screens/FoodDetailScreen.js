import { View, Text, FlatList, Alert, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import {FirstReviewItem, ReviewItem, Toolbar} from '../components'
import { HEIGHT, WIDTH } from '../contants/Contants'
import { Color, FontSize } from '../contants'
import Ionicons from 'react-native-vector-icons/Ionicons';

const FoodDetailScreen = (props) => {
  
  //navigation
  const {navigation, route} = props
  //function of navigate to/back
  const {navigate, goBack} = navigation

  const food = route.params.food
  
  const [amount, setAmount] = useState(route.params.amount)

  const [reviews, SetReviews] = useState([
    {
      'food': food
    },
    {
      "Name_Cus": "Vua Do An",
      "Time": "2022-01-13 00:00:00",
      "Rate": "4",
      "Reviews": " "
    },
    {
      "Name_Cus": "Vua Do An",
      "Time": "2022-01-25 21:05:00",
      "Rate": "5",
      "Reviews": ""
    },
    {
      "Name_Cus": "Vua Do An",
      "Time": "2022-01-25 21:51:00",
      "Rate": "4.5",
      "Reviews": ""
    },
    {
      "Name_Cus": "Vua Do An",
      "Time": "2022-01-25 21:52:00",
      "Rate": "5",
      "Reviews": ""
    },
    {
      "Name_Cus": "Thanh Tuyen",
      "Time": "2022-01-28 19:07:00",
      "Rate": "5",
      "Reviews": ""
    },
    {
      "Name_Cus": "Thanh Tuyen",
      "Time": "2022-01-31 01:24:00",
      "Rate": "5",
      "Reviews": ""
    },
    {
      "Name_Cus": "Thanh Tuyen",
      "Time": "2022-01-31 01:34:00",
      "Rate": "5",
      "Reviews": ""
    },
    {
      "Name_Cus": "Thanh Tuyen",
      "Time": "2022-01-31 20:55:00",
      "Rate": "4.5",
      "Reviews": ""
    },
    {
      "Name_Cus": "Thanh Tuyen",
      "Time": "2022-01-31 21:08:00",
      "Rate": "5",
      "Reviews": ""
    },
    {
      "Name_Cus": "Thanh Tuyen",
      "Time": "2022-02-01 01:31:00",
      "Rate": "4.5",
      "Reviews": "okk"
    },
    {
      "Name_Cus": "Thanh Tuyen",
      "Time": "2022-02-01 01:43:00",
      "Rate": "5",
      "Reviews": "ok"
    },
    {
      "Name_Cus": "Review Foode",
      "Time": "2022-02-17 10:16:00",
      "Rate": "5",
      "Reviews": ""
    }
  ])

  const increase = () => {
    setAmount(prev => setAmount(prev + 1))
  }

  const reduce = () => {
    if(amount === 0){
      return
    }
    setAmount(prev => setAmount(prev - 1))
  }

  const info_click = () => {
    Alert.alert(
      food.Name_Food,
      food.Description_Food
    )
  }

  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'white'}}>
      <Toolbar
        title = {food.Name_Food}
        left_icon = {'chevron-back-outline'}
        right_icon = {'information-circle-outline'}
        left_Press = {() => goBack()}
        right_Press = {() => info_click()}
      />
      <FlatList
        data = {reviews}
        renderItem = {({item, index}) => (
          (index === 0) ?
          <FirstReviewItem
            food = {item.food}
            key = {index}
          /> :
          <ReviewItem 
            reviews={item}
            key={index}
          />
        )}
        style={{marginTop: 0, flex:1}}
      />
      <View 
        style={style_Food_Detail.parent_view}
      >
        <TouchableOpacity
          style = {style_Food_Detail.food_add_sub_btn}
          onPress = {reduce}
          activeOpacity = {0.9}
        >
          <Ionicons
            name={'remove-outline'}
            size={40}
            color={'white'}
          />
        </TouchableOpacity>
        <Text
          style = {style_Food_Detail.food_amout}
        >
          {amount}
        </Text>
        <TouchableOpacity
          style = {style_Food_Detail.food_add_sub_btn}
          onPress = {increase}
          activeOpacity = {0.9}
        >
          <Ionicons
            name={'add-outline'}
            size={40}
            color={'white'}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const style_Food_Detail = StyleSheet.create({
  parent_view:{
    position:'absolute',
    bottom: HEIGHT* 1/25,
    flexDirection:'row',
    justifyContent:'center',
    width: WIDTH,
    alignItems:'center',
    height: HEIGHT * 1/10,
  },
  food_add_sub_btn:{
    backgroundColor: Color.button_Cart,
    borderRadius: 20,
    borderWidth:2,
    borderColor: Color.border_color,
    width: WIDTH*1/4,
    alignItems:'center'
  },
  food_amout:{
    color:'black',
    fontWeight:'bold',
    fontSize: FontSize.big,
    marginHorizontal: 20
  }
})

export default FoodDetailScreen