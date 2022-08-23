import { 
  METHOD_CHECK_MAIL_EXIST,
  METHOD_DEL_FAVORITE_DATA, 
  METHOD_GET_BILLDETAIL_DATA, 
  METHOD_GET_BILL_DATA, 
  METHOD_GET_CUSTOMER_DATA, 
  METHOD_GET_CUSTOMER_DATA_BYID, 
  METHOD_GET_FAVORITE_DATA, 
  METHOD_GET_FOOD_DATA, METHOD_GET_RESTAURANT, 
  METHOD_GET_REVIEWS_DATA, METHOD_INSERT_CUSTOMER, METHOD_INSERT_FAVORITE_DATA, URL_BILL_API, 
  URL_BILL_DETAIL_API, URL_CUSTOMER_API, 
  URL_FAVORITE_API, URL_FOOD_API, 
  URL_RESTAURANT_API 
} from "./Contants"
import AsyncStorage from '@react-native-async-storage/async-storage'

export const saveUser = async (ID_Cus) => {
  try {
    await AsyncStorage.setItem(
      'user',
      ID_Cus
    )
  } catch (error) {
    console.log('save User: ', error)
  }
}

export const check_mail = async(gmail) => {
  try {
    let formData = new FormData();
    formData.append("data", 
      JSON.stringify({
        method_name: METHOD_CHECK_MAIL_EXIST,
        Gmail: gmail
      })
    )
    let responeData = await fetch(URL_CUSTOMER_API, {
      method: 'POST',
      body: formData}).catch(error => console.log(error))
    let respone = await responeData.json()
    return respone
  } catch (error) {
    console.log("Check Cus: ", error)
  }
}

export const register_user = async(gmail, password) => {
  try {
    let formData = new FormData()
    formData.append("data", 
      JSON.stringify({
        method_name: METHOD_INSERT_CUSTOMER
      })
    )
    formData.append("customer",
      JSON.stringify({
        Gmail: gmail,
        Password: password,
        Name_Cus: '',
        Phone: ''
      })
    )
    let responeData = await fetch(URL_CUSTOMER_API, {
      method: 'POST',
      body: formData}).catch(error => console.log(error))
    let respone = await responeData.json()
    return respone
  } catch (error) {
    console.log("Register: ", error)
  }
}

export const load_user = async(ID_Cus) => {
  try {
    let formData = new FormData();
    formData.append("data", 
      JSON.stringify({
        method_name: METHOD_GET_CUSTOMER_DATA_BYID,
        ID_Cus: ID_Cus
      })
    )
    let responeData = await fetch(URL_CUSTOMER_API, {
      method: 'POST',
      body: formData}).catch(error => console.log(error))
    let respone = await responeData.json()
    return respone
  } catch (error) {
    console.log("Load Cus: ", error)
  }
}

export const load_user_gmail = async(Gmail) => {
  try {
    let formData = new FormData();
    formData.append("data", 
      JSON.stringify({
        method_name: METHOD_GET_CUSTOMER_DATA,
        Gmail: Gmail
      })
    )
    let responeData = await fetch(URL_CUSTOMER_API, {
      method: 'POST',
      body: formData}).catch(error => console.log(error))
    let respone = await responeData.json()
    return respone
  } catch (error) {
    console.log("Load Cus Email: ", error)
  }
}

export const load_restaurant_food = async() => {
  try {
    let formData = new FormData();
    formData.append("data", 
      JSON.stringify({
        method_name: METHOD_GET_RESTAURANT,
        ID_Res: 1
      })
    )
    let responeData = await fetch(URL_RESTAURANT_API, {
      method: 'POST',
      body: formData}).catch(error => console.log(error))
    let respone = await responeData.json()
    return respone
  } catch (error) {
    console.log("Load Restaurant: ", error)
  }
}

export const load_food_data = async() => {
  try {
    let result = []
    let formData = new FormData();
    formData.append("data", 
      JSON.stringify({
        method_name: METHOD_GET_FOOD_DATA
      })
    )
    let responeData = await fetch(URL_FOOD_API, {
      method: 'POST',
      body: formData}).catch(error => console.log(error))
    let respone = await responeData.json()
    respone.map((item) => {
      result.push({
        ...item,
        "Count": 0,
        "Price_Total": 0,
        "is_Favorite": false,
      })
    })
    return result
  } catch (error) {
    console.log("Load Food: ", error)
  }
}

export const load_reviews_data = async(ID_Food) => {
  try {
    let formData = new FormData();
    formData.append("data", 
      JSON.stringify({
        method_name: METHOD_GET_REVIEWS_DATA,
        ID_Food: ID_Food
      })
    )
    let responeData = await fetch(URL_BILL_DETAIL_API, {
      method: 'POST',
      body: formData}).catch(error => console.log(error))
    let respone = await responeData.json()
    return respone.reverse()
  } catch (error) {
    console.log("Load Reviews: ", error)
    debugger
  }
}

export const load_bills_data = async(ID_Cus) => {
  try {
    let formData = new FormData();
    formData.append("data", 
      JSON.stringify({
        method_name: METHOD_GET_BILL_DATA,
        ID_Cus: ID_Cus
      })
    )
    let responeData = await fetch(URL_BILL_API, {
      method: 'POST',
      body: formData}).catch(error => console.log(error))
    let respone = await responeData.json()
    return respone.reverse()
  } catch (error) {
    console.log("Load Bill: ", error)
    debugger
  }
} 

export const load_bills_details_data = async(ID_Bill) => {
  try {
    let formData = new FormData();
    formData.append("data", 
      JSON.stringify({
        method_name: METHOD_GET_BILLDETAIL_DATA,
        ID_Bill: ID_Bill
      })
    )
    let responeData = await fetch(URL_BILL_DETAIL_API, {
      method: 'POST',
      body: formData}).catch(error => console.log(error))
    let respone = await responeData.json()
    return respone
  } catch (error) {
    console.log("Load Bill Detail: ", error)
    debugger
  }
}

export const load_favorite_data = async(ID_Cus) => {
  try {
    let formData = new FormData();
    formData.append("data", 
      JSON.stringify({
        method_name: METHOD_GET_FAVORITE_DATA,
        ID_Cus: ID_Cus
      })
    )
    let responeData = await fetch(URL_FAVORITE_API, {
      method: 'POST',
      body: formData}).catch(error => console.log(error))
    let respone = await responeData.json()
    return respone
  } catch (error) {
    console.log("Load Favorite: ", error)
    debugger
  }
}

//is_Favorite true là xóa, false là insert
export const del_insert_favorite = async(ID_Food, ID_Cus, is_Favorite) => {
  try {
    let formData = new FormData();
    formData.append("data", 
      JSON.stringify({
        method_name: is_Favorite ? METHOD_DEL_FAVORITE_DATA :
          METHOD_INSERT_FAVORITE_DATA
      })
    )
    formData.append("favorite",
      JSON.stringify({
        ID_Food: ID_Food,
        ID_Cus: ID_Cus
      })
    )
    let responeData = await fetch(URL_FAVORITE_API, {
      method: 'POST',
      body: formData}).catch(error => console.log(error))
    let respone = await responeData.json()
    return respone
  } catch (error) {
    console.log("Load Bill Detail: ", error)
    debugger
  }
}