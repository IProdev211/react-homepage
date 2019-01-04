import React, {Component} from 'react';


import auth from "../../../service/auth";
import apiService from "../../../service/apiService";

import ChatRoom from "./ChatRoom";

class AllChatRooms extends Component {

  constructor(props) {
    super(props);

    this.state = {
      chatRooms: []
    };

    this.getAllChatRooms = this.getAllChatRooms.bind(this);
    this.getActiveRoomFromNewResult = this.getActiveRoomFromNewResult.bind(this);

  }

  getAllChatRooms() {
    apiService.getChatRooms(auth.user.id).then(chatRooms => {
      // save all chatRooms to state
      this.setState({ chatRooms: chatRooms });
      // propagate activeRoom to all other components
      this.props.changeRoomHandler(this.getActiveRoomFromNewResult(chatRooms));
    });
  }

  componentDidMount() {
    this.getAllChatRooms();
  }

  getActiveRoomFromNewResult(result) {
    if (!this.props.activeRoom) return null;
    return result.find(room => {
      return room.id === this.props.activeRoom.id;
    })
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dirty)
      this.getAllChatRooms();
  }

  render() {

   // console.log(this.state.chatRooms);

    let chatRoomSegments = this.state.chatRooms.map(chatRoom =>
      <ChatRoom
        key={chatRoom.id}
        active={(this.props.activeRoom && this.props.activeRoom.id === chatRoom.id)}
        chatRoom={chatRoom}
        changeRoomHandler={this.props.changeRoomHandler}
      />
    );


    return (
      <div>
        {chatRoomSegments}
      </div>
    );
  }
}

export default AllChatRooms;