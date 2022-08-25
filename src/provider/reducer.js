import { 
  ACTION_CLEAR_BILLS, 
  ACTION_DONE_INSERT_BILL, 
  ACTION_GET_FAVORITE, 
  ACTION_INCREASE_BILL_DT, 
  ACTION_REDUCE_BILL_DT, 
  ACTION_SET_BILL, 
  ACTION_SET_BILL_RELOAD, 
  ACTION_SET_FAVORITE, 
  ACTION_SET_FOODS, 
  ACTION_SET_RELOAD, 
  ACTION_SET_RESTAURANT, 
  ACTION_SET_USER 
} from "../contants/Contants"

const initState = {
  user:{
    ID_Cus: '-1'
  },
  restaurant:{

  },
  bill:{
    "ID_Bill": "-1",
    "ID_Cus": "0",
    "Total": 0.0,
    "Time": "",
    "Address": "Da Nang City",
    "Shipping_fee": 0,
    "done": '0',
    "distance": 0
  },
  foods:[
    // {
    //   "ID_Food": "-1",
    //   "Name_Food": "Slide",
    //   SlideShow:
    //   [
    //     'https://d1sag4ddilekf6.azureedge.net/compressed/merchants/5-CZLCUF43RADYT6/hero/96b4e0c02fc14f509bf113557f71cf3d_1660515853715283384.jpg',
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeDGJC5Lnz8NunbLHkDAMuWAk8QP4zTC-KvA&usqp=CAU',
    //     'https://vtv1.mediacdn.vn/zoom/550_339/2020/8/26/kfc-2-1598400959519635332769.jpg',
    //   ]
    // },
    // {
    //   "ID_Food": "1",
    //   "Name_Food": "LEMONGRASS CHICKEN (2 PCS)",
    //   "Description_Food": "2 Pcs Lemongrass Chicken",
    //   "Frice_Food": "2.5",
    //   "Link_Img_Food": "https://kfcvietnam.com.vn/uploads/combo/93555ac3f1cadf4112a5e272903a6320.jpg",
    //   "Time_Cooking": "5",
    //   "Rate": "4.76471",
    //   "Status": "1",
    //   "Is_Available": "1",
    //   "is_Favorite": true,
    //   "Count": 0
    // },
    // {
    //   "ID_Food": "2",
    //   "Name_Food": "TENDERODS CHICKEN SKEWER (2 PIECES)",
    //   "Description_Food": "2 pcs Tenderods Chicken Skewer",
    //   "Frice_Food": "1.5",
    //   "Link_Img_Food": "https://kfcvietnam.com.vn/uploads/combo/36227503c3ec95248380c7edb19e4494.jpg",
    //   "Time_Cooking": "7",
    //   "Rate": "4.80952",
    //   "Status": "1",
    //   "Is_Available": "1",
    //   "is_Favorite": false,
    //   "Count": 0
    // },
    // {
    //   "ID_Food": "3",
    //   "Name_Food": "PACHITO",
    //   "Description_Food": "1 Pachito",
    //   "Frice_Food": "1.75",
    //   "Link_Img_Food": "https://kfcvietnam.com.vn/uploads/combo/f6d771285267f9460d27074f54f0bc9f.png",
    //   "Time_Cooking": "10",
    //   "Rate": "4.83333",
    //   "Status": "1",
    //   "Is_Available": "1",
    //   "is_Favorite": true,
    //   "Count": 0
    // },
    // {
    //   "ID_Food": "4",
    //   "Name_Food": "Fried Chicken (1 Pc)",
    //   "Description_Food": "1 Pc of Hot & Spicy Chicken / 1 Pc of Non Spicy Crispy Chicken / 1 Pc of Original Recipe Chicken",
    //   "Frice_Food": "1.8",
    //   "Link_Img_Food": "https://kfcvietnam.com.vn/uploads/combo/7166d1bee7b66d1e90e7899cda0b03be.jpg",
    //   "Time_Cooking": "10",
    //   "Rate": "4.69444",
    //   "Status": "1",
    //   "Is_Available": "1",
    //   "is_Favorite": false,
    //   "Count": 0
    // },
    // {
    //   "ID_Food": "7",
    //   "Name_Food": "COMBO FRIED CHICKEN A",
    //   "Description_Food": "2 Pcs of Hot & Spicy Chicken / 2 Pcs of Non Spicy Crispy Chicken / 2 Pcs of Original Recipe Chicken\n1 Pepsi Can",
    //   "Frice_Food": "5",
    //   "Link_Img_Food": "https://kfcvietnam.com.vn/uploads/combo/b09860e31866521c22705711916cc402.jpg",
    //   "Time_Cooking": "9",
    //   "Rate": "4.83333",
    //   "Status": "1",
    //   "Is_Available": "1",
    //   "is_Favorite": false,
    //   "Count": 0
    // },
    // {
    //   "ID_Food": "8",
    //   "Name_Food": "COMBO FRIED CHICKEN B",
    //   "Description_Food": "1 Hot Wings 3 Pcs-1 French Fries (L)-1 Pepsi Can",
    //   "Frice_Food": "4",
    //   "Link_Img_Food": "https://kfcvietnam.com.vn/uploads/combo/7d36d8d380315c169ba830b0b5b4c26d.jpg",
    //   "Time_Cooking": "6",
    //   "Rate": "5",
    //   "Status": "1",
    //   "Is_Available": "1",
    //   "is_Favorite": false,
    //   "Count": 0
    // }
  ],
  reload: false,
  load_bills: false
}

const reducer = (state, action) => {
  let total = 0
  switch(action.type) {
    case ACTION_INCREASE_BILL_DT:
      state.foods.map((item) => {
        if(item.ID_Food === action.payload.ID_Food){
          item.Count = parseInt(item.Count) + 1
          item.Price_Total = parseFloat(action.payload.Frice_Food) * item.Count
        }
      })
      state.foods.map((item, index)=> {
        if(index > 0){
          total = total + item.Price_Total
        }
      })
      state.bill.Total = (total >= 0) ? total : 0
      return {
        ...state,
        bill: {
          ...state.bill
        }
      }
    case ACTION_REDUCE_BILL_DT:
      state.foods.map((item) => {
        if(item.ID_Food === action.payload.ID_Food){
          item.Count = parseInt(item.Count) - 1
          item.Price_Total = parseFloat(action.payload.Frice_Food) * item.Count
        }
      })
      state.foods.map((item, index)=> {
        if(index > 0){
          total = total + item.Price_Total
        }
      })
      state.bill.Total = (total >= 0) ? total : 0
      return {
        ...state
      }
    case ACTION_SET_USER:
      return {
        ...state,
        user: action.payload
      }
    case ACTION_GET_FAVORITE:
      state.foods.map((item) => {
        if(action.payload.length === 0){
          item.is_Favorite = false
        } else {
          action.payload.map((favorite) => {
            if(item.ID_Food === favorite.ID_Food){
              item.is_Favorite = true
            }
          })
        }
      })
      return {
        ...state,
      }
    case ACTION_SET_FAVORITE:
      state.foods.map((item) => {
        if(item.ID_Food === action.payload.ID_Food){
          item.is_Favorite = action.payload.is_Favorite
        }
      })
      return {
        ...state
      }
    case ACTION_SET_RESTAURANT:
      return {
        ...state,
        restaurant: action.payload
      }
    case ACTION_CLEAR_BILLS:
      state.foods.map((item) => {
        item.Count = 0
        item.Price_Total = 0
      })
      return {
        ...state,
        bill:{
          ...state.bill,
          "Total": 0
        }
      }
    case ACTION_SET_FOODS:
      return {
        ...state,
        foods: [{
          "ID_Food": "-1",
          "Name_Food": "Slide",
          SlideShow: [state.restaurant.Link_Slide_1, state.restaurant.Link_Slide_2]
        },...action.payload]
      }
    case ACTION_SET_BILL_RELOAD:
      return {
        ...state,
        load_bills: !state.load_bills
      }
    case ACTION_SET_RELOAD:
      return {
        ...state,
        bill:{
          ...state.bill,
          "Total": 0,
        },
        reload: action.payload.reload,
        foods: [
          {
            "ID_Food": "-1",
            "Name_Food": "Slide",
            SlideShow: [state.restaurant.Link_Slide_1, state.restaurant.Link_Slide_2]
          }
          ,...action.payload.foods]
      }
    case ACTION_SET_BILL:
      state.foods.map((item) => {
        action.payload.bill_details.map((detail) => {
          if(item.ID_Food === detail.ID_Food){
            item.Count = detail.Count
            item.Price_Total = detail.Price_Total
          }
        })
      })
      return {
        ...state,
        bill: action.payload.bill
      }
    case ACTION_DONE_INSERT_BILL:
      state.foods.map((item) => {
        item.Count = 0
        item.Price_Total = 0
      })
      return {
        ...state,
        bill:{
          "ID_Bill": "-1",
          "ID_Cus": "0",
          "Total": 0.0,
          "Time": "",
          "Address": "",
          "Shipping_fee": 0,
          "done": '0',
          "distance": 0
        },
        load_bills: !state.load_bills
      }
    default:
      return state
  }
}

export {initState}
export default reducer