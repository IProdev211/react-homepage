import React, {Component} from 'react';

import {Icon, List, Image, Button, Form} from 'semantic-ui-react';


class RoomMemberList extends Component {

  state = {
    selectedMember: ''
  };

  selectHandler(evt, target) {
    this.setState({selectedMember: target.value});
  }
  
  focusHandler() {
    this.setState({selectedMember: ''});
  }

  render() {

    const allMembers = this.props.memberList;
    const roomId = this.props.roomId;
    const selectedMember = this.state.selectedMember;
    const members = this.props.members;
    const deleteHandler = this.props.deleteHandler;
    const addHandler = this.props.addHandler;

    const addMemberForm = (
      <List.Item>
        <Form >
          <Form.Field>
            <label>Add user</label>
            <Form.Group widths="equal">
              <Form.Select placeholder='Select User' search selection
                           value={selectedMember}
                           options={allMembers}
                           onChange={this.selectHandler.bind(this)}
                           onFocus={this.focusHandler.bind(this)}
              />
              <Button type='submit' icon onClick={() => {addHandler(roomId, selectedMember); this.setState({selectedMember: ''});}}>
                <Icon name='plus' />
              </Button>
            </Form.Group>
          </Form.Field>
        </Form>
      </List.Item>
    );


    if (members.length === 0) return <List style={{padding:'.5em 1em'}} >{addMemberForm}</List>;


    const memberList = members.map(member => (
      <List.Item key={member.id}>
        <Image avatar src={member.user_thumb} />
        <List.Content>
          <List.Header as='a'>{member.user_firstname} {member.user_lastname}</List.Header>
          <List.Description>
            {member.user_email}
          </List.Description>
        </List.Content>
        <Button icon floated="right" onClick={() => {deleteHandler(member.id)}}>
          <Icon name='trash' />
        </Button>
      </List.Item>
    ));


    return (
      <List style={{padding:'.5em 1em'}} >

        {memberList}

        {addMemberForm}

      </List>
    );

  }

}
export default RoomMemberList;