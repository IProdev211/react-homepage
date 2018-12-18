import React, { Component } from 'react';

import {Segment, Header, Form, Button} from "semantic-ui-react";

import Websocket from 'react-websocket';

import apiService from '../../../service/apiService';

import FeedList from './FeedList';

import auth from '../../../service/auth';

class Chat extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: '',
      events: [],
    };

    this.getAllFeeds = this.getAllFeeds.bind(this);



  }

  getAllFeeds() {
    apiService.getFeeds().then(events => {
      this.setState({ events: events });
    });
  }

  componentWillMount() {
    this.getAllFeeds();
  }
  
  changeHandler(evt, target) {
    this.setState({message:target.value});
  }
  
  submitHandler() {
    apiService.newMessage(auth.user, this.state.message).then(() => {
      this.setState({message:''});
     // this.getAllFeeds();
    });
  }



  render() {

    let events = this.state.events;




    return (
      <Segment style={{ padding: '2em 2em' }} vertical>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Chat
        </Header>



        <FeedList events={events}/>


        <Form onSubmit={this.submitHandler.bind(this)}>


          <Form.TextArea placeholder='Write something...' value={this.state.message} onChange={this.changeHandler.bind(this)}/>

          <Button type='submit'>Submit</Button>
        </Form>



        <Websocket
          url='ws://localhost:5000/sock/'
          onMessage={(msg) => {
            console.log(msg);
            this.getAllFeeds();

            }}
        />


      </Segment>
    );
  }

}

export default Chat;