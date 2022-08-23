import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Color, FontSize, Methods } from '../contants'
import BorderItem from './BorderItem'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Actions, useBillState } from '../provider';
import { ACTION_INCREASE_BILL_DT, ACTION_REDUCE_BILL_DT } from '../contants/Contants';

const FoodItem = (props) => {

  const {food, onClick} = props

  const [state, dispatch] = useBillState()

  // console.log('render')

  const increase = () => {
    dispatch(Actions.increase_bill_detail(food))
  }

  const reduce = () => {
    dispatch(Actions.reduce_bill_detail(food))
  }

  const update_Favorite = () => {
    Methods.del_insert_favorite(food.ID_Food, state.user.ID_Cus, food.is_Favorite)
      .then(resp => {
        if(resp){
          dispatch(Actions.set_favorite({'ID_Food': food.ID_Food, 'is_Favorite': !food.is_Favorite}))
        }
      }).catch(err => console.log(err))
  }

  const fav_click = () => {
    if(state.user.ID_Cus !== -1) {
      update_Favorite()
    } else {
      alert('Please login to add to favorite list.')
    }
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onClick(food)}
    >
      <BorderItem/>
      <View style = {style_Food_Item.parent}>
        <Image
          source={{uri: food.Link_Img_Food}}
          style = {style_Food_Item.food_image}
        />
        <View style = {style_Food_Item.food_info}>
          <View style = {style_Food_Item.three_areas}>
            <Text 
              style = {style_Food_Item.food_name}
              numberOfLines={1}
            >
              {food.Name_Food}
            </Text>
            <TouchableOpacity
              onPress={fav_click}
              activeOpacity = {0.9}
            >
              <Ionicons
                name = {(food.is_Favorite) ? 'heart' : 'heart-outline'}
                size = {25}
                color = {(food.is_Favorite) ? 'red' : 'black'}
              />
            </TouchableOpacity>
          </View>
          <View style = {style_Food_Item.three_areas}>
            <Text 
              style = {style_Food_Item.food_decription}
              numberOfLines={1}
            >
              {food.Description_Food}
            </Text>
            <Ionicons
              name = {'time-outline'}
              size = {20}
              color = {'gray'}
              style = {{marginHorizontal: 5}}
            />
            <Text style={style_Food_Item.food_time_Cooking}>
              {food.Time_Cooking} mins 
            </Text>
          </View>
          <View style = {style_Food_Item.three_areas}>
            <Text 
              style = {style_Food_Item.food_price}
              numberOfLines={1}
            >
              $ {(Math.round(food.Frice_Food*100)/100).toFixed(2)}
            </Text>
            <View style = {style_Food_Item.food_add_cart}>
              {food.Count > 0 && <TouchableOpacity
                style = {style_Food_Item.food_add_sub_btn}
                onPress = {reduce}
                activeOpacity = {0.9}
              >
                <Ionicons
                  name={'remove-outline'}
                  size={25}
                  color={'white'}
                />
              </TouchableOpacity>}
              {food.Count  > 0 && <Text
                style = {style_Food_Item.food_amout}
              >
                {food.Count}
              </Text>}
              <TouchableOpacity
                style = {style_Food_Item.food_add_sub_btn}
                onPress = {increase}
                activeOpacity = {0.9}
              >
                <Ionicons
                  name={'add-outline'}
                  size={25}
                  color={'white'}
                />
              </TouchableOpacity>
            </View>
            <Text 
              style = {style_Food_Item.food_price}
              numberOfLines={1}
            >
              {(Math.round(food.Rate*10)/10).toFixed(1)}
            </Text>
            <Ionicons
              name = {'star'}
              size = {25}
              color = {Color.start_color}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const style_Food_Item = StyleSheet.create({
  parent:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    margin: 1
  },
  food_image:{   
    resizeMode: 'cover',
    aspectRatio: 1, 
    height: '100%',
    borderRadius: 5,
  },
  food_info:{
    flexDirection:'column',
    flex: 1,
    margin: 5
  },
  three_areas:{
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
  },
  food_name:{
    color:'black',
    textAlign:'left',
    flex:1,
    fontWeight:'bold',
    marginRight: 5
  },
  food_decription:{
    color: 'gray',
    textAlign:'left',
    flex:1,
  },
  food_time_Cooking:{
    color: 'gray',
    textAlign:'left',
  },
  food_price:{
    fontSize: FontSize.medium,
    color:'black',
    textAlign:'left',
    fontWeight:'bold',
    marginRight: 5
  },
  food_add_cart:{
    flex: 1,
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    marginHorizontal: 10
  },
  food_add_sub_btn:{
    backgroundColor: Color.button_Cart,
    borderRadius: 10,
    borderWidth:2,
    borderColor: Color.border_color
  },
  food_amout:{
    color:'black',
    fontWeight:'bold',
    fontSize: FontSize.medium,
    marginHorizontal: 10
  }
}) 

export default FoodItem