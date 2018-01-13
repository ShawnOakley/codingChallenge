import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import CircularProgress from 'material-ui/CircularProgress'
import NavigationClose from 'material-ui/svg-icons/navigation/close'
import validationWrapper from '../../utils/validation'
import {
  getUsers,
  signUp,
  logIn
} from '../../services/api'

const styles = {
  paper: {
    padding: 20,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: '#d3d3d3'
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'column'
  },
  button: {
    marginTop: '1rem'
  }
}

export default class FormComponent extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      username: '',
      usernameError: '',
      password: '',
      passwordError: '',
      firstName: '',
      lastName: ''
    }
  }

  login () {
    const {
      toggleLoading,
      showNotification,
      hideNotification,
      showError,
      hideError,
      triggerMessage,
      setUser,
      history
    } = this.props
    const {
      username,
      password
    } = this.state

    if (!this.checkErrors()) {
      toggleLoading()
      logIn(username, password).then((response) => {
        return response.json()
      }).then((response) => {
        const {
          status,
          message,
          userId,
          name
        } = response
        toggleLoading()
        if (status > 0) {
          setUser({userId, name: username, fullName: name, message})
          showNotification({message})
          history.push('/home')
        } else {
          showError({ error: message })
        }
      })
    }
  }

  register () {
    const {
      toggleLoading,
      showNotification,
      hideNotification,
      showError,
      hideError,
      triggerMessage,
      setUser,
      history
    } = this.props
    const {
      username,
      password,
      firstName,
      lastName
    } = this.state

    if (!this.checkErrors()) {
      toggleLoading()
      signUp(username, password, firstName, lastName).then((response) => {
        return response.json()
      }).then((response) => {
        const {
          status,
          message,
          userId
        } = response
        toggleLoading()
        if (status > 0) {
          let name = `${firstName} ${lastName}`
          setUser({userId, name: username, fullName: name, message})
          showNotification({message})
          history.push('/home')
        } else {
          showError({ error: message })
        }
      })
    }
  }

  checkErrors () {
    const {
      setNotification
    } = this.props
    const usernameError = validationWrapper('username', this.state.username)
    const passwordError = validationWrapper('password', this.state.password)

    this.setState({
      usernameError,
      passwordError
    })

    return usernameError && passwordError
  }

  render () {
    const {
      username,
      password,
      usernameError,
      passwordError,
      firstName,
      lastName
    } = this.state
    const {
      isLoading
    } = this.props

    const inputFields = (<div>
      <div>
        <TextField
          hintText="Please enter your username:"
          floatingLabelText="Username"
          value={username}
          errorText={usernameError}
          onChange={event => this.setState({ username: event.target.value.trim() })}
          onBlur={() => {
            this.setState({
              usernameError: validationWrapper('username', username)
            })
          }
          }
        />
      </div>
      <div>
        <TextField
          hintText="Please enter your password"
          floatingLabelText="Password"
          value={password}
          errorText={passwordError}
          onChange={event => this.setState({ password: event.target.value.trim() })}
          onBlur={() => {
            this.setState({
              passwordError: validationWrapper('password', password)
            })
          }
          }
        />
      </div>
      <div>
        <TextField
          hintText="First Name (Optional)"
          floatingLabelText="First Name (Optional)"
          value={firstName}
          onChange={event => this.setState({ firstName: event.target.value.trim() })}
        />
      </div>
      <div>
        <TextField
          hintText="Last Name (Optional)"
          floatingLabelText="Last Name (Optional)"
          value={lastName}
          onChange={event => this.setState({ lastName: event.target.value.trim() })}
        />
      </div>
      <div style={styles.buttonRow}>
        <RaisedButton
          onClick={this.login.bind(this)}
          disabled={!!(usernameError || passwordError)}
          label="Login"
          style={styles.button}
        />
        <RaisedButton
          onClick={this.register.bind(this)}
          disabled={!!(usernameError || passwordError)}
          label="Register"
          style={styles.button}
        />
      </div>
    </div>)

    // Conditionally renders form or loading indicator based on ui state
    return (<Paper style={styles.paper} zDepth={2}>
      <div>
        <AppBar
          title="Information form"
          showMenuIconButton={false}
        />
        { !isLoading ? inputFields : <div><CircularProgress /></div> }
      </div>
    </Paper>)
  }
}
