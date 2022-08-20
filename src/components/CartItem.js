import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Color, FontSize } from '../contants'
import BorderItem from './BorderItem'
import Ionicons from 'react-native-vector-icons/Ionicons';

const CartItem = (props) => {
  
  const {cartItem, for_screen} = props

  const [amount, setAmount] = useState(parseInt(cartItem.Count))

  const increase = () => {
    setAmount(prev => setAmount(prev + 1))
  }

  const reduce = () => {
    setAmount(prev => setAmount(prev - 1))
  }

  return (
    <View>
      <BorderItem/>
      <View style = {style_CartItem.parent}>
        <Image
          source={{uri: cartItem.Link_Img_Food}}
          style = {style_CartItem.food_image}
        />
        <View style = {style_CartItem.food_info}>
          <View style = {style_CartItem.three_areas}>
            <Text 
              style = {style_CartItem.food_name}
              numberOfLines={1}
            >
              {cartItem.Name_Food}
            </Text>
          </View>
          <View style = {style_CartItem.three_areas}>
            <View style = {style_CartItem.food_add_cart}>
              {for_screen && <TouchableOpacity
                style = {style_CartItem.food_add_sub_btn}
                onPress = {reduce}
                activeOpacity = {0.9}
              >
                <Ionicons
                  name={'remove-outline'}
                  size={25}
                  color={'white'}
                />
              </TouchableOpacity>}
              <Text
                style = {style_CartItem.food_amout}
              >
                x{amount}
              </Text>
              {for_screen && <TouchableOpacity
                style = {style_CartItem.food_add_sub_btn}
                onPress = {increase}
                activeOpacity = {0.9}
              >
                <Ionicons
                  name={'add-outline'}
                  size={25}
                  color={'white'}
                />
              </TouchableOpacity>}
            </View>
          </View>
          <View style = {style_CartItem.three_areas}>
            <Text 
              style = {style_CartItem.food_price}
              numberOfLines={1}
            >
              $ {cartItem.Price_Total}
            </Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const style_CartItem = StyleSheet.create({
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
  food_price:{
    fontSize: FontSize.medium,
    color:'black',
    textAlign:'right',
    fontWeight:'bold',
    marginRight: 10,
    flex:1
  },
  food_add_cart:{
    flex: 1,
    flexDirection:'row',
    justifyContent:'flex-end',
    alignItems:'center',
    marginHorizontal: 5
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

export default CartItem