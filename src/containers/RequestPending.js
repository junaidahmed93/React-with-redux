import React, { Component } from 'react';

class RequestPending extends Component {
    constructor(props) {
        super(props);
        console.log("request pending..........constr");
    }

    render() {
        console.log("render of request pending");
        return (
            <div>
                <h2>Request pending  </h2>
                <p>this is request pending paragraph</p>
            </div>
        )
    }
}

export default RequestPending;
