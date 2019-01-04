import React, { Component } from 'react';

import { Feed } from 'semantic-ui-react';

import FeedEvent from './FeedEvent';

class FeedList extends Component {
  render() {

    let feedEvents = (this.props.feeds) ? this.props.feeds.map(feed => <FeedEvent key={feed.id} feed={feed}/>) : null;

    return (
      <Feed>
        {feedEvents}
      </Feed>
    );
  }
}

export default FeedList;

