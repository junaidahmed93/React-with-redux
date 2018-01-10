import React, { Component } from 'react';
import './App.css';
import { Menu, Icon, Segment, Sidebar } from 'semantic-ui-react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  };

  handleItemClick = (e, { name }) => {
    this.props.history.push(`/${name}`);
  };

  toggleSideBarVisibility = () => {};
  // toggleSideBarVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const {
      visible,
    } = this.state;
    console.log('app', this.props);
    return (
      <div>
      Hii
      </div>
    );
  }
}

export default App;
