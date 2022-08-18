import { View, Text } from 'react-native'
import React from 'react'

const FoodDetailScreen = (props) => {
  
  //navigation
  const {navigation, route} = props
  //function of navigate to/back
  const {navigate, goBack} = navigation

  const food = route.params.food

  return (
    <View>
      <Text style = {{color:'black'}}>{food.Name_Food}</Text>
    </View>
  )
}

export default FoodDetailScreen