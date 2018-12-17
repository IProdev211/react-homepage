import React, { Component } from 'react';

import { Button,Icon, Modal, Form, Label } from 'semantic-ui-react';


class ModalAddMember extends Component {

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
    this.props.closeHandler();
  }

  addMemberToRoom() {
    if (this.state.member_id) {
      this.props.actionHandler(this.props.roomId, this.state.member_id);
      this.setState({member_id: null});
    }
  }

  selectMember(evt, target) {
    this.setState({member_id: target.value});
  }

  render() {

    let modalMemberList = this.props.memberList;
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
      <Modal open={this.props.modalOpen} onClose={this.closeAndReset} size="small">
        <Modal.Header>Add to Room <Label size='big'>{this.props.roomName}</Label></Modal.Header>
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

export default ModalAddMember;
