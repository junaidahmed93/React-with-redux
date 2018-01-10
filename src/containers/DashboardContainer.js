import React, { Component } from 'react';
import { withRouter, Route } from 'react-router-dom';
import RemoteCheckIn from './RemoteCheckIn';
import HotelCheckIn from './HotelCheckIn';
import { HeaderMenu } from '../components';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.selectedRoute = this.selectedRoute.bind(this);
    this.state = {
      activeItem: 'Overview',
      open: false,
      renderer: '',
      remoteHeader: ['Driporter', 'Opsporter'],
      container: ['', RemoteCheckIn, HotelCheckIn]
    }
  }

  selectedRoute = (route, i) => {
    this.setState({ renderer: this.state.container[i] });
    this.props.history.push(`${this.props.match.url}/hotel`)
  }

  componentDidMount() {
    console.log("Component did mount", this.props);
  }


  render() {
    return (
      <div>
        <HeaderMenu
          selectedRoute={this.selectedRoute}
        />
        <div className="dashboardRoute">
          <Route path={`${this.props.match.url}/:menu`} component={this.state.renderer} />
        </div>

      </div>
    )
  }
}

export default withRouter(Dashboard);