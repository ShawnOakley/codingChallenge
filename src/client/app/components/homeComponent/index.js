import React from 'react'
import {Card, CardHeader, CardText} from 'material-ui/Card'

const styles = {
  title: {
    cursor: 'pointer'
  }
}

export default class HomeComponent extends React.Component {
  componentDidMount () {
    const {
      user,
      history
    } = this.props
    // Listens for null user.
    // Easy way to redirect if user visits home without logging in
    if (!user) {
      history.push('')
    }
  }

  componentDidUpdate () {
    const {
      user,
      history
    } = this.props
    // Listens for the user being reset.
    // Easy way to allow for nav bar logout button to redirect without placing it in a Router
    if (!user) {
      history.push('')
    }
  }

  render () {
    const {
      user,
      userMetadata
    } = this.props
    const fullName = userMetadata ? userMetadata.fullName : undefined
    const name = userMetadata ? userMetadata.name : undefined
    const userId = userMetadata ? userMetadata.userId : undefined

    return (<Card>
      <CardHeader
        title={`Hello and welcome to the site.  Press the button to the right to view your profile
                  information`}
        actAsExpander={true}
        showExpandableButton={true}
      />
      <CardText expandable={true}>
        <div>{`Full name: ${fullName}`}</div>
        <div>{`Username: ${name}`}</div>
        <div>{`User Id: ${userId}`}</div>
      </CardText>
    </Card>)
  }
}
