import React, { Component } from 'react';

import {Segment, Header, Form, Button} from "semantic-ui-react";


import apiService from '../../../service/apiService';
import auth from '../../../service/auth';


import SecureWebsocket from '../../../service/SecureWebsocket';


import FeedList from './FeedList';


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


        <SecureWebsocket
          url='ws://localhost:5000/api/socks/'
          onMessage={this.getAllFeeds}
          reconnect={true}
        />


      </Segment>
    );
  }

}

export default Chat;