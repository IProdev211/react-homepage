import React, { Component } from 'react';

import {Button, Form, Input, Segment, Grid, Header, Image, Message} from "semantic-ui-react";



import fakeAuth from '../../../service/fakeAuth';

import { Redirect, Link, withRouter } from 'react-router-dom';

import axios from 'axios';

import apiService from '../../../service/apiService';


class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            redirectToLogin: false,

            values: {
                firstname:'',
                lastname:'',

                email:'',

                password: '',
                password2: '',

                agb: false

            }

        };

        this.changeHandler = this.changeHandler.bind(this);

        this.submit = this.submit.bind(this);

    }


    changeHandler(evt, {name, value, checked}) {

        let values = this.state.values;
        values[name] = (checked === undefined) ? value : checked;

        this.setState({values:values});
    }

    submit() {

        let user = {
          firstname: this.state.values.firstname,
          lastname: this.state.values.lastname,
          email: this.state.values.email,
          password: this.state.values.password,
        };

      apiService.register(user).then(data => {
        // TODO: show success message
        this.setState({redirectToLogin: true});
      }).catch(error => {
        // TODO: show error message
        console.log(error);
      })



    }


    render() {

        const { redirectToLogin } = this.state;

        if (redirectToLogin) return <Redirect to='/login' />;

        return (
            <div className='login-form' style={{paddingTop: '4em'}}>
                <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
                    <Grid.Column style={{maxWidth: 450}}>
                        <Header as='h2' color='teal' textAlign='center'>
                            <Image src='img/logo.png'/> Register a new account
                        </Header>
                        <Form size='large' onSubmit={this.submit} >
                            <Segment stacked>
                                <Form.Input fluid name='firstname' icon='asterisk' iconPosition='left' placeholder='Firstname' onChange={this.changeHandler} />
                                <Form.Input fluid name='lastname' icon='asterisk' iconPosition='left' placeholder='Lastname' onChange={this.changeHandler} />
                                <Form.Input fluid name='email' icon='user' iconPosition='left' placeholder='E-mail address' onChange={this.changeHandler} />
                                <Form.Input fluid name='password' icon='lock' iconPosition='left' placeholder='Password' type='password' onChange={this.changeHandler} />
                                <Form.Input fluid name='password2' icon='lock' iconPosition='left' placeholder='repeat Password' type='password' onChange={this.changeHandler} />

                                <Button type='submit' color='blue' fluid size='large'>
                                    Register
                                </Button>
                            </Segment>
                        </Form>
                        <Message>
                            Not new to us? <Link to='/login'>Login</Link>
                        </Message>
                    </Grid.Column>
                </Grid>
            </div>
        );


    }

}
export default Register;