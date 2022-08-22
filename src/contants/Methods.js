import { METHOD_DEL_FAVORITE_DATA, METHOD_GET_CUSTOMER_DATA_BYID, METHOD_GET_FAVORITE_DATA, METHOD_GET_FOOD_DATA, METHOD_GET_RESTAURANT, METHOD_GET_REVIEWS_DATA, URL_BILL_DETAIL_API, URL_CUSTOMER_API, URL_FAVORITE_API, URL_FOOD_API, URL_RESTAURANT_API } from "./Contants"

export const load_user = async(ID_Cus) => {
  try {
    let formData = new FormData();
    formData.append("data", 
    JSON.stringify({
      method_name: METHOD_GET_CUSTOMER_DATA_BYID,
      ID_Cus: ID_Cus
    }))
    let responeData = await fetch(URL_CUSTOMER_API, {
      method: 'POST',
      body: formData}).catch(error => console.log(error))
    let respone = await responeData.json()
    return respone
  } catch (error) {
    console.log("Load Cus: ", error)
  }
}

export const load_restaurant_food = async() => {
  try {
    let formData = new FormData();
    formData.append("data", 
    JSON.stringify({
      method_name: METHOD_GET_RESTAURANT,
      ID_Res: 1
    }))
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
    }))
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

export const load_favorite_data = async(ID_Cus) => {
  try {
    let formData = new FormData();
    formData.append("data", 
    JSON.stringify({
      method_name: METHOD_GET_FAVORITE_DATA,
      ID_Cus: ID_Cus
    }))
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

export const load_reviews_data = async(ID_Food) => {
  try {
    let formData = new FormData();
    formData.append("data", 
    JSON.stringify({
      method_name: METHOD_GET_REVIEWS_DATA,
      ID_Food: ID_Food
    }))
    let responeData = await fetch(URL_BILL_DETAIL_API, {
      method: 'POST',
      body: formData}).catch(error => console.log(error))
    let respone = await responeData.json()
    return respone
  } catch (error) {
    console.log("Load Favorite: ", error)
    debugger
  }
}