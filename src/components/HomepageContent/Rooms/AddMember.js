import React, { Component } from 'react';

import { Button,Icon, Modal, Form, Label } from 'semantic-ui-react';


class AddMember extends Component {

  constructor(props) {

    super(props);

    this.state = {
      member_id: null
    };

    this.addMemberToRoom = this.addMemberToRoom.bind(this);
    this.selectMember = this.selectMember.bind(this);
    this.closeAndReset = this.closeAndReset.bind(this);

  }

  closeAndReset() {
    this.setState({member_id: null});
    this.props.closeModal();
  }

  addMemberToRoom() {
    if (this.state.member_id) {
      this.props.addMember(this.props.modalRoomId, this.state.member_id);
      this.setState({member_id: null});
    }
  }

  selectMember(evt, target) {
    this.setState({member_id: target.value});
  }

  render() {

    let modalMemberList = this.props.modalMemberList;
    let memberList = [];

    if (modalMemberList) {
      memberList = modalMemberList.map(member =>  {
        return {
          key: member.id,
          value: member.id,
          text: `${member.firstname} ${member.lastname} - ${member.email}`
        };
      });
      memberList.unshift({key:'', value:'', text:''});
    }

    return (
      <Modal open={this.props.modalOpen} onClose={this.closeAndReset} >
        <Modal.Header>Add to Room <Label size='big'>{this.props.modalRoomName}</Label></Modal.Header>
        <Modal.Content>
          <Form >
            <Form.Field>
              <label>Select user</label>
              <Form.Group widths="equal">
                <Form.Select placeholder='Select a user' search selection
                             value={this.state.member_id}
                             options={memberList}
                             onChange={this.selectMember}
                />
              </Form.Group>
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.closeAndReset} >
            <Icon name='cancel' /> Cancel
          </Button>
          <Button color='green' onClick={this.addMemberToRoom} inverted>
            <Icon name='checkmark' /> Add to room
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}

export default AddMember;
