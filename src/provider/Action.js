import { ACTION_CLEAR_BILLS, ACTION_GET_FAVORITE, ACTION_INCREASE_BILL_DT, ACTION_REDUCE_BILL_DT, ACTION_SET_BILL, ACTION_SET_FOODS, ACTION_SET_RELOAD, ACTION_SET_RESTAURANT, ACTION_SET_USER } from "../contants/Contants";

export const increase_bill_detail = payload => ({
  type: ACTION_INCREASE_BILL_DT,
  payload
})

export const reduce_bill_detail = payload => ({
  type: ACTION_REDUCE_BILL_DT,
  payload
})

export const clear_bills = payload => ({
  type: ACTION_CLEAR_BILLS,
  payload
})

export const set_user = payload => ({
  type: ACTION_SET_USER,
  payload
})

export const get_favorite = payload => ({
  type: ACTION_GET_FAVORITE,
  payload
})

export const set_restaurant = payload => ({
  type: ACTION_SET_RESTAURANT,
  payload
})

export const set_bill = payload => ({
  type: ACTION_SET_BILL,
  payload
})

export const set_foods = payload => ({
  type: ACTION_SET_FOODS,
  payload
})

export const set_reload = payload => ({
  type: ACTION_SET_RELOAD,
  payload
})