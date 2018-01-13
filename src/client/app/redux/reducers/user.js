import {
  SET_USER,
  REMOVE_USER
} from '../../constants/actions'

export const user = (state = null, { type, payload }) => {
  switch (type) {
    case SET_USER:
      return payload
    case REMOVE_USER:
      return null
    default:
      return state
  }
}
