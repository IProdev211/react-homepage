import React, { Component } from 'react';
import {Button} from "semantic-ui-react";

import fakeAuth from '../../service/fakeAuth';

import {Link, withRouter} from 'react-router-dom';

class AuthButton extends Component {


  render() {

    const {fixed} = this.props;

    const AuthButtonCode = withRouter(({ history }) =>
      (fakeAuth.isAuthenticated) ? (
      <div>

        <span style={{ marginRight: '0.5em'}}>Welcome...</span>

        <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}
                onClick={() => fakeAuth.signout(() => history.push('/') )}>
            Sign Out
        </Button>
      </div>

    ) : (
      <div>
        <Button as={Link} to='/login'  inverted={!fixed}>
          Log in
        </Button>
        <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
          Sign Up
        </Button>
      </div>
    ));


    return <AuthButtonCode/>;
  }
}

export default AuthButton;