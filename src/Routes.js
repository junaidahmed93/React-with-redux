import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import PrivateRoute from './PrivateRoute';
import { LoginContainer, DashboardContainer, RemoteCheckIn, HotelCheckIn } from './containers';
const browserHistory = createBrowserHistory();

class AllRoutes extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <div style={{ height: '100%' }}>
          <Switch>
            <Route exact path="/" component={LoginContainer} />
            <Route path='/signin' component={LoginContainer} />
            <PrivateRoute path='/dashboard' component={DashboardContainer} />
          </Switch>
          <Switch>
            <Route path='/dashboard/remote' component={RemoteCheckIn} />
            <Route path='/dashboard/hotel' component={HotelCheckIn} />

            {/* <Route path='/home' user={this.props.login.user} component={Home} />
            <Route path='/syncsummary/:companyName' user={this.props.login.user} component={SyncSummary} />
            <Route path='/settings' user={this.props.login.user} component={Settings} />
            <Route path='/wizard' user={this.props.login.user} component={WizardAccounts} /> */}
          </Switch>
        </div>
      </Router>
    );
  }
}
function mapStateToProps(state) {
  console.log("state in routes", state);
  const { login } = state;
  return { login };
}

export default connect(mapStateToProps)(AllRoutes);
