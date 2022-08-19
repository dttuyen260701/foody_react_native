import { View, Text } from 'react-native'
import React from 'react'
import { Toolbar } from '../components'

const BillDetailScreen = (props) => {

  //navigation
  const {navigation, route} = props
  //function of navigate to/back
  const {navigate, goBack} = navigation

  const bill = route.params.bill

  return (
    <View>
      <Toolbar
        title = {'Bill Detail'}
        left_icon = {'chevron-back-outline'}
        left_Press = {() => goBack()}
      />
      <Text style={{color:'black', fontSize: 25}}>{bill.ID_Bill} - {bill.Total}</Text>
    </View>
  )
}

export default BillDetailScreen