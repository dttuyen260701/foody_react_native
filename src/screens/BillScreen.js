import { View, Text, SafeAreaView, FlatList } from 'react-native'
import React, { useState } from 'react'
import { BillItem, Toolbar } from '../components'

const BillScreen = (props) => {

  const [bills, setBills] = useState([
    {
      "ID_Bill": "1",
      "ID_Cus": "3",
      "Total": "20.65",
      "Time": "2022-01-13 00:00:00",
      "Address": "Nguyen Huu Tho",
      "Shipping_fee": "5",
      "done": "0"
    },
    {
      "ID_Bill": "3",
      "ID_Cus": "3",
      "Total": "9.5",
      "Time": "2022-01-04 00:00:00",
      "Address": "Nui Thanh",
      "Shipping_fee": "3",
      "done": "0"
    },
    {
      "ID_Bill": "4",
      "ID_Cus": "3",
      "Total": "9",
      "Time": "2022-01-25 21:05:00",
      "Address": "12 Thang 9 Street ",
      "Shipping_fee": "1",
      "done": "0"
    },
    {
      "ID_Bill": "5",
      "ID_Cus": "3",
      "Total": "35.1",
      "Time": "2022-01-25 21:05:00",
      "Address": "12 Thang 9 Street ",
      "Shipping_fee": "1",
      "done": "1"
    },
    {
      "ID_Bill": "6",
      "ID_Cus": "3",
      "Total": "29",
      "Time": "2022-01-25 21:12:00",
      "Address": "12 Thang 9 Street ",
      "Shipping_fee": "1",
      "done": "1"
    },
    {
      "ID_Bill": "7",
      "ID_Cus": "3",
      "Total": "10.55",
      "Time": "2022-01-25 21:51:00",
      "Address": "12 Thang 9 Street ",
      "Shipping_fee": "1.5",
      "done": "1"
    },
    {
      "ID_Bill": "8",
      "ID_Cus": "3",
      "Total": "15.35",
      "Time": "2022-01-25 21:51:00",
      "Address": "12 Thang 9 Street ",
      "Shipping_fee": "1.5",
      "done": "1"
    },
    {
      "ID_Bill": "9",
      "ID_Cus": "3",
      "Total": "14.75",
      "Time": "2022-01-25 21:52:00",
      "Address": "12 Thang 9 Street ",
      "Shipping_fee": "1.5",
      "done": "1"
    },
    {
      "ID_Bill": "11",
      "ID_Cus": "3",
      "Total": "11.6",
      "Time": "2022-01-26 01:12:00",
      "Address": "12 Thang 9 Street",
      "Shipping_fee": "1.5",
      "done": "1"
    }
  ])

  //navigation
  const {navigation, route} = props
  //function of navigate to/back
  const {navigate, goBack} = navigation

  const onItemPress = (bill) => {
    navigate('DetailScreen', {bill:bill})
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Toolbar
        title = {'Bills'}
      />
      <FlatList
        style = {{flex: 1}}
        data = {bills}
        renderItem = {({item, index}) => {
          return (
            <BillItem
              bill = {item}
              key = {item.ID_Bill}
              onPress = {onItemPress}
            />
          )
        }}
      />
    </SafeAreaView>
  )
}

export default BillScreen