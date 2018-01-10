import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import RequestPending from './RequestPending';
import { Table } from 'semantic-ui-react'

class RemoteCheckIn extends Component {
 
  render() {
    return (
      <div>
        <h2>Remote Check In</h2>
        <button
          onClick={() => {
            console.log("CLICKED", this.props.match.url);
            this.props.history.push(`${this.props.match.url}/status`);
          }}
        >
          CLICK ME
        </button>
        {/* <Link to="/dashboard/remote/request-pending">Request pending</Link> --------
        <Link to="/dashboard/remote/request-complete">Request complete</Link> */}

        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Date</Table.HeaderCell>
              <Table.HeaderCell>Time</Table.HeaderCell>
              <Table.HeaderCell>Booking ID</Table.HeaderCell>
              <Table.HeaderCell>Agent Name</Table.HeaderCell>
              <Table.HeaderCell>Customer Name</Table.HeaderCell>
              <Table.HeaderCell>Departure Date</Table.HeaderCell>
              <Table.HeaderCell>City</Table.HeaderCell>

            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>01-02-2017</Table.Cell>
              <Table.Cell>01:45 Pm</Table.Cell>
              <Table.Cell>875210</Table.Cell>
              <Table.Cell>Stefaan</Table.Cell>
              <Table.Cell>Yen</Table.Cell>
              <Table.Cell>03-05-2018</Table.Cell>
              <Table.Cell>karachi</Table.Cell>
              <Table.Cell><button>Verify</button></Table.Cell>
              <Table.Cell><button>Verify</button></Table.Cell>
              <Table.Cell><button>Verify</button></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>01-02-2017</Table.Cell>
              <Table.Cell>01:45 Pm</Table.Cell>
              <Table.Cell>875210</Table.Cell>
              <Table.Cell>Stefaan</Table.Cell>
              <Table.Cell>Yen</Table.Cell>
              <Table.Cell>03-05-2018</Table.Cell>
              <Table.Cell>karachi</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>01-02-2017</Table.Cell>
              <Table.Cell>01:45 Pm</Table.Cell>
              <Table.Cell>875210</Table.Cell>
              <Table.Cell>Stefaan</Table.Cell>
              <Table.Cell>Yen</Table.Cell>
              <Table.Cell>03-05-2018</Table.Cell>
              <Table.Cell>karachi</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>


        <Route path={`${this.props.match.url}/:status`} component={RequestPending} />
        {this.props.children}
      </div>
    )
  }
}

export default RemoteCheckIn;
