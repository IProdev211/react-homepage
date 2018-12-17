import React, {Component} from "react";

import {Button, Header, Icon, Segment} from "semantic-ui-react";

import MemberList from './MemberList';


class OneRoom extends Component {

  render() {

    const room = this.props.room;

    return (
      <Segment.Group >
        <Segment color='blue' clearing>
          <Header floated='left'>{room.name}</Header>
          <Button floated='right' size="small">TODO: delete</Button>
          <Button floated='right' size="small" icon onClick={() => this.props.modalHandler(room.id, room.name)}>
            <Icon name='plus' />
          </Button>
        </Segment>
        <Segment basic>
          <MemberList members={room.members} deleteHandler={this.props.deleteHandler}/>
        </Segment>
      </Segment.Group>
    );
  }



}

export default OneRoom;