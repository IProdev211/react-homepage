import React, { Component } from 'react';

import {Button} from "semantic-ui-react";

import fakeAuth from '../../../service/fakeAuth';

import { Redirect, withRouter } from 'react-router-dom';

class Login extends Component {

  state = {
    redirectToReferrer: false
  };

  login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {

    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    const LoginCode = withRouter(({history}) => <Button size='huge' color='green' onClick={() => this.login(history)} >Login</Button>);

    return <LoginCode/>;
  }

}
export default Login;