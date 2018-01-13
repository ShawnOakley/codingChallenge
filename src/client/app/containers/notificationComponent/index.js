import { connect } from 'react-redux'
import NotificationComponent from '../../components/notificationComponent'

const mapStateToProps = state => ({
  currentAction: state.ui.currentAction
})

const mapActionsToProps = dispatch => ({})

export const NotificationComponentContainer = connect(mapStateToProps, mapActionsToProps)(NotificationComponent)
