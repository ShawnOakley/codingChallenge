import { connect } from 'react-redux'
import StaticNav from '../../components/staticNav'
import {
  setUserAction
} from '../../redux/actions/actions'

const mapStateToProps = state => ({
  user: state.user ? state.user.name : null
})
const mapActionsToProps = dispatch => ({
  setUser (username) {
    return dispatch(setUserAction(username))
  }
})

export const StaticNavContainer = connect(mapStateToProps, mapActionsToProps)(StaticNav)
