import React, { Component } from 'react';

import {Segment} from "semantic-ui-react";

import AllRooms from './AllRooms';

class Rooms extends Component {

  render() {

    return (
      <Segment style={{ padding: '2em 2em' }} vertical>

        <AllRooms />

      </Segment>
    );

  }
}

export default Rooms;