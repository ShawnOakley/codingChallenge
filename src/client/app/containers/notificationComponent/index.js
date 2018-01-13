import { connect } from 'react-redux';
import NotificationComponent from '../../components/notificationComponent';
import {} from '../../redux/actions/actions';
import {
  setUserAction
} from '../../redux/actions/actions';

const mapStateToProps = state => ({
    currentAction: state.ui.currentAction
})

const mapActionsToProps = dispatch => ({})

export const NotificationComponentContainer = connect(mapStateToProps, mapActionsToProps)(NotificationComponent)
