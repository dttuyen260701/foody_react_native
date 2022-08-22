import { View, Text } from 'react-native'
import React, { createContext, useContext } from 'react'

const BillContext = createContext({})

const BillProvider = () => {
  return (
    <View>
      <Text>BillProvider</Text>
    </View>
  )
}

export default BillProvider