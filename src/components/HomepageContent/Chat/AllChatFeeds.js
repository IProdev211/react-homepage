import React, {Component} from 'react';

import { Button, Form } from "semantic-ui-react";

import apiService from "../../../service/apiService";
import auth from "../../../service/auth";

import FeedList from './FeedList';

import ChatRoom from "./ChatRoom";

class AllChatFeeds extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: '',
      feeds: null,
    };

    this.getAllFeeds = this.getAllFeeds.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);

  }
  
  componentWillReceiveProps(nextProps) {
    if (nextProps.activeRoom)
      this.getAllFeeds(nextProps.activeRoom.id);
  }

  getAllFeeds(room_id) {
    apiService.getChatFeeds(room_id).then(feeds => {
      //console.log(feeds);
      this.setState({ feeds: feeds });
    });
  }

  changeHandler(evt, target) {
    this.setState({message:target.value});
  }

  submitHandler() {
    apiService.newChatMessage(auth.user.id, this.props.activeRoom.id, this.state.message).then(() => {
      this.setState({message: ''});
    });
  }


  render() {

    let messageForm = (this.state.feeds) ? (
      <Form onSubmit={this.submitHandler}>
        <Form.TextArea placeholder='Write something...' value={this.state.message} onChange={this.changeHandler}/>
        <Button type='submit'>Submit</Button>
      </Form>
    ) : null;

    let chatRoomHeader = (this.props.activeRoom) ? <ChatRoom active={true} chatRoom={this.props.activeRoom}/> : null;

   //console.log(this.state.message);

    return (
      <div>

        {chatRoomHeader}

        <FeedList feeds={this.state.feeds}/>

        {messageForm}

      </div>
    );

  }
}

export default AllChatFeeds;