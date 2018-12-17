import React, { Component } from 'react';

import {Segment, Header} from "semantic-ui-react";


import AllRooms from './AllRooms';

class Rooms extends Component {

  render() {

    return (
      <Segment style={{ padding: '2em 2em' }} vertical>

        <Header as='h3' style={{ fontSize: '2em' }}>
          Your Rooms
        </Header>

        <AllRooms />

      </Segment>
    );

  }
}

export default Rooms;