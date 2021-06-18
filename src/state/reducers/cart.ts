import {
  ADD_TO_CART,
  CartAction,
  REMOVE_FROM_CART,
} from '../../types/actions'
import { ICartItem } from '../../types/ICartItem'

const INIT_STATE: ICartItem[] = []

const cartReducer = (
  state = INIT_STATE,
  action: CartAction
): ICartItem[] => {
  switch (action.type) {
    case ADD_TO_CART:
      const isInCart = state.find(
        (cartItem) => cartItem.id === action.payload.id
      )
      return isInCart
        ? state.map((cartItem) =>
            cartItem.id === action.payload.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        : [...state, { ...action.payload, quantity: 1 }]
    case REMOVE_FROM_CART:
      const cartItemToRemove = state.find(
        (cartItem) => cartItem.id === action.payload.id
      )
      if (!cartItemToRemove) return state
      return cartItemToRemove.quantity === 1
        ? state.filter((cartItem) => cartItem.id !== action.payload.id)
        : state.map((cartItem) =>
            cartItem.id === action.payload.id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          )
    default:
      return state
  }
}

export default cartReducer
