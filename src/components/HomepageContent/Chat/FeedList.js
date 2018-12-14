import React, { Component } from 'react';

import { Feed } from 'semantic-ui-react';

import FeedEvent from './FeedEvent';

class FeedList extends Component {
  render() {

    let feedEvents = this.props.events.map((event, index) => <FeedEvent key={index} event={event}/>);

    return (
      <Feed>
        {feedEvents}
      </Feed>
    );
  }
}

export default FeedList;

