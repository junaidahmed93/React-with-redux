import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class RequestComplete extends Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log("render of request complete");
    return(
      <div>
        <h2>Request complete</h2>
        <p>This is complete request paragraph</p>
      </div>
    )
  }
}

export default RequestComplete;
