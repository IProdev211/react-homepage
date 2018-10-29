import React, { Component } from 'react';

import {Button} from "semantic-ui-react";

import fakeAuth from '../../../service/fakeAuth';

import {withRouter} from 'react-router-dom';

class Login extends Component {

  login(history) {
    fakeAuth.authenticate(() => history.push('/'));
  }


  
  render() {

    const LoginCode = withRouter(({history}) => <Button size='huge' color='green' onClick={() => this.login(history)} >Login</Button>);

    return <LoginCode/>;
  }

}
export default Login;