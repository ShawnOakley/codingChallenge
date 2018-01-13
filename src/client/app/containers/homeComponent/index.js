import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import HomeComponent from '../../components/homeComponent'
import {} from '../../redux/actions/actions'

const mapStateToProps = state => ({
    user: state.user ? state.user.name : null,
    userMetadata: state.user
})

const mapActionsToProps = dispatch => ({})

export const HomeComponentContainer = withRouter(connect(mapStateToProps, mapActionsToProps)(HomeComponent));
