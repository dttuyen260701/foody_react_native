import { View, Text, SafeAreaView, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Toolbar, CartItem, BorderItem } from '../components'
import { HEIGHT, WIDTH } from '../contants/Contants'
import { Color, FontSize, Methods } from '../contants'
import { Actions, useBillState } from '../provider'

const CartScreen = (props) => {

  //navigation
  const {navigation, route} = props
  //function of navigate to/back
  const {navigate, goBack} = navigation
  
  const for_screen = route.params.for_screen

  const [cartState, setCartState] = useState({
    bill:{},
    billDetails:[]
  })

  const [state, dispatch] = useBillState()

  useEffect(() => {
    if(for_screen){
      setCartState({
        bill: state.bill,
        billDetails: state.foods.filter((food) => (food.Count > 0))
      })
    } else {
      const bill_temp = route.params.bill
      Methods.load_bills_details_data(bill_temp.ID_Bill)
      .then(responeBDT => {
        let respone = []
        responeBDT.map((item) => {
          state.foods.map((food) => {
            if(food.ID_Food === item.ID_Food){
              respone.push({
                ...item,
                'Name_Food': food.Name_Food,
                'Link_Img_Food': food.Link_Img_Food
              })
            }
          })
        })
        setCartState({
          bill: bill_temp,
          billDetails: [...respone]
        })
      }).catch(err => console.log(err))
    }
  }, [state.bill])

  const onClearPress = () => {
    dispatch(Actions.clear_bills())
  }

  const onPickAdressPress = () => {
    if(for_screen){
      navigate('PickMapScreen')
    } else {
      if(cartState.bill.done === "1"){
        dispatch(Actions.set_bill({
          bill: cartState.bill,
          bill_details: [...cartState.billDetails]
        }))
      } else {
        alert('TOO LONG')
      }
    }
  }

  const onOrderPress = () => {
    let day = new Date()
    if(for_screen){
      if(state.user.ID_Cus != '-1'){
        Methods.insert_bill_data({
          ...cartState.bill,
          ID_Cus: state.user.ID_Cus,
          Time: `${day.getFullYear()}-${day.getMonth() + 1}-${day.getDate()} ${day.getHours()}:${day.getMinutes()}:${day.getSeconds()}`
        }).then(nextID => {
          if(nextID.Next_ID != -1){
            cartState.billDetails.map((item, index) => {
              Methods.Insert_bill_details_data({
                ...item,
                ID_Bill: nextID.Next_ID,
                Rate: 0,
                Reviews: ""
              }).then(resp => {
                if(index === cartState.billDetails.length - 1){
                  dispatch(Actions.done_insert_bill())
                  navigate('BillScreen')
                }
              }).catch(err => console.log('bill detail: ', err))
            })
          }
        }).catch(err => console.log('insert bill: ', err))
      }
      else {
        console.log(state.user)
      }
    } else {
      Methods.update_bills_data(cartState.bill.ID_Bill).then(resp => {
        if(resp.value){
          dispatch(Actions.set_bill_reload())
          navigate('FeedBackScreen', {billDetails: cartState.billDetails})
        }
      }).catch(err => console.log(err))
    }
  }

  return (
    <SafeAreaView style = {{flex: 1}}>
      <Toolbar
        title = {(for_screen) ? 'Cart' : 'Bill Detail'}
        left_icon = {(!for_screen) ? 'chevron-back-outline' : undefined}
        left_Press = {() => goBack()}
        right_icon = {(for_screen) ? 'trash-outline' : undefined}
        right_Press = {() => onClearPress()}
      />
      <FlatList
        style = {style_Cart.flatlist}
        data = {cartState.billDetails}
        renderItem = {({item, index}) => (
          <CartItem
            cartItem = {item}
            for_screen = {for_screen}
            key={`${item.ID_Bill}-${item.ID_Food}`}
          />
        )}
      />
      <BorderItem/>
      <View style = {style_Cart.text_area}>
        <Text style = {style_Cart.text_title}>
          Shipping to:
        </Text>
        <Text style = {style_Cart.text_content}>
          {cartState.bill.Address}
        </Text>
      </View>
      <View style = {style_Cart.text_area}>
        <View style = {{flex: 1, flexDirection: 'row'}}>
          {for_screen && <Text style = {style_Cart.text_title}>
            Distance:
          </Text>}
          {for_screen && <Text style = {style_Cart.text_content}>
            {(Math.round(cartState.bill.distance*100)/100).toFixed(2)} km
          </Text>}
        </View>
        <View style = {{flex: 1, flexDirection: 'row'}}>
          <Text style = {style_Cart.text_title}>
            Shipping Fee:
          </Text>
          <Text style = {style_Cart.text_content}>
            $ {(Math.round(cartState.bill.Shipping_fee*100)/100).toFixed(2)} 
          </Text>
        </View>
      </View>
      <View 
        style = {{
          ...style_Cart.text_area,
          justifyContent: 'flex-end'
        }}
      >
        <Text 
          style = {{
            ...style_Cart.text_title,
            fontWeight:'bold',
            fontSize: FontSize.big
          }}
        >
          Total:
        </Text>
        <Text 
          style = {{
            ...style_Cart.text_content,
            fontWeight:'bold',
            fontSize: FontSize.big,
            flex: 0,
            marginHorizontal: 20
          }}
        >
          $ {(Math.round(cartState.bill.Total*100)/100).toFixed(2)}
        </Text>
      </View>
      <View style = {style_Cart.viewButton}>
        <TouchableOpacity
          style={style_Cart.button}
          onPress = {() => onPickAdressPress()}
        >
          <Text
            style = {style_Cart.text_btn}
          >
            {for_screen ? 'PICK ADDRESS' :
            (cartState.bill.done === "1" ? 'RE-ODER' : 'TOO LONG')}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style_Cart.button}
          onPress = {() => onOrderPress()}
        >
          <Text
            style = {style_Cart.text_btn}
          >
            {for_screen ? 'ORDER' :
            (cartState.bill.done === "1" ? 'FEEDBACK' : 'RECEIVERED')}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const style_Cart = StyleSheet.create({
  flatlist:{
    height: HEIGHT*9/14,
    paddingBottom: 2
  },
  text_area:{
    height: HEIGHT*1/14,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text_title:{
    fontSize: FontSize.small,
    color:'black',
    paddingHorizontal: 15,
    fontWeight:'bold'

  },
  text_content:{
    fontSize: FontSize.small,
    color:'black',
    fontStyle: 'italic',
    flex: 1,
    paddingRight:10,
    fontWeight:'bold'
  },
  viewButton:{
    height: HEIGHT*1/14,
    flexDirection:'row',
    margin: 10,
    justifyContent:'space-around'
  },
  button:{
    width: WIDTH*4/10,
    backgroundColor: Color.button_Cart,
    alignItems:'center',
    borderRadius: 30,
    borderWidth: 3,
    borderColor: Color.border_color,
    marginVertical: 3
  },
  text_btn:{
    fontWeight:'bold',
    fontSize: FontSize.medium - 2,
    flex:1,
    textAlignVertical:'center',
    color: 'white'
  }
})

export default CartScreen