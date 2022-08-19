import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import BorderItem from './BorderItem'
import { HEIGHT } from '../contants/Contants'
import { Color, FontSize } from '../contants'
import {Rating} from 'react-native-ratings'

const ReviewItem = (props) => {

  const {reviews} = props

  return (
    <View style={style_Reviews.parent}>
      <BorderItem/>
      <View style = {{marginHorizontal: 5}}>
        <Text style = {style_Reviews.reviews_name}>
          {reviews.Name_Cus}
        </Text>
        <View 
          style = {{
            alignItems:'flex-start'
          }}
        >
          <Rating
            type='custom'
            ratingCount={5}
            imageSize={15}
            readonly
            startingValue={reviews.Rate}
          />
        </View>
        <Text style = {style_Reviews.review_Time}>
          {reviews.Time}
        </Text>
        <Text style = {style_Reviews.review_content}>
          {reviews.Reviews}
        </Text>
      </View>
    </View>
  )
}

const style_Reviews = StyleSheet.create({
  parent:{
  },
  reviews_name:{
    color:'black',
    fontSize:FontSize.medium,
    fontWeight:'bold'
  },
  review_Time: {
    color: Color.border_color,
    fontSize:FontSize.small,
  },
  review_content: {
    color: 'black',
    fontSize:FontSize.small,
  }
})

export default ReviewItem