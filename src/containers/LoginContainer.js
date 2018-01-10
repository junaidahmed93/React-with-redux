import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/loginActions';
// import LoginPage from '../components/LoginPage';
import { Grid, Row, Col } from 'react-flexbox-grid';
import {Login} from '../components';

class LoginContainer extends Component {
    constructor(props) {
        super(props);
        console.log('props', props);
        setTimeout(() => { console.log('set time props', props); }, 10000)
    }

    componentWillMount() {
        console.log('componentWillMount');
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentWillReceiveProps(nextProps) {
        console.log("component will rec props", nextProps);
        this.props.history.push("/dashboard");
        if (nextProps.login) {
            this.props.history.push("/dashboard");
        };
    }

    handleLogin = (credentials) => {
        this.props.actions.logInUser({
            email: 'email',
            password: 'password'
        });
    }
    render() {
        return (
            <Grid fluid className="loginGrid">
                <Row className="loginGridRow">
                    <Col xs={12} sm={6} md={5} lg={4} className="loginGridColLeft"> <Login login={this.handleLogin}/> </Col>
                    <Col xs={0} sm={6} md={7} lg={8}> 2 </Col>
                </Row>

            </Grid >
        )
    }
}

function mapStateToProps(state) {
    console.log('state', state);
    return {
        login: state.loginReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginContainer));
