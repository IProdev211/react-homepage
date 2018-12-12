import React, { Component } from 'react';

import {Button, Form, Segment, Grid, Header, Image, Message} from "semantic-ui-react";

import apiService from '../../../service/apiService';

import auth from '../../../service/auth';

import {session} from '../../../service/Session';

import { Redirect, Link } from 'react-router-dom';



class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false,

      values: {
        email:"",
        password: ""
      }

    };

    this.changeHandler = this.changeHandler.bind(this);

    this.submit = this.submit.bind(this);

  }

  componentWillMount() {

    const token = session.get('token');
    apiService.checkToken(token).then(data => {
      auth.authenticate(data.user, data.token,() => {
        this.setState({ redirectToReferrer: true });
      });
    });
  }


  changeHandler(evt, {name, value}) {

    let values = this.state.values;
      values[name] = value;

    this.setState({values:values});

  }
  
  submit() {

    let user = {
      email: this.state.values.email,
      password: this.state.values.password,
    };

    apiService.login(user).then(data => {
      auth.authenticate(data.user, data.token,() => {
        this.setState({ redirectToReferrer: true });
      });
    }).catch(error => {
      console.log(error);
    })



  }
  
  render() {

    const { from } = this.props.location.state || { from: { pathname: '/' } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) return <Redirect to={from} />;

    return (
        <div className='login-form' style={{paddingTop: '4em'}}>
            <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
                <Grid.Column style={{maxWidth: 450}}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image src='img/logo.png'/> Log-in to your account
                    </Header>
                    <Form size='large' onSubmit={this.submit} >
                        <Segment stacked>
                            <Form.Input fluid name='email' icon='user' iconPosition='left' placeholder='E-mail address' onChange={this.changeHandler} />
                            <Form.Input fluid name='password' icon='lock' iconPosition='left' placeholder='Password' type='password' onChange={this.changeHandler} />

                            <Button type='submit' color='blue' fluid size='large'>
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <Link to='/register'>Sign Up</Link>
                    </Message>
                </Grid.Column>
            </Grid>
        </div>
  );


  }

}
export default Login;