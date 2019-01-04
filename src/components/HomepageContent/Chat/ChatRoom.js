import React, {Component} from 'react';

import {Button, Header, Icon, Label, Segment} from "semantic-ui-react";

class ChatRoom extends Component {
  render() {

    let chatRoom = this.props.chatRoom;

    let changeRoomHandler = (this.props.changeRoomHandler) ? () => this.props.changeRoomHandler(chatRoom) : null;

    return (
        <Segment
          color={(this.props.active) ? 'blue' : null}
          clearing
          onClick={changeRoomHandler}
        >
          <Header floated='left'>{chatRoom.name}
            <Label>
              {chatRoom.id}
            </Label>
          </Header>
          <Button floated='right' size="small" icon >
            <Icon name='edit' /> {chatRoom.message_count}
          </Button>
          <Button floated='right' size="small" icon >
            <Icon name='users' /> {chatRoom.member_count}
          </Button>
        </Segment>
    );
  }
}

export default ChatRoom;