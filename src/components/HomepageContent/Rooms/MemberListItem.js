import React, {Component} from "react";

import {Button, Icon, Image, List} from "semantic-ui-react";

class MemberListItem extends Component {

  render() {

    const deleteHandler = this.props.deleteHandler;
    const member = this.props.member;

    return (
      <List.Item key={member.id}>
        <Image avatar src={member.user_thumb} />
        <List.Content>
          <List.Header as='a'>{member.user_firstname} {member.user_lastname}</List.Header>
          <List.Description>
            {member.user_email}
          </List.Description>
        </List.Content>
        <Button icon floated="right" onClick={() => {deleteHandler(member.id, member.user_firstname + ' ' + member.user_lastname)}}>
          <Icon name='trash' />
        </Button>
      </List.Item>
    );

  }
}

export default MemberListItem;