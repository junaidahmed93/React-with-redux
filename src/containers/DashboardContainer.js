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
    console.log("12",this.state.container);
    this.setState({ renderer: this.state.container[i] });
    if(i===0){
      this.props.history.push(`${this.props.match.url}`)
    }
    else if(i===1){
      this.props.history.push(`${this.props.match.url}/remote`)
    }
    else{
      this.props.history.push(`${this.props.match.url}/hotel`)
    }
    
  }

  componentDidMount() {
    console.log("Component did mount", this.props);
  }

  
  render() {
    return (
      <div style={{backgroundColor: '#FFFFFF'}}>

        <HeaderMenu
          selectedRoute={this.selectedRoute}
        />

      
        {/* <div className="dashboardRoute">
          <Route path={`${this.props.match.url}/:status`} component={this.state.renderer} />
        </div> */}

      </div>
    )
  }
}

export default withRouter(Dashboard);