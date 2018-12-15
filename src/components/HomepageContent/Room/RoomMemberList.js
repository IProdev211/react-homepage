import React, {Component} from 'react';

import {Accordion, Icon, List, Image, Button, Form, Segment} from 'semantic-ui-react';


class RoomMemberList extends Component {

  render() {

    const members = this.props.members;

    if (members.length === 0) return (
      <List style={{padding:'0 1em', marginTop:0}} >
        <List.Item>
          <Form >
            <Form.Field>
              <label>Add user</label>
              <Form.Group widths="equal">
                <Form.Input placeholder='username' />
                <Button type='submit' xxfloated="right" icon><Icon name='plus' /></Button>
              </Form.Group>
            </Form.Field>
          </Form>
        </List.Item>
      </List>
    );

    const memberList = members.map(member => (
      <List.Item key={member.id}>
        <Image avatar src={member.user_thumb} />
        <List.Content>
          <List.Header as='a'>{member.user_firstname} {member.user_lastname}</List.Header>
          <List.Description>
            {member.user_email}
          </List.Description>
        </List.Content>
        <Button icon floated="right">
          <Icon name='trash' />
        </Button>
      </List.Item>
    ));


    return (
      <List style={{padding:'0 1em', marginTop:0}} >
        {memberList}
        <List.Item>
          <Form >
            <Form.Field>
              <label>Add user</label>
              <Form.Group widths="equal">
                <Form.Input placeholder='username' />
                <Button type='submit' icon><Icon name='plus' /></Button>
              </Form.Group>
            </Form.Field>
          </Form>
        </List.Item>
      </List>
    );

  }

}
export default RoomMemberList;