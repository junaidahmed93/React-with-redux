import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class CustomDrawer extends Component {
    handleTopClose = () => {
        this.props.handleDrawerClose();
    }
    drawerItems = () => {
        return this.props.itemslist.map((d) => {
            return (<MenuItem onClick={() => {
                // if (d == 'Hotel Home') {
                //     this.setState({ renderer: HotelCheckIn });
                //     this.props.history.push(`${this.props.match.url}/hotel`)
                // }
            }}>{d}</MenuItem>);
        });
    }


    render() {
        console.log("drawer props", this.props);
        return (
            <Drawer docked={false} open={this.props.isDraweropen} onRequestChange={this.handleTopClose}>
                {this.drawerItems()}
            </Drawer>
        )
    }
}

export default CustomDrawer;