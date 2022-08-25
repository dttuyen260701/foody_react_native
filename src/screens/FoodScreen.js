import { View, Text, SafeAreaView, StyleSheet, TextInput, FlatList, RefreshControl} from 'react-native'
import React, { useEffect, useState } from 'react'
import {Toolbar, SlideShow , FoodItem, LoadItem} from '../components'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Color, FontSize, Methods } from '../contants';
import { Actions, useBillState } from '../provider';

const FoodScreen = (props) => {
  const [searchText, setSearchText] = useState('')

  const [state, dispatch] = useBillState()

  // const [foods, setFoods] = useState(state.foods)
  const foods = state.foods

  const load_food = () => {
    dispatch(Actions.set_reload({
      reload: true,
      foods: []
    }))
    Methods.load_restaurant_food().then(respone_res => {
      dispatch(Actions.set_restaurant(respone_res[0]))
      Methods.load_food_data().then(respone_food => {
        dispatch(Actions.set_reload({
          reload: false,
          foods: respone_food
        }))
        if(state.user.ID_Cus != -1){
          Methods.load_favorite_data(state.user.ID_Cus).then(respone_fav => {
            dispatch(Actions.get_favorite(respone_fav))
          }).catch(err => console.log(err))
        }
      }).catch(err => console.log(err))
    }).catch(err => console.log(err))
  }

  const filterList = () => foods.filter((food, index) => 
    (index === 0 ||
      food.Name_Food.toLowerCase().includes(searchText.toLowerCase()))
  )

  const onFoodClick = (item, amount) => {
    navigate('DetailScreen', {food:item, amount: amount})
  }
  
  //navigation
  const {navigation, route} = props
  //function of navigate to/back
  const {navigate, goBack} = navigation

  return (
    <SafeAreaView style={{flex: 1}}>
      <Toolbar
        title = {'Foods'}
      />
      <View style = {style_Food_Screen.search_view}>
        <Ionicons
          style={{position:'absolute', top:10, left:10, height:30, width:30, tintColor:'black'}}
          name = {'search-outline'}
          color = {'black'}
          size = {27}
        />
        <TextInput
          placeholder='Search'
          style={style_Food_Screen.search_input}
          autoCorrect={false}
          onChangeText = {(text) => setSearchText(text)}
          placeholderTextColor = {Color.border_color}
          value={searchText}
        />
      </View>
      {
        (foods.length <= 1) 
        ? <LoadItem/> : 
        <FlatList
          data = {filterList()}
          renderItem = {({item, index}) => (
            (index === 0) ?
            (searchText.length === 0 && <SlideShow
              images = {item.SlideShow}
            />) :
            <FoodItem 
              food={item}
              key={item.ID_Food}
              onClick = {onFoodClick}
            />
          )}
          style={{marginTop: 2, flex:1}}
          refreshControl = {
            <RefreshControl
              refreshing = {state.reload}
              onRefresh = {() => load_food()}
            />
          }
        />}
    </SafeAreaView>
  )
}

const style_Food_Screen = StyleSheet.create({
  search_view:{
    height:50,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
  },
  search_input:{
    height:40,
    flex:1,
    borderRadius:5,
    padding:5,
    opacity:0.8,
    paddingStart:40,
    color:'black',
    fontSize: FontSize.medium,
    borderWidth: 1,
    borderColor: Color.primary_color,
    marginHorizontal: 5
  }
})

export default FoodScreen