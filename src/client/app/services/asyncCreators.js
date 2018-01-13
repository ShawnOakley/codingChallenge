import { createAction } from 'redux-actions'

// Was experimenting with chaining together dispatched actions in sequence
// Ultimately wound up being unnecessary

export const createAsyncCreator = (startAction, endAction, asycnFn) =>
  (dispatch) => {
    dispatch(createAction(startAction)())
    const dispatchEndAction = createAction(endAction)
    return asycnFn(dispatch)
      .then(result => dispatch(dispatchEndAction(result)))
      .catch((e) => {
        console.error(e)
        dispatch(dispatchEndAction(e))
      })
  }

export const createTimedAsyncCreator = ({startAction, startOptions, endAction, endOptions, asycnFn}) =>
  (dispatch) => {
    dispatch(createAction(startAction)(startOptions))
    const dispatchEndAction = createAction(endAction)
    return asycnFn()
      .then(result => dispatch(dispatchEndAction(endOptions)))
      .catch((e) => {
        console.error(e)
        dispatch(dispatchEndAction(e))
      })
  }
