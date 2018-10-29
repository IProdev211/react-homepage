import React, { Component } from 'react';
import {Button} from "semantic-ui-react";

import fakeAuth from '../../service/fakeAuth';


class AuthButton extends Component {



  render() {

    const {fixed} = this.props;

    return (fakeAuth.isAuthenticated) ? (
      <div>

        <span style={{ marginRight: '0.5em'}}>Welcome...</span>


        <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
          Sign Out
        </Button>
      </div>

    ) : (
      <div>
        <Button as='a' inverted={!fixed}>
          Log in
        </Button>
        <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
          Sign Up
        </Button>
      </div>
    );
  }
}

export default AuthButton;