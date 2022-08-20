import { View, Text, SafeAreaView, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Toolbar, CartItem, BorderItem } from '../components'
import { HEIGHT, WIDTH } from '../contants/Contants'
import { Color, FontSize } from '../contants'

const CartScreen = (props) => {

  const [bill, setBill] = useState({
    "ID_Bill": "1",
    "ID_Cus": "3",
    "Total": "20.65",
    "Time": "2022-01-13 00:00:00",
    "Address": "Nguyen Huu Tho",
    "Shipping_fee": "5",
    "done": "0",
    "distance": '10'
  })

  const [billDetails, setBillDetails] = useState([
    {
      "ID_Bill": "13",
      "ID_Food": "2",
      "Name_Food": "TENDERODS CHICKEN SKEWER (2 PIECES)",
      "Link_Img_Food": "https://kfcvietnam.com.vn/uploads/combo/36227503c3ec95248380c7edb19e4494.jpg",
      "Count": "2",
      "Price_Total": "3",
      "Rate": "5",
      "Reviews": "ea"
    },
    {
      "ID_Bill": "13",
      "ID_Food": "3",
      "Name_Food": "PACHITO",
      "Link_Img_Food": "https://kfcvietnam.com.vn/uploads/combo/f6d771285267f9460d27074f54f0bc9f.png",
      "Count": "3",
      "Price_Total": "5.25",
      "Rate": "5",
      "Reviews": "ok"
    },
    {
      "ID_Bill": "13",
      "ID_Food": "8",
      "Name_Food": "COMBO FRIED CHICKEN B",
      "Link_Img_Food": "https://kfcvietnam.com.vn/uploads/combo/7d36d8d380315c169ba830b0b5b4c26d.jpg",
      "Count": "1",
      "Price_Total": "4",
      "Rate": "5",
      "Reviews": " sss"
    },
    {
      "ID_Bill": "13",
      "ID_Food": "32",
      "Name_Food": "PACHITO",
      "Link_Img_Food": "https://kfcvietnam.com.vn/uploads/combo/f6d771285267f9460d27074f54f0bc9f.png",
      "Count": "3",
      "Price_Total": "5.25",
      "Rate": "5",
      "Reviews": "ok"
    },
    {
      "ID_Bill": "13",
      "ID_Food": "9",
      "Name_Food": "COMBO FRIED CHICKEN B",
      "Link_Img_Food": "https://kfcvietnam.com.vn/uploads/combo/7d36d8d380315c169ba830b0b5b4c26d.jpg",
      "Count": "1",
      "Price_Total": "4",
      "Rate": "5",
      "Reviews": " sss"
    }
  ])

  //navigation
  const {navigation, route} = props
  //function of navigate to/back
  const {navigate, goBack} = navigation
  
  const for_screen = route.params.for_screen

  const onClearPress = () => {
    alert('clear')
  }

  const onPickAdressPress = () => {
    if(for_screen){
      navigate('PickMapScreen')
    } else {
      if(bill.done === "1"){
        alert('RE-ODER')
      } else {
        alert('TOO LONG')
      }
    }
  }

  const onOrderPress = () => {
    if(for_screen){
      alert('order')
    } else {
      if(bill.done === "1"){
        alert('FEEDBACK')
      } else {
        navigate('FeedBackScreen', {billDetails:billDetails})
      }
    }
  }

  return (
    <SafeAreaView style = {{flex: 1}}>
      <Toolbar
        title = {'Cart'}
        left_icon = {(!for_screen) ? 'chevron-back-outline' : undefined}
        left_Press = {() => goBack()}
        right_icon = {(for_screen) ? 'trash-outline' : undefined}
        right_Press = {() => onClearPress()}
      />
      <FlatList
        style = {style_Cart.flatlist}
        data = {billDetails}
        renderItem = {({item, index}) => (
          <CartItem
            cartItem = {item}
            for_screen = {for_screen}
            key={`${item.ID_Bill}-${item.ID_Food}`}
          />
        )}
      />
      <BorderItem/>
      <View style = {style_Cart.text_area}>
        <Text style = {style_Cart.text_title}>
          Shipping to:
        </Text>
        <Text style = {style_Cart.text_content}>
          {bill.Address}
        </Text>
      </View>
      <View style = {style_Cart.text_area}>
        <View style = {{flex: 1, flexDirection: 'row'}}>
          <Text style = {style_Cart.text_title}>
            Distance:
          </Text>
          <Text style = {style_Cart.text_content}>
            {(Math.round(bill.distance*100)/100).toFixed(2)} km
          </Text>
        </View>
        <View style = {{flex: 1, flexDirection: 'row'}}>
          <Text style = {style_Cart.text_title}>
            Shipping Fee:
          </Text>
          <Text style = {style_Cart.text_content}>
            $ {(Math.round(bill.Shipping_fee*100)/100).toFixed(2)} 
          </Text>
        </View>
      </View>
      <View 
        style = {{
          ...style_Cart.text_area,
          justifyContent: 'flex-end'
        }}
      >
        <Text 
          style = {{
            ...style_Cart.text_title,
            fontWeight:'bold',
            fontSize: FontSize.big
          }}
        >
          Total:
        </Text>
        <Text 
          style = {{
            ...style_Cart.text_content,
            fontWeight:'bold',
            fontSize: FontSize.big,
            flex: 0,
            marginHorizontal: 20
          }}
        >
          $ {(Math.round(bill.Total*100)/100).toFixed(2)}
        </Text>
      </View>
      <View style = {style_Cart.viewButton}>
        <TouchableOpacity
          style={style_Cart.button}
          onPress = {() => onPickAdressPress()}
        >
          <Text
            style = {style_Cart.text_btn}
          >
            {for_screen ? 'PICK ADDRESS' :
            (bill.done === "1" ? 'RE-ODER' : 'TOO LONG')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style_Cart.button}
          onPress = {() => onOrderPress()}
        >
          <Text
            style = {style_Cart.text_btn}
          >
            {for_screen ? 'ORDER' :
            (bill.done === "1" ? 'FEEDBACK' : 'RECEIVERED')}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const style_Cart = StyleSheet.create({
  flatlist:{
    height: HEIGHT*9/14,
    paddingBottom: 2
  },
  text_area:{
    height: HEIGHT*1/14,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text_title:{
    fontSize: FontSize.small,
    color:'black',
    paddingHorizontal: 15,
    fontWeight:'bold'

  },
  text_content:{
    fontSize: FontSize.small,
    color:'black',
    fontStyle: 'italic',
    flex: 1,
    paddingRight:10,
    fontWeight:'bold'
  },
  viewButton:{
    height: HEIGHT*1/14,
    flexDirection:'row',
    margin: 10,
    justifyContent:'space-around'
  },
  button:{
    width: WIDTH*4/10,
    backgroundColor: Color.button_Cart,
    alignItems:'center',
    borderRadius: 30,
    borderWidth: 3,
    borderColor: Color.border_color,
    marginVertical: 3
  },
  text_btn:{
    fontWeight:'bold',
    fontSize: FontSize.medium - 2,
    flex:1,
    textAlignVertical:'center',
    color: 'white'
  }
})

export default CartScreen