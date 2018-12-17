import React, {Component} from "react";

import {List} from "semantic-ui-react";

import MemberListItem from './MemberListItem';

class MemberList extends Component {

  render() {

    const memberList = this.props.members.map((member) =>
      <MemberListItem key={member.id} member={member} deleteHandler={this.props.deleteHandler}/>
    );

    return (
      <List>
        {memberList}
      </List>
    );
  }



}

export default MemberList;
