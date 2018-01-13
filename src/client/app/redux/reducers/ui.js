import {
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
  SHOW_ERROR,
  HIDE_ERROR,
  TOGGLE_LOADING
} from '../../constants/actions'
import { assoc } from 'ramda'

export const ui = (state = {
  loadingState: {showLoading: false},
  currentAction: {}
}, { type, payload }) => {
  switch (type) {
    case SHOW_NOTIFICATION:
      return assoc('currentAction', {
        actionType: SHOW_NOTIFICATION,
        notificationIsActive: true,
        options: payload
      }, state)
    case HIDE_NOTIFICATION:
      return assoc('currentAction', {
        notificationIsActive: false,
        options: {}
      }, state)
    case SHOW_ERROR:
      return assoc('currentAction', {
        actionType: SHOW_ERROR,
        errorIsActive: true,
        options: payload
      }, state)
    case HIDE_ERROR:
      return assoc('currentAction', {
        errorIsActive: false,
        options: {}
      }, state)
    case TOGGLE_LOADING:
      return assoc('loadingState', {
        showLoading: !state.loadingState.showLoading
      }, state)
    default:
      return state
  }
}
