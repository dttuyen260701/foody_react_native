import { View, Text, SafeAreaView, FlatList, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BillItem, Toolbar } from '../components'
import { useBillState } from '../provider'
import { Methods } from '../contants'

const BillScreen = (props) => {

  const [state, dispatch] = useBillState()

  const [state_Bill, setState_Bill] = useState({
    refreshing: false,
    bills: []
  })

  useEffect(() => {
    Methods.load_bills_data(state.user.ID_Cus).then(respone_bills => {
      setState_Bill({
        refreshing:false,
        bills: [
          ...respone_bills
        ]
      })
    }).catch(err => console.log(err))
  }, [state.user.ID_Cus, state.load_bills])

  
  const load_bills = () => {
    setState_Bill({
      refreshing: true,
      reviews: []
    })
    Methods.load_bills_data(state.user.ID_Cus).then(respone_bills => {
      setState_Bill({
        refreshing:false,
        bills: [
          ...respone_bills
        ]
      })
    }).catch(err => console.log(err))
  }

  //navigation
  const {navigation, route} = props
  //function of navigate to/back
  const {navigate, goBack} = navigation

  const onItemPress = (bill) => {
    navigate('DetailScreen', {bill:bill, for_screen:false})
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Toolbar
        title = {'Bills'}
      />
      <FlatList
        style = {{flex: 1}}
        data = {state_Bill.bills}
        renderItem = {({item, index}) => {
          return (
            <BillItem
              bill = {item}
              key = {item.ID_Bill}
              onPress = {onItemPress}
            />
          )
        }}
        refreshControl = {
          <RefreshControl
            refreshing = {state_Bill.refreshing}
            onRefresh = {() => load_bills()}
          />
        }
      />
    </SafeAreaView>
  )
}

export default BillScreen