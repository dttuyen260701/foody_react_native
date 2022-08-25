import { View, Text, FlatList, Alert, TouchableOpacity, StyleSheet, SafeAreaView, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import {FirstReviewItem, LoadItem, ReviewItem, Toolbar} from '../components'
import { HEIGHT, WIDTH } from '../contants/Contants'
import { Color, FontSize, Methods } from '../contants'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useBillState, Actions } from '../provider'

const FoodDetailScreen = (props) => {
  
  //navigation
  const {navigation, route} = props
  //function of navigate to/back
  const {navigate, goBack} = navigation

  const [state, dispatch] = useBillState()

  const food = route.params.food

  const [state_RV, setState_RV] = useState({
    refreshing: false,
    reviews: [
      {
        'food': food
      },
    ]
  })

  useEffect(() => {
    Methods.load_reviews_data(food.ID_Food).then(respone_rv => {
      setState_RV({
        refreshing:false,
        reviews: [
          {
            'food': food
          },
          ...respone_rv
        ]
      })
    }).catch(err => console.log(err))
  }, [])

  const load_rv = () => {
    setState_RV({
      refreshing: true,
      reviews: [
        {
          'food': food
        },
      ]
    })
    Methods.load_reviews_data(food.ID_Food).then(respone_rv => {
      setState_RV({
        refreshing:false,
        reviews: [
          {
            'food': food
          },
          ...respone_rv
        ]
      })
    }).catch(err => console.log(err))
  }

  const increase = () => {
    dispatch(Actions.increase_bill_detail(food))
  }

  const reduce = () => {
    if(food.Count === 0){
      return
    }
    dispatch(Actions.reduce_bill_detail(food))
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
      {(state_RV.reviews.length <= 1)
        ? <LoadItem/> :
        <FlatList
          data = {state_RV.reviews}
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
          refreshControl = {
            <RefreshControl
              refreshing = {state_RV.refreshing}
              onRefresh = {() => load_rv()}
            />
          }
        />}
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
          {food.Count}
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