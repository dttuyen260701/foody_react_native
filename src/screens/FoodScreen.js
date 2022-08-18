import { View, Text, SafeAreaView, StyleSheet, TextInput, FlatList} from 'react-native'
import React, { useState } from 'react'
import Toolbar from '../components/Toolbar'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Color, FontSize } from '../contants';
import SlideShow from '../components/SlideShow';
import FoodItem from '../components/FoodItem';

const FoodScreen = (props) => {
  const [searchText, setSearchText] = useState('')

  const [foods, setFoods] = useState([
    {
      "Name_Food": "Slide",
      SlideShow:
      [
        'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-CZLCUF43RADYT6/hero/96b4e0c02fc14f509bf113557f71cf3d_1660515853715283384.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeDGJC5Lnz8NunbLHkDAMuWAk8QP4zTC-KvA&usqp=CAU',
        'https://vtv1.mediacdn.vn/zoom/550_339/2020/8/26/kfc-2-1598400959519635332769.jpg',
      ]
    },
    {
      "ID_Food": "1",
      "Name_Food": "LEMONGRASS CHICKEN (2 PCS)",
      "Description_Food": "2 Pcs Lemongrass Chicken",
      "Frice_Food": "2.5",
      "Link_Img_Food": "https://kfcvietnam.com.vn/uploads/combo/93555ac3f1cadf4112a5e272903a6320.jpg",
      "Time_Cooking": "5",
      "Rate": "4.76471",
      "Status": "1",
      "Is_Available": "1",
      "is_Favorite": false
    },
    {
      "ID_Food": "2",
      "Name_Food": "TENDERODS CHICKEN SKEWER (2 PIECES)",
      "Description_Food": "2 pcs Tenderods Chicken Skewer",
      "Frice_Food": "1.5",
      "Link_Img_Food": "https://kfcvietnam.com.vn/uploads/combo/36227503c3ec95248380c7edb19e4494.jpg",
      "Time_Cooking": "7",
      "Rate": "4.80952",
      "Status": "1",
      "Is_Available": "1",
      "is_Favorite": false
    },
    {
      "ID_Food": "3",
      "Name_Food": "PACHITO",
      "Description_Food": "1 Pachito",
      "Frice_Food": "1.75",
      "Link_Img_Food": "https://kfcvietnam.com.vn/uploads/combo/f6d771285267f9460d27074f54f0bc9f.png",
      "Time_Cooking": "10",
      "Rate": "4.83333",
      "Status": "1",
      "Is_Available": "1",
      "is_Favorite": false
    },
    {
      "ID_Food": "4",
      "Name_Food": "Fried Chicken (1 Pc)",
      "Description_Food": "1 Pc of Hot & Spicy Chicken / 1 Pc of Non Spicy Crispy Chicken / 1 Pc of Original Recipe Chicken",
      "Frice_Food": "1.8",
      "Link_Img_Food": "https://kfcvietnam.com.vn/uploads/combo/7166d1bee7b66d1e90e7899cda0b03be.jpg",
      "Time_Cooking": "10",
      "Rate": "4.69444",
      "Status": "1",
      "Is_Available": "1",
      "is_Favorite": false
    },
    {
      "ID_Food": "7",
      "Name_Food": "COMBO FRIED CHICKEN A",
      "Description_Food": "2 Pcs of Hot & Spicy Chicken / 2 Pcs of Non Spicy Crispy Chicken / 2 Pcs of Original Recipe Chicken\n1 Pepsi Can",
      "Frice_Food": "5",
      "Link_Img_Food": "https://kfcvietnam.com.vn/uploads/combo/b09860e31866521c22705711916cc402.jpg",
      "Time_Cooking": "9",
      "Rate": "4.83333",
      "Status": "1",
      "Is_Available": "1",
      "is_Favorite": false
    },
    {
      "ID_Food": "8",
      "Name_Food": "COMBO FRIED CHICKEN B",
      "Description_Food": "1 Hot Wings 3 Pcs-1 French Fries (L)-1 Pepsi Can",
      "Frice_Food": "4",
      "Link_Img_Food": "https://kfcvietnam.com.vn/uploads/combo/7d36d8d380315c169ba830b0b5b4c26d.jpg",
      "Time_Cooking": "6",
      "Rate": "5",
      "Status": "1",
      "Is_Available": "1",
      "is_Favorite": false
    }
  ])

  const filterList = () => foods.filter((food, index) => 
    (index === 0 ||
      food.Name_Food.toLowerCase().includes(searchText.toLowerCase()))
  )

  const onFoodClick = (item) => {
    navigate('DetailScreen', {food:item})
  }
  
  //navigation
  const {navigation, route} = props
  //function of navigate to/back
  const {navigate, goBack} = navigation

  return (
    <SafeAreaView style={{flex: 1}}>
      <Toolbar
        title = {'Food'}
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
            onClick = {() => onFoodClick(item)}
          />
        )}
        style={{marginTop: 2, flex:1}}
      />
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