import React, { Component } from 'react';

import {Button, Form} from "semantic-ui-react";

//-----------------------------------------------------------------------------

import apiService from "../../../service/apiService";

import auth from "../../../service/auth";

//-----------------------------------------------------------------------------

import ModalAddMember from './ModalAddMember';

import ModalMessage from './ModalMessage';

import OneRoom from './OneRoom';

//-----------------------------------------------------------------------------

class AllRooms extends Component {

  constructor(props) {
    super(props);

    this.state = {

      rooms: [],

      newRoomName: '',

      modalMemberOpen: false,
      modalMemberRoomId: null,
      modalMemberRoomName: '',
      modalMemberMemberList: [],

      modalMessageOpen: false,
      modalMessageHeader: '',
      modalMessageContent: '',
      modalMessageIcon: '',
      modalMessageLabel: '',
      modalMessageActionHandler: null,

    };

    this.closeMemberModal = this.closeMemberModal.bind(this);
    this.openMemberModal = this.openMemberModal.bind(this);
    this.addMember = this.addMember.bind(this);
    
    this.getOwnRooms = this.getOwnRooms.bind(this);
    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.addRoom = this.addRoom.bind(this);
    this.deleteMember = this.deleteMember.bind(this);

    this.deleteRoom = this.deleteRoom.bind(this);
    this.closeMessageModal = this.closeMessageModal.bind(this);
    this.openMessageModal = this.openMessageModal.bind(this);

  }

  //_----------------------------------------------------------------------

  inputChangeHandler(evt, {name, value}) {
    this.setState({[name]:value});
  }

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

  openMemberModal(room_id, room_name) {
    apiService.getAddableMembers(room_id).then(members => {
      this.setState({modalMemberMemberList: members});
    });
    // TODO: move up, maybe (think about)
    this.setState({modalMemberOpen:true, modalMemberRoomId:room_id, modalMemberRoomName:room_name});
  }

  closeMemberModal() {
    this.setState({modalMemberOpen:false, modalMemberRoomId:null, modalMemberRoomName:'', modalMemberMemberList:[]});
  }

  //_----------------------------------------------------------------------

  addMember(room_id, member_id) {
    apiService.addMember(room_id, member_id).then(() => {
      this.closeMemberModal();
      this.getOwnRooms();
    });
  }

  //_----------------------------------------------------------------------

  deleteMember(member_id, member_name) {
    this.openMessageModal('Remove member', 'Do you really want to remove the member', 'exclamation triangle', member_name,() => {
      apiService.deleteMember(member_id).then(() => {
        this.closeMessageModal();
        this.getOwnRooms();
      });
    });
  }


  addRoom() {
    //TODO: just pass user_id
    apiService.newRoom(auth.user, this.state.newRoomName).then(() => {
      this.setState({newRoomName: ''});
      this.getOwnRooms();
    });
  }

  deleteRoom(room_id, room_name) {
    this.openMessageModal('Delete room', 'Do you really want to delete the room', 'exclamation triangle', room_name,() => {
      apiService.deleteRoom(room_id).then(() => {
        this.closeMessageModal();
        this.getOwnRooms();
      });
    });
  }

  //_----------------------------------------------------------------------

  openMessageModal(header, content, icon, label, actionHandler) {
    this.setState({modalMessageOpen: true, modalMessageHeader:header, modalMessageContent: content, modalMessageIcon: icon, modalMessageLabel: label, modalMessageActionHandler: actionHandler});
  }

  closeMessageModal() {
    this.setState({modalMessageOpen: false, modalMessageHeader:'', modalMessageContent: '', modalMessageIcon: '', modalMessageLabel: '', modalMessageActionHandler:null});
  }

  //_----------------------------------------------------------------------

  render() {

    const allRooms = this.state.rooms.map((room) =>
      <OneRoom
        key={room.id}
        room={room}
        deleteMemberHandler={this.deleteMember}
        openMemberModalHandler={this.openMemberModal}
        deleteRoomHandler={this.deleteRoom}
      />
    );

    return (

      <div>

        {allRooms}

        <Form onSubmit={this.addRoom}>
          <Form.Input name="newRoomName" value={this.state.newRoomName} onChange={this.inputChangeHandler} fluid label='Create Room' placeholder='Room name' />
          <Button type='submit'>Submit</Button>
        </Form>

        <ModalAddMember
          modalOpen={this.state.modalMemberOpen}
          roomId={this.state.modalMemberRoomId}
          roomName={this.state.modalMemberRoomName}
          memberList={this.state.modalMemberMemberList}
          closeHandler={this.closeMemberModal}
          actionHandler={this.addMember}
        />

        <ModalMessage
          modalOpen={this.state.modalMessageOpen}
          header={this.state.modalMessageHeader}
          content={this.state.modalMessageContent}
          icon={this.state.modalMessageIcon}
          label={this.state.modalMessageLabel}
          actionHandler={this.state.modalMessageActionHandler}
          closeHandler={this.closeMessageModal}
        />

      </div>

    );

  }
}

export default AllRooms;