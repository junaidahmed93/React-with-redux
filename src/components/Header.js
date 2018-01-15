import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react';
import CustomDrawer from './CustomDrawer';
class HeaderMenu extends Component {
    constructor(props) {
        super(props);
        this.state = { activeItem: 'Overview', isDraweropen: false, itemName: '', itemslist: ['Overview Home'] };
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
    }

    handleToggle = () => {
        this.setState({ isDraweropen: !this.state.open });
    }

    handleItemClick = (e, { name }) => {
        let items, i;
        if (name === 'Overview') {
            items = ['Overview Home' , '2','4'];
            i = 0;
        }
        else if (name === 'Remote Check-In') {
            items = ['Remote Check In', 'O' , 'P'];
            i = 1;
        }
        else if (name === 'Hotel Check-In') {
            items = ['Hotel Check In', '@' , '#'];
            i = 2;

        }
        this.setState({ itemslist: items, activeItem: name });
        this.props.selectedRoute(name, i);

    }

    handleDrawerClose() {
        this.setState({ isDraweropen: false });
    }

    render() {
        const { activeItem } = this.state;
        return (
            <div>
                <Menu pointing secondary size='massive' className="menu-header">
                    <Menu.Item name="Overview" widths={10}>
                        <div className="circleMenuToggle"></div>
                        <span className="leftTitle overview" onClick={() => { this.handleToggle() }}>Shyft Club</span>
                    </Menu.Item>

                    <Menu.Item className="menu-item" name='Overview' active={activeItem === 'Overview'} onClick={this.handleItemClick} />
                    <Menu.Item className="menu-item" name='Remote Check-In' active={activeItem === 'Remote Check-In'} onClick={this.handleItemClick} />
                    <Menu.Item className="menu-item" name='Hotel Check-In' active={activeItem === 'Hotel Check-In'} onClick={this.handleItemClick} />
                    <Menu.Item position='right'>
                        <Button widths='30'>Logout</Button>
                        {/* <Menu.Item className="menu-item" name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} /> */}
                    </Menu.Item>
                </Menu>

                <CustomDrawer
                    isDraweropen={this.state.isDraweropen}
                    itemslist={this.state.itemslist}
                    handleDrawerClose={this.handleDrawerClose}
                />
            </div>

        )
    }
}

export default HeaderMenu;