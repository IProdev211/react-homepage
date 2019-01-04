import React, { Component } from 'react';

import { Grid } from "semantic-ui-react";

import SecureWebsocket from '../../../service/SecureWebsocket';


import AllChatRooms from './AllChatRooms';
import AllChatFeeds from './AllChatFeeds';



class Chat extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeRoom: null,
      dirty: false,
    };

    this.changeActiveRoom = this.changeActiveRoom.bind(this);
    //this.updateComponent = this.updateComponent.bind(this);

  }

  changeActiveRoom(room) {
    this.setState({activeRoom: room, dirty: false});
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (this.state.activeRoom !== nextState.activeRoom) || (this.state.dirty !== nextState.dirty);
  }


  render() {


    return (

        <div>

          <Grid style={{ padding: '2em 2em' }}>
            <Grid.Column width={11}>
              <AllChatFeeds activeRoom={this.state.activeRoom} dirty={this.state.dirty}/>
            </Grid.Column>
            <Grid.Column width={5}>
              <AllChatRooms changeRoomHandler={this.changeActiveRoom} activeRoom={this.state.activeRoom} dirty={this.state.dirty}/>
            </Grid.Column>
          </Grid>

          {/* --------------------------------------------------------------------------------------------------------- */}

          <SecureWebsocket
            url='ws://localhost:5000/api/socks/'
            onMessage={() => this.setState({dirty:true})}
            reconnect={true}
          />

        </div>

    );
  }

}

export default Chat;