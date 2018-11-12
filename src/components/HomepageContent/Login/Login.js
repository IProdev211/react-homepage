import React, { Component } from 'react';

import {Button, Form, Input, Segment, Grid} from "semantic-ui-react";

import fakeAuth from '../../../service/fakeAuth';

import { Redirect, withRouter } from 'react-router-dom';


class Login extends Component {

  constructor(props) {
    super(props);

    this.state = {
      redirectToReferrer: false,

      fields: {
        email:"",
        password: ""
      }

    };

    this.changeHandler = this.changeHandler.bind(this);

    this.submit = this.submit.bind(this);

  }


  changeHandler(evt, data) {
    let name = data.name;
    let value = data.value;

    let fields = this.state.fields;
    fields[name] = value;

    this.setState({fields:fields});

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

    console.log(this.state.fields);
      
      
    return (

      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container stackable verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>

              <Form onSubmit={this.submit} >
                <Form.Field>
                  <label>Email</label>
                  <Input name="email" placeholder='Email' onChange={this.changeHandler}/>
                </Form.Field>
                <Form.Field>
                  <label>Password</label>
                  <Input name="password" placeholder='Password' onChange={this.changeHandler}/>
                </Form.Field>
                <Button type='submit'>Login</Button>
              </Form>

            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>



    );

  }

}
export default Login;