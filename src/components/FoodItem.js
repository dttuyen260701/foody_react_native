import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native'
import React, { useState } from 'react'
import { Color, FontSize } from '../contants'
import BorderItem from './BorderItem'
import Ionicons from 'react-native-vector-icons/Ionicons';

const FoodItem = (props) => {

  const {food, onClick} = props

  const [amount, setAmount] = useState(0)

  const increase = () => {
    setAmount(prev => setAmount(prev + 1))
  }

  const reduce = () => {
    setAmount(prev => setAmount(prev - 1))
  }

  const fav_click = () => {
    alert('item fav')
  }

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => onClick(food, amount)}
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
              $ {food.Frice_Food}
            </Text>
            <View style = {style_Food_Item.food_add_cart}>
              {amount > 0 && <TouchableOpacity
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
              {amount > 0 && <Text
                style = {style_Food_Item.food_amout}
              >
                {amount}
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