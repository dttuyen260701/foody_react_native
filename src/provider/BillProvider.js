import { View, Text } from 'react-native'
import React, {  useContext, useEffect, useReducer } from 'react'
import reducer, { initState } from './reducer'
import BillContext from './BillContext'
import { Methods } from '../contants'
import { Actions, } from '.'
import Logger from './Logger'
import AsyncStorage from '@react-native-async-storage/async-storage'

const BillProvider = ({children}) => {
  const [state, dispatch] = useReducer(Logger(reducer), initState)

  useEffect(() => {
    const getData = async () => {
      try {
        const value = await AsyncStorage.getItem('user')
        if(value !== null) {
          Methods.load_user(value).then(respone => {
            dispatch(Actions.set_user(respone[0]))
          }).catch(err => console.log(err))
        }
      } catch(e) {
        console.log(e)
      }
    }
    getData().then(() => {
      Methods.load_restaurant_food().then(respone_res => {
      dispatch(Actions.set_restaurant(respone_res[0]))
      Methods.load_food_data().then(respone_food => {
        dispatch(Actions.set_foods(respone_food))
        if(state.user.ID_Cus !== -1){
          Methods.load_favorite_data(state.user.id).then(respone_fav => {
            dispatch(Actions.get_favorite(respone_fav))
          }).catch(err => console.log(err))
        }
      }).catch(err => console.log(err))
    }).catch(err => console.log(err))
    }).catch(err => console.log(err))
  }, [state.reload])

  return (
    <BillContext.Provider value={[state, dispatch]}>
      {children}
    </BillContext.Provider>
  )
}

export default BillProvider