import { View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FeedBackItem, Toolbar } from '../components'
import { Color, FontSize } from '../contants'
import { WIDTH, HEIGHT } from '../contants/Contants'

const FeedBackScreen = (props) => {

  const {navigation, route} = props

  const {navigate, goBack} = navigation

  const [done, setDone] = useState(false)

  const billDetails = route.params.billDetails

  useEffect(() => {
    let temp = billDetails.filter((item) => (
      (parseInt(item.Rate) === 0)
    ))
    if(temp.length === 0){
      setDone(true)
    } 
  }, [])

  return (
    <SafeAreaView style={{height: HEIGHT*13/14 - 10, backgroundColor:'white'}}>
      <Toolbar
        title = 'Your FeedBack'
        left_icon = 'chevron-back-outline'
        left_Press = {() => goBack()}
      />
      <Text style={style_FB_Scr.text_Thanks}>
        We are very happy to to receive your feedback
      </Text>
      <FlatList
        data={billDetails}
        style={style_FB_Scr.list_feedback}
        renderItem = {({item, index}) => (
          <FeedBackItem
            feedback = {item}
            onRating = {() => {}}
            key = {`${item.ID_Bill}-${item.ID_Food}`}
          />
        )}
      />
      {!done && <TouchableOpacity 
        style = {style_FB_Scr.button}
        onPress = {() => {}}
        activeOpacity = {0.9}
      >
        <Text style={style_FB_Scr.text_btn}>
          SEND US
        </Text>
      </TouchableOpacity>}
    </SafeAreaView>
  )
}

const style_FB_Scr = StyleSheet.create({
  text_Thanks:{
    backgroundColor:'gray',
    color:'black',
    fontSize: FontSize.medium,
    height: 40,
    textAlignVertical:'center',
    textAlign: 'center',
    fontWeight: 'bold'
  },
  list_feedback:{
    // height: HEIGHT*13/14 - 40 - 40
    flex: 1
  },
  button:{
    height: HEIGHT*1/14,
    width: WIDTH*45/100,
    backgroundColor: Color.button_Cart,
    alignItems:'center',
    alignSelf:'center',
    borderRadius: 30,
    borderWidth: 3,
    borderColor: Color.border_color,
    marginVertical: 3,
  },
  text_btn:{
    fontWeight:'bold',
    fontSize: FontSize.medium - 2,
    flex:1,
    textAlignVertical:'center',
    color: 'white'
  }
})

export default FeedBackScreen