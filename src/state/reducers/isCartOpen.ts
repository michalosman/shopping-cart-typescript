import {
  OPEN_CART,
  CLOSE_CART,
  IsCartOpenAction,
} from '../../types/actions'

const INIT_STATE: boolean = false

const isCartOpenReducer = (
  state = INIT_STATE,
  action: IsCartOpenAction
): boolean => {
  switch (action.type) {
    case OPEN_CART:
      return true
    case CLOSE_CART:
      return false
    default:
      return state
  }
}

export default isCartOpenReducer
