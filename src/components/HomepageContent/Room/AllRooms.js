import React, {Component} from 'react';

import faker from 'faker'
import _ from 'lodash'

import {Accordion, Icon, List, Image, Button} from 'semantic-ui-react'

import apiService from '../../../service/apiService';

import auth from '../../../service/auth';

import RoomMemberList from './RoomMemberList';


class AllRooms extends Component {

  constructor(props) {
    super(props);

    this.state = {
      rooms: [],
    }

  }

  componentWillMount() {
    apiService.getOwnRooms(auth.user).then(rooms => {
      console.log(rooms);
      this.setState({rooms: rooms});

    });
  }

  render() {

    let rooms = this.state.rooms;

    let roomPanels = rooms.map(room => {
      return {
        key: `room_id-${room.id}`,
        title: `${room.name} (${room.count})`,
        content: <div className="content active"><RoomMemberList members={room.members}/></div>
      };
    });

    const panels = _.times(3, i => ({
      key: `panel-${i}`,
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraphs(),
    }));


    return <Accordion defaultActiveIndex={[0,2]} panels={roomPanels} exclusive={false} styled />;

  }
}

export default AllRooms;