import React, { Component } from 'react';

import {Segment, Header} from "semantic-ui-react";

import apiService from '../../../service/apiService';

import FeedList from './FeedList';
import auth from "../../../service/auth";

class Chat extends Component {

  constructor(props) {
    super(props);

    this.state = {
      events: [],
    }

  }

  componentWillMount() {
    apiService.getFeeds().then(events => {
      this.setState({ events: events });
    });
  }

  render() {

    let events = this.state.events;

    /*
    
    let events = [

      {

        user_thumb: '/img/elliot.jpg',

        user_id: 5,
        user_firstname: 'Elliot',
        user_lastname: 'Fu',

        date: '1 Hour Ago',

        content: 'added you as a friend',

        text: 'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started,\n' +
          '            then starting all over again. Even if we don\'t run extra laps that day, we surely will\n' +
          '            come back for more of the same another day soon.',

        image: '/img/image.png',

        likes: 5,

      },

      {

        user_thumb: '/img/elliot.jpg',

        user_id: 5,
        user_firstname: 'Elliot',
        user_lastname: 'Fu',

        date: '1 Hour Ago',

        content: 'added you as a friend',

        text: 'Ours is a life of constant reruns. We\'re always circling back to where we\'d we started,\n' +
          '            then starting all over again. Even if we don\'t run extra laps that day, we surely will\n' +
          '            come back for more of the same another day soon.',

        image: '/img/image.png',

        likes: 1,

      },

    ];

    */


    return (
      <Segment style={{ padding: '2em 2em' }} vertical>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Chat
        </Header>

        <FeedList events={events}/>


      </Segment>
    );
  }

}

export default Chat;