import React, { Component } from 'react';
import { Feed, Icon } from 'semantic-ui-react';

class FeedEvent extends Component {

  render() {

    const event = this.props.event;

    let dateString = '';
    dateString += (event.diff_day) ? event.diff_day + ' day(s) ' : '';
    dateString += (event.diff_hour) ? event.diff_hour + ' hour(s) ' : '';
    dateString += (event.diff_minute) ? event.diff_minute + ' minute(s) ' : '';
    dateString += (event.diff_second) ? event.diff_second + ' second(s) ' : '';

    let textBlock = (event.text) ?  <Feed.Extra text>{event.text}</Feed.Extra> : null;

    let imgBlock = (event.image) ?  <Feed.Extra images><a><img src={event.image} alt='image' /></a></Feed.Extra> : null;


    return (
      <Feed.Event>
        <Feed.Label image={event.user_thumb} />
        <Feed.Content>
          <Feed.Summary>
            <a>{event.user_firstname} {event.user_lastname}</a> {event.content}
            {/*<Feed.Date>{event.date}</Feed.Date>*/}
            <Feed.Date>{dateString} ago</Feed.Date>
          </Feed.Summary>

            {imgBlock}

            {textBlock}

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