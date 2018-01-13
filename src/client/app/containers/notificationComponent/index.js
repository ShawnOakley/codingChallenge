import { connect } from 'react-redux'
import NotificationComponent from '../../components/notificationComponent'

const mapStateToProps = state => ({
  currentAction: state.ui.currentAction
})

const mapActionsToProps = dispatch => ({
  hideNotification () {
    return dispatch(hideNotificationAction())
  },
  hideError () {
    return dispatch(hideErrorAction())
  }
})

export const NotificationComponentContainer = connect(mapStateToProps, mapActionsToProps)(NotificationComponent)
