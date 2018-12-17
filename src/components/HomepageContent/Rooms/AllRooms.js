import React, { Component } from 'react';

import {Button, Form} from "semantic-ui-react";

//-----------------------------------------------------------------------------

import apiService from "../../../service/apiService";

import auth from "../../../service/auth";

//-----------------------------------------------------------------------------

import AddMember from './AddMember';

import OneRoom from './OneRoom';

//-----------------------------------------------------------------------------

class AllRooms extends Component {

  constructor(props) {
    super(props);

    this.state = {

      rooms: [],

      newRoomName: '',

      modalOpen: false,
      modalRoomId: null,
      modalRoomName: '',
      modalMemberList: [],

    };

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);
    this.addMember = this.addMember.bind(this);
    
    this.getOwnRooms = this.getOwnRooms.bind(this);
    this.changeHander = this.changeHander.bind(this);
    this.addRoom = this.addRoom.bind(this);
    this.deleteMember = this.deleteMember.bind(this);

  }

  //_----------------------------------------------------------------------

  getOwnRooms() {
    //TODO: just pass user_id
    apiService.getOwnRooms(auth.user).then(rooms => {
      this.setState({rooms: rooms});
    });
  }

  componentWillMount() {
    this.getOwnRooms();
  }

  //_----------------------------------------------------------------------

  openModal(room_id, room_name) {
    apiService.getAddableMembers(room_id).then(members => {
      this.setState({modalMemberList: members});
    });
    // TODO: move up, maybe (think about)
    this.setState({modalOpen:true, modalRoomId:room_id, modalRoomName:room_name});
  }

  closeModal() {
    this.setState({modalOpen:false});
  }

  addMember(room_id, member_id) {
    apiService.addMember(room_id, member_id).then(() => {
      this.setState({modalOpen:false, modalRoomId:null, modalRoomName:''});
      this.getOwnRooms();
    });
  }

  //_----------------------------------------------------------------------

  deleteMember(member_id) {
    apiService.deleteMember(member_id).then(() => {
      this.getOwnRooms();
    });
  }

  changeHander(evt, {name, value}) {
    this.setState({[name]:value});
  }

  addRoom() {
    //TODO: just pass user_id
    apiService.newRoom(auth.user, this.state.newRoomName).then(() => {
      this.setState({newRoomName: ''});
      this.getOwnRooms();
    });
  }

  //_----------------------------------------------------------------------

  render() {

    const allRooms = this.state.rooms.map((room) =>
      <OneRoom
        key={room.id}
        room={room}
        deleteHandler={this.deleteMember}
        modalHandler={this.openModal}
      />
    );

    return (

      <div>

        {allRooms}

        <Form onSubmit={this.addRoom}>
          <Form.Input name="newRoomName" value={this.state.newRoomName} onChange={this.changeHander} fluid label='Create Room' placeholder='Room name' />
          <Button type='submit'>Submit</Button>
        </Form>

        <AddMember
          modalOpen={this.state.modalOpen}
          modalRoomId={this.state.modalRoomId}
          modalRoomName={this.state.modalRoomName}
          modalMemberList={this.state.modalMemberList}
          closeModal={this.closeModal}
          addMember={this.addMember}
        />

      </div>

    );

  }
}

export default AllRooms;