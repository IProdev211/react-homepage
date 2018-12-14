import React, { Component } from 'react';
import { Feed, Icon } from 'semantic-ui-react';

class FeedEvent extends Component {

  render() {

    const event = this.props.event;

    return (
      <Feed.Event>
        <Feed.Label image={event.user_thumb} />
        <Feed.Content>
          <Feed.Summary>
            <a>{event.user_firstname} {event.user_lastname}</a> {event.content}
            <Feed.Date>{event.date}</Feed.Date>
          </Feed.Summary>
          <Feed.Extra images>
            <a><img src={event.image} alt='image' /></a>
          </Feed.Extra>
          <Feed.Extra text>
            {event.text}
          </Feed.Extra>
          <Feed.Meta>
            <Feed.Like>
              <Icon name='like' />
              {event.likes} {(event.likes === 1) ? 'Like' : 'Likes'}
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    );
  }

}

export default FeedEvent;