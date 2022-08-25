import { Dimensions } from "react-native"

export const FOODS_SCREEN = 'Foods'
export const CARTS_SCREEN = 'Carts'
export const BILLS_SCREEN = 'Bills'
export const SETTINGS_SCREEN = 'Settings'

export const HEIGHT = Dimensions.get('window').height
export const WIDTH = Dimensions.get('window').width

export const ACTION_INCREASE_BILL_DT = 'INCREASE_BILL_DETAIL'
export const ACTION_REDUCE_BILL_DT = 'REDUCE_BILL_DT'
export const ACTION_CLEAR_BILLS = 'CLEAR_BILLS'
export const ACTION_SET_USER = 'SET_USER'
export const ACTION_GET_FAVORITE = 'GET_FAVORITE'
export const ACTION_SET_FAVORITE = 'SET_FAVORITE'
export const ACTION_SET_RESTAURANT = 'SET_RESTAURANT'
export const ACTION_SET_FOODS = 'SET_FOODS'
export const ACTION_SET_BILL = 'SET_BILL'
export const ACTION_SET_RELOAD = 'SET_RELOAD'
export const ACTION_SET_BILL_RELOAD = 'SET_BILL_RELOAD'
export const ACTION_DONE_INSERT_BILL = 'DONE_INSERT_BILL'

export const URL_SERVER = 'https://tuyen2607.000webhostapp.com/'
export const URL_FOOD_API = URL_SERVER + "api_food.php";
export const URL_CUSTOMER_API = URL_SERVER + "api_customer.php";
export const URL_FAVORITE_API = URL_SERVER + "api_favorite.php";
export const URL_BILL_API = URL_SERVER + "api_bill.php";
export const URL_BILL_DETAIL_API = URL_SERVER + "api_bill_detail.php";
export const URL_RESTAURANT_API = URL_SERVER + "api_restaurant.php";

//API RESTAURANT
export const METHOD_GET_RESTAURANT = 'method_get_restaurant_data'

//API FOOD
export const METHOD_GET_FOOD_DATA = 'method_get_food_data'
export const METHOD_UPDATE_FOOD_DATA = 'method_get_update_food_data'

//API FAVORITE
export const METHOD_GET_FAVORITE_DATA = 'method_get_favorite_data'
export const METHOD_INSERT_FAVORITE_DATA = 'method_insert_favorite'
export const METHOD_DEL_FAVORITE_DATA = 'method_del_favorite'

//API CUSTOMER
export const METHOD_GET_CUSTOMER_DATA = 'method_get_customer_data'
export const METHOD_GET_CUSTOMER_DATA_BYID = 'method_get_customer_data_byID'
export const METHOD_CHECK_MAIL_EXIST = 'method_check_mail_exist'
export const METHOD_INSERT_CUSTOMER = 'method_insert_customer'
export const METHOD_UPDATE_CUSTOMER= 'method_update_customer'

//API BILL DETAILS
export const METHOD_GET_BILLDETAIL_DATA = 'method_get_bill_detail_data'
export const METHOD_GET_REVIEWS_DATA = 'method_get_reviews_data'
export const METHOD_INSERT_BILL_DETAIL = 'method_insert_bill_detail'
export const METHOD_UPDATE_REVIEW = 'method_update_review'

//API BILL DETAILS
export const METHOD_GET_BILL_DATA = 'method_get_bill_data'
export const METHOD_INSERT_BILL = 'method_insert_bill'
export const METHOD_UPDATE_BILL = 'method_update_bill'