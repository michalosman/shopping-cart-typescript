import { Dispatch } from 'redux'
import { ADD_TO_CART, AppAction, REMOVE_FROM_CART } from '../../types/actions'
import { IProduct } from '../../types/IProduct'

const addToCart = (product: IProduct): AppAction => {
  return {
    type: ADD_TO_CART,
    payload: product,
  }
}

const removeFromCart = (product: IProduct): AppAction => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  }
}

const startAddToCart = (product: IProduct) => {
  return (dispatch: Dispatch<AppAction>) => {
    dispatch(addToCart(product))
  }
}

const startRemoveFromCart = (product: IProduct) => {
  return (dispatch: Dispatch<AppAction>) => {
    dispatch(removeFromCart(product))
  }
}

export { addToCart, removeFromCart, startAddToCart, startRemoveFromCart }
