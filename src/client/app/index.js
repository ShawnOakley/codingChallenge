import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
// React Router v4
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { HomeComponentContainer } from './containers/homeComponent';
import { FormComponentContainer } from './containers/formComponent';
import { StaticNavContainer } from './containers/staticNav';
import { NotificationComponentContainer } from './containers/notificationComponent';
import { store } from './redux/store';

export class Root extends React.Component {
  constructor () {
    super();
    this.state = {};
  }

  renderRoot (componentDescriptor) {
    const {
        Nav,
        SignIn,
        Home,
        NotificationHandler
    } = componentDescriptor;

    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <span>
              <Nav />
              <BrowserRouter>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/" component={SignIn} />
                </Switch>
              </BrowserRouter>
              <NotificationHandler />
          </span>
        </Provider>
      </MuiThemeProvider>
    )
  }

  render () {
    const componentDescriptor = {
        Nav: StaticNavContainer,
        SignIn: FormComponentContainer,
        Home: HomeComponentContainer,
        NotificationHandler: NotificationComponentContainer
    };
    return this.renderRoot(componentDescriptor)
  }
}

render(<Root/>, document.getElementById('app'))
