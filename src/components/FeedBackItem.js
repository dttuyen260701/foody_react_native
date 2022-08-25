import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Color, FontSize } from '../contants'
import { HEIGHT } from '../contants/Contants'
import BorderItem from './BorderItem'
import {Rating} from 'react-native-ratings'

const FeedBackItem = (props) => {

  const {feedback, onChangeValue} = props

  const [text, setText] = useState(feedback.Reviews)

  return (
    <View>
      <BorderItem/>
      <View style = {style_FB_item.parent}>
        <View style={style_FB_item.first_area}>
          <Image
            source={{uri: feedback.Link_Img_Food}}
            style = {style_FB_item.image}
          />
          <Text style={style_FB_item.name_food}>
            {feedback.Name_Food}
          </Text>
        </View>
        <Rating
          type='custom'
          ratingCount={5}
          imageSize={30}
          startingValue={(parseInt(feedback.Rate) === 0) ? 5 : parseInt(feedback.Rate)}
          style = {{height: HEIGHT*20/300, justifyContent:'center'}}
          readonly = {!(parseInt(feedback.Rate) === 0)}
          onFinishRating = {rate => onChangeValue(feedback, rate, false)}
        />
        <TextInput
          placeholder={(parseInt(feedback.Rate) === 0) ? 'Your feeling' : ''}
          style={style_FB_item.text_area}
          placeholderTextColor={Color.border_color}
          value = {text}
          editable = {(parseInt(feedback.Rate) === 0)}
          onChangeText = {textVL => {
            onChangeValue(feedback, textVL, true)
            setText(textVL)
          }}
          multiline
        />
      </View>
    </View>
  )
}

const style_FB_item = StyleSheet.create({
  parent:{
    height: HEIGHT*20/100,
    padding: 1
  },
  first_area:{
    flexDirection:'row',
    height: HEIGHT*20/300,
    justifyContent:'center',
  },
  text_area:{
    justifyContent:'flex-start',
    color:'black',
    fontSize: FontSize.small,
  },
  image:{
    aspectRatio: 1,
    resizeMode: 'cover',
  },
  name_food:{
    flex:1,
    color:'black',
    fontSize: FontSize.medium,
    marginLeft: 10,
    alignSelf:'center'
  }
})

export default FeedBackItem