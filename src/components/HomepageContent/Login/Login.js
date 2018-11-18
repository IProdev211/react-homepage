import React, { Component } from 'react';

import {Button, Form, Input, Segment, Grid, Header, Image, Message} from "semantic-ui-react";



import fakeAuth from '../../../service/fakeAuth';

import { Redirect, Link, withRouter } from 'react-router-dom';


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


  changeHandler(evt, {name, value}) {

    let values = this.state.values;
      values[name] = value;

    this.setState({values:values});

  }
  
  submit() {

    //TODO: Axios call (localhost:5000/api/login)

    console.log("Submit");
  }
  
  
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

    //return <LoginCode/>;

    console.log(this.state.values);


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