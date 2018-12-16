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
      members: []
    };

    this.getOwnRooms = this.getOwnRooms.bind(this);

  }

  getOwnRooms() {
    apiService.getOwnRooms(auth.user).then(rooms => {
      this.setState({rooms: rooms});
    });
  }

  getAllMembers() {
    apiService.getMembers(auth.user.id).then(members => {
      this.setState({members: members});
    });
  }

  componentWillMount() {
    this.getOwnRooms();
    this.getAllMembers();
  }

  deleteMember(member_id) {
    apiService.deleteMember(member_id).then(() => {
      this.getOwnRooms();
    });
  }

  addMember(roomId, selectedMember) {
    if (selectedMember !== '') {
      apiService.addMember(roomId, selectedMember).then(() => {
        this.getOwnRooms();
      });
    }
  }

  render() {

    let rooms = this.state.rooms;
    let members = this.state.members;

    let memberList = members.map(member =>  {
      return {
        key: member.id,
        value: member.id,
        text: `${member.firstname} ${member.lastname} - ${member.email}`
      };
    });

    memberList.unshift({key:'', value:'', text:''});

    let roomPanels = rooms.map(room => {
      return {
        key: `room_id-${room.id}`,
        title: `${room.name} (${room.count})`,
        content: <RoomMemberList roomId={room.id} members={room.members} memberList={memberList} addHandler={this.addMember.bind(this)} deleteHandler={this.deleteMember.bind(this)}/>
      };
    });

    return <Accordion defaultActiveIndex={[0,2]} panels={roomPanels} exclusive={false} styled />;

  }
}

export default AllRooms;