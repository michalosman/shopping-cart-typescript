import { IProduct } from './IProduct'

export const OPEN_CART = 'OPEN_CART'
export const CLOSE_CART = 'CLOSE_CART'
export const SET_PRODUCTS = 'SET_PRODUCTS'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export interface OpenCartAction {
  type: typeof OPEN_CART
}

export interface CloseCartAction {
  type: typeof CLOSE_CART
}

export interface SetProductsAction {
  type: typeof SET_PRODUCTS
  payload: IProduct[]
}

export interface AddToCartAction {
  type: typeof ADD_TO_CART
  payload: IProduct
}

export interface RemoveFromCartAction {
  type: typeof REMOVE_FROM_CART
  payload: IProduct
}

export type IsCartOpenAction = OpenCartAction | CloseCartAction
export type ProductsAction = SetProductsAction
export type CartAction = AddToCartAction | RemoveFromCartAction

export type AppAction =
  | IsCartOpenAction
  | ProductsAction
  | CartAction
