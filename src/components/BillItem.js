import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../contants/Contants'
import BorderItem from './BorderItem'
import { Color, FontSize } from '../contants'

const BillItem = (props) => {

  const {bill, onPress} = props

  return (
    <TouchableOpacity 
      onPress = {() => onPress(bill)}
      activeOpacity={0.9}
    >
      <BorderItem/>
      <View
        style = {style_Bill_Item.parent}
      >
        <Image
          source = {
            (bill.done === "1") ? require('../assets/bill.png') : require('../assets/food_delivery.png')
          }
          style={style_Bill_Item.image}
        />
        <View style={style_Bill_Item.bill_info}>
          <View style = {style_Bill_Item.three_areas}>
            <Text 
              style = {{
                ...style_Bill_Item.text,
                fontWeight: 'bold'
              }}
            >
              Status:
            </Text>
            <Text 
              style = {{
                ...style_Bill_Item.text,
                fontWeight: 'bold',
                flex: 1,
              }}
            >
              {bill.done === "1" ? 'Received' : 'Delivering'}
            </Text>
          </View>
          <View style = {style_Bill_Item.three_areas}>
            <Text 
              style = {style_Bill_Item.text}
            >
              Time:
            </Text>
            <Text 
              style = {{
                ...style_Bill_Item.text,
                flex: 1,
              }}
            >
              {bill.Time}
            </Text>
          </View>
          <View style = {style_Bill_Item.three_areas}>
            <Text 
              style = {style_Bill_Item.text}
            >
              Total:
            </Text>
            <Text 
              style = {{
                ...style_Bill_Item.text,
                flex: 1,
                fontWeight:'bold'
              }}
            >
              $ {bill.Total}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const style_Bill_Item = StyleSheet.create({
  parent:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: HEIGHT/7,
    marginHorizontal:1
  },
  image: {
    height: HEIGHT/7,
    width: HEIGHT/7,
    aspectRatio: 1,
    resizeMode: 'cover',
    backgroundColor: Color.purple_700,
    borderRadius: 5
  },
  bill_info:{
    flex: 1,
    marginVertical:10
  },
  three_areas:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: FontSize.medium,
    color: 'black',
    marginLeft: 10,
    textAlign: 'center'
  }
})

export default BillItem