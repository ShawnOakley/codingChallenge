import React from 'react'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FlatButton from 'material-ui/FlatButton';

const styles = {
  title: {
    cursor: 'pointer',
  },
};

export default class StaticNav extends React.Component {
  constructor (props) {
    super(props)

    this.state = {}
    this.boundHandleLogOut = this.handleLogOut.bind(this);
  }

    handleLogOut() {
        const {
            setUser
        } = this.props;
        setUser(null);
    }

  render () {
    const {
        user
    } = this.props;
    const displayMessage = user ? `Hello, ${user}`: "Please login or register below";
    return (<AppBar
        title={<span style={styles.title}>{displayMessage}</span>}
        showMenuIconButton={false}
        iconElementRight={user ? <FlatButton
            label="Sign Out"
            onClick={this.boundHandleLogOut}
        /> : undefined}
      />);
  }
}