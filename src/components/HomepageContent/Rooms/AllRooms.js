import React, { Component } from 'react';

import {Button, Form, Header, Icon, Segment} from "semantic-ui-react";

//-----------------------------------------------------------------------------

import apiService from "../../../service/apiService";

import auth from "../../../service/auth";

//-----------------------------------------------------------------------------

import ModalAddMember from './ModalAddMember';

import ModalDeleteMessage from './ModalDeleteMessage';

import ModalNewRoom from './ModalNewRoom';

import OneRoom from './OneRoom';

//-----------------------------------------------------------------------------

class AllRooms extends Component {

  constructor(props) {
    super(props);

    this.state = {

      rooms: [],

      modalMemberOpen: false,
      modalMemberRoomId: null,
      modalMemberRoomName: '',
      modalMemberMemberList: [],

      modalDeleteMessageOpen: false,
      modalDeleteMessageHeader: '',
      modalDeleteMessageContent: '',
      modalDeleteMessageIcon: '',
      modalDeleteMessageLabel: '',
      modalDeleteMessageActionHandler: null,

      modalNewRoomOpen: false,

    };

    this.closeMemberModal = this.closeMemberModal.bind(this);
    this.openMemberModal = this.openMemberModal.bind(this);
    this.addMember = this.addMember.bind(this);
    
    this.getOwnRooms = this.getOwnRooms.bind(this);
    this.addRoom = this.addRoom.bind(this);
    this.deleteMember = this.deleteMember.bind(this);

    this.deleteRoom = this.deleteRoom.bind(this);
    this.closeDeleteMessageModal = this.closeDeleteMessageModal.bind(this);
    this.openMessageModal = this.openMessageModal.bind(this);

    this.openNewRoomModal = this.openNewRoomModal.bind(this);
    this.closeNewRoomModal = this.closeNewRoomModal.bind(this);

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

  openNewRoomModal() {
    this.setState({modalNewRoomOpen: true});
  }

  closeNewRoomModal() {
    this.setState({modalNewRoomOpen: false});
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
        this.closeDeleteMessageModal();
        this.getOwnRooms();
      });
    });
  }

  addRoom(room_name) {
    //TODO: just pass user_id
    apiService.newRoom(auth.user, room_name).then(() => {
      //this.setState({newRoomName: ''});
      this.closeNewRoomModal();
      this.getOwnRooms();
    });
  }

  deleteRoom(room_id, room_name) {
    this.openMessageModal('Delete room', 'Do you really want to delete the room', 'exclamation triangle', room_name,() => {
      apiService.deleteRoom(room_id).then(() => {
        this.closeDeleteMessageModal();
        this.getOwnRooms();
      });
    });
  }

  //_----------------------------------------------------------------------

  openMessageModal(header, content, icon, label, actionHandler) {
    this.setState({
      modalDeleteMessageOpen: true,
      modalDeleteMessageHeader:header,
      modalDeleteMessageContent: content,
      modalDeleteMessageIcon: icon,
      modalDeleteMessageLabel: label,
      modalDeleteMessageActionHandler: actionHandler
    });
  }

  closeDeleteMessageModal() {
    this.setState({
      modalDeleteMessageOpen: false,
      modalDeleteMessageHeader:'',
      modalDeleteMessageContent: '',
      modalDeleteMessageIcon: '',
      modalDeleteMessageLabel: '',
      modalDeleteMessageActionHandler:null
    });
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

        <Segment basic clearing>
          <Header as='h3' style={{ fontSize: '2em' }} floated="left">
            Your Rooms
          </Header>
          <Button floated='right' icon onClick={this.openNewRoomModal}>
            <Icon name='plus' />
          </Button>
        </Segment>

        {allRooms}

        <ModalAddMember
          modalOpen={this.state.modalMemberOpen}
          roomId={this.state.modalMemberRoomId}
          roomName={this.state.modalMemberRoomName}
          memberList={this.state.modalMemberMemberList}
          actionHandler={this.addMember}
          closeHandler={this.closeMemberModal}
        />

        <ModalDeleteMessage
          modalOpen={this.state.modalDeleteMessageOpen}
          header={this.state.modalDeleteMessageHeader}
          content={this.state.modalDeleteMessageContent}
          icon={this.state.modalDeleteMessageIcon}
          label={this.state.modalDeleteMessageLabel}
          actionHandler={this.state.modalDeleteMessageActionHandler}
          closeHandler={this.closeDeleteMessageModal}
        />

        <ModalNewRoom
          modalOpen={this.state.modalNewRoomOpen}
          actionHandler={this.addRoom}
          closeHandler={this.closeNewRoomModal}
        />

      </div>

    );

  }
}

export default AllRooms;