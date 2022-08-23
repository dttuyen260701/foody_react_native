import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { HEIGHT, WIDTH } from '../contants/Contants'
import { Color, FontSize, Methods } from '../contants'
import {Rating} from 'react-native-ratings'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Actions, useBillState } from '../provider'

const FirstReviewItem = (props) => {

  const [state, dispatch] = useBillState()

  const {food} = props
  
  const update_Favorite = () => {
    Methods.del_insert_favorite(food.ID_Food, state.user.ID_Cus, food.is_Favorite)
      .then(resp => {
        if(resp){
          dispatch(Actions.set_favorite({'ID_Food': food.ID_Food, 'is_Favorite': !food.is_Favorite}))
        }
      }).catch(err => console.log(err))
  }

  const fav_btn = () => {
    if(state.user.ID_Cus !== -1) {
      update_Favorite()
    } else {
      alert('Please login to add to favorite list.')
    }
  }

  return (
    <View style = {style_First_RV.parent}>
      <Image
        source={{uri: food.Link_Img_Food}}
        style = {style_First_RV.image}
      />
      <View style={style_First_RV.food_name_price}>
        <Text 
          style = {style_First_RV.food_name}
        >
          {food.Name_Food}
        </Text>
        <Text 
          style = {style_First_RV.food_price}
          numberOfLines={1}
        >
          $ {food.Frice_Food}
        </Text>
        <TouchableOpacity
          onPress={fav_btn}
          activeOpacity = {0.9}
        >
          <Ionicons
            name = {(food.is_Favorite) ? 'heart' : 'heart-outline'}
            size = {35}
            color = {(food.is_Favorite) ? 'red' : 'black'}
          />
        </TouchableOpacity>
      </View>
      <View style = {style_First_RV.food_review}>
        <View 
          style = {{
            flex: 1, 
            alignItems:'flex-start'
          }}
        >
          <Rating
            type='custom'
            ratingCount={5}
            imageSize={32}
            readonly
            startingValue={food.Rate}
          />
        </View>
        <Ionicons
          name = {'time-outline'}
          size = {25}
          color = {'gray'}
          style = {{marginHorizontal: 5}}
        />
        <Text style={style_First_RV.food_time_Cooking}>
          {food.Time_Cooking} mins 
        </Text>
      </View>
    </View>
  )
}

const style_First_RV = StyleSheet.create({
  parent: {
    height: HEIGHT*3/10,
  },
  image: {
    height: HEIGHT*6*3/100,
    width: WIDTH,
    resizeMode: 'center',
    backgroundColor: Color.border_color
  },
  food_name_price: {
    flexDirection: 'row',
    marginHorizontal: 5,
    alignItems: 'center'
  },
  food_name:{
    fontSize: FontSize.medium,
    color:'black',
    textAlign:'left',
    flex:1,
    fontWeight:'bold',
    marginRight: 5
  },
  food_price:{
    fontSize: FontSize.medium,
    color:'black',
    textAlign:'left',
    fontWeight:'bold',
    marginRight: 10
  },
  food_review: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginEnd: 10,
    alignItems: 'center'
  },
  food_time_Cooking:{
    color: 'gray',
    textAlign:'left',
    fontSize: FontSize.medium
  },
})

export default FirstReviewItem