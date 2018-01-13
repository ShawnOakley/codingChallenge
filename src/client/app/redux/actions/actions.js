import { createAction } from 'redux-actions'
import {
  SET_USER,
  REMOVE_USER,
  SHOW_NOTIFICATION,
  HIDE_NOTIFICATION,
  SHOW_ERROR,
  HIDE_ERROR,
  TOGGLE_LOADING
} from '../../constants/actions'
import {
  createAsyncCreator,
  createTimedAsyncCreator
} from '../../services/asyncCreators'
import * as api from '../../services/api'

export const setUserAction = userObject => (
  createAction(SET_USER)(userObject)
)

export const removeUserAction = () => (
  createAction(REMOVE_USER)()
)

export const showNotificationAction = notificationData => (
  createAction(SHOW_NOTIFICATION)(notificationData)
)

export const hideNotificationAction = () => (
  createAction(HIDE_NOTIFICATION)()
)

export const showErrorAction = notificationData => (
  createAction(SHOW_ERROR)(notificationData)
)

export const hideErrorAction = () => (
  createAction(HIDE_ERROR)()
)

export const toggleLoadingAction = () => (
  createAction(TOGGLE_LOADING)()
)

export const signUpAction = (username, pass, dispatch) => (
  createAsyncCreator(
    TOGGLE_LOADING,
    TOGGLE_LOADING,
    () => api.signUp(username, pass)
  )
)

export const logInAction = (username, pass) => (
  createAsyncCreator(
    TOGGLE_LOADING,
    TOGGLE_LOADING,
    () => api.logIn(username, pass)
  )
)

export const showMessageAction = (message, delay) => (
  createTimedAsyncCreator({
    startAction: SHOW_NOTIFICATION,
    startOptions: {message},
    endAction: HIDE_NOTIFICATION,
    endOptions: {},
    asycnFn: () => setTimeout(() => { console.log('called') }, delay)
  })
)
