import { combineReducers } from 'redux'
import isCartOpenReducer from './isCartOpen'
import productsReducer from './products'
import cartReducer from './cart'

const rootReducer = combineReducers({
  isCartOpen: isCartOpenReducer,
  products: productsReducer,
  cart: cartReducer,
})

export default rootReducer
