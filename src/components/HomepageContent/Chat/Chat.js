import React, { Component } from 'react';

import {Segment, Header, Form, Button} from "semantic-ui-react";

import apiService from '../../../service/apiService';

import FeedList from './FeedList';

import auth from '../../../service/auth';

class Chat extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: '',
      events: [],
    }

  }

  componentWillMount() {
    apiService.getFeeds().then(events => {
      this.setState({ events: events });
    });
  }
  
  changeHandler(evt, target) {
    this.setState({message:target.value});
  }
  
  submitHandler() {
    console.log(this.state.message);

    let user = auth.user;

    apiService.newMessage(auth.user, this.state.message);

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



      </Segment>
    );
  }

}

export default Chat;