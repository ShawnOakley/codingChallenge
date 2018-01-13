import React from 'react'
import Snackbar from 'material-ui/Snackbar'

const styles = {
  errorStyle: {
    backgroundColor: 'red'
  }
}

export default class NotificationComponent extends React.Component {
  render () {
    const {
      currentAction
    } = this.props
    const {
      actionType,
      errorIsActive,
      notificationIsActive,
      options
    } = currentAction

    const notification = notificationIsActive ? (
      <Snackbar
        open={notificationIsActive}
        message={options.message}
        autoHideDuration={4000}
      />
    ) : undefined

    const errorNotification = errorIsActive ? (
      <Snackbar
        bodyStyle={styles.errorStyle}
        open={errorIsActive}
        message={options.error}
        autoHideDuration={4000}
      />
    ) : undefined

    return (<div>
      {notification}
      {errorNotification}
    </div>)
  }
}
