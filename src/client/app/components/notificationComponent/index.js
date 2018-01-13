import React from 'react'
import Snackbar from 'material-ui/Snackbar'

const styles = {
  errorStyle: {
    backgroundColor: 'red'
  }
}

// Component used to manage notifications for the app
// UI reducer toggles

export default class NotificationComponent extends React.Component {
  render () {
    const {
      currentAction,
      hideNotification,
      hideError
    } = this.props
    const {
      actionType,
      errorIsActive,
      notificationIsActive,
      options
    } = currentAction
    // hideNotification and hideError are called by onRequestClose so
    // that the reducer ui active state is toggled back to 'false'
    // once the notification/alert is no longer needed
    const notification = notificationIsActive ? (
      <Snackbar
        open={notificationIsActive}
        message={options.message}
        autoHideDuration={4000}
        onRequestClose={hideNotification}
      />
    ) : undefined

    const errorNotification = errorIsActive ? (
      <Snackbar
        bodyStyle={styles.errorStyle}
        open={errorIsActive}
        message={options.error}
        autoHideDuration={4000}
        onRequestClose={hideError}
      />
    ) : undefined

    return (<div>
      {notification}
      {errorNotification}
    </div>)
  }
}
