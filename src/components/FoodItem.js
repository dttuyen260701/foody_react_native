import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Color } from '../contants'
import BorderItem from './BorderItem'

const FoodItem = (props) => {

  const {food, onClick} = props

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onClick}
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
          </View>
          <View style = {style_Food_Item.three_areas}>

          </View>
          <View style = {style_Food_Item.three_areas}>

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
    flex: 1
  },
  three_areas:{
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  food_name:{
    color:'black',
    textAlign:'left',
    flex:1
  },

})

export default FoodItem