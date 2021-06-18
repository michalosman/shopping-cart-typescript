import { Dispatch } from 'redux'
import { OPEN_CART, CLOSE_CART, AppAction } from '../../types/actions'

const openCart = (): AppAction => {
  return {
    type: OPEN_CART,
  }
}

const closeCart = (): AppAction => {
  return {
    type: CLOSE_CART,
  }
}

const startOpenCart = () => {
  return (dispatch: Dispatch<AppAction>) => {
    dispatch(openCart())
  }
}

const startCloseCart = () => {
  return (dispatch: Dispatch<AppAction>) => {
    dispatch(closeCart())
  }
}

export { openCart, closeCart, startOpenCart, startCloseCart }
