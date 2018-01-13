import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import FormComponent from '../../components/formComponent'
import {
  toggleLoadingAction,
  setUserAction,
  showNotificationAction,
  hideNotificationAction,
  showErrorAction,
  hideErrorAction
} from '../../redux/actions/actions'

const mapStateToProps = state => ({
    isLoading: state.ui.loadingState.showLoading
})

const mapActionsToProps = dispatch => ({
  setUser (username) {
    return dispatch(setUserAction(username))
  },
  toggleLoading () {
    return dispatch(toggleLoadingAction())
  },
  showNotification (message) {
    return dispatch(showNotificationAction(message))
  },
  hideNotification () {
    return dispatch(hideNotificationAction())
  },
  showError (error) {
    return dispatch(showErrorAction(error))
  },
  hideError () {
    return dispatch(hideErrorAction())
  },
  triggerMessage (message, delay) {
    return showMessageAction(message, delay);
  }
})

export const FormComponentContainer = withRouter(connect(mapStateToProps, mapActionsToProps)(FormComponent));
