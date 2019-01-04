import React, { Component } from 'react';
import { Feed, Icon, Label } from 'semantic-ui-react';

class FeedEvent extends Component {

  render() {

    const feed = this.props.feed;

    let dateString = '';
    dateString += (feed.diff_day) ? feed.diff_day + ' day(s) ' : '';
    dateString += (feed.diff_hour) ? feed.diff_hour + ' hour(s) ' : '';
    dateString += (feed.diff_minute) ? feed.diff_minute + ' minute(s) ' : '';
    dateString += (feed.diff_second) ? feed.diff_second + ' second(s) ' : '';

    let textBlock = (feed.text) ?  <Feed.Extra text>{feed.text}</Feed.Extra> : null;

    let imgBlock = (feed.image) ?  <Feed.Extra images><img src={feed.image} alt="img-content"/></Feed.Extra> : null;


    return (
      <Feed.Event>
        <Feed.Label image={feed.user_thumb} />
        <Feed.Content>
          <Feed.Summary>
            <Label>{feed.user_firstname} {feed.user_lastname}</Label> {feed.content}
            {/*<Feed.Date>{feed.date}</Feed.Date>*/}
            <Feed.Date>{dateString} ago</Feed.Date>
          </Feed.Summary>

            {imgBlock}

            {textBlock}

          <Feed.Meta>
            <Feed.Like>
              <Icon name='like' />
              {feed.likes} {(feed.likes === 1) ? 'Like' : 'Likes'}
            </Feed.Like>
          </Feed.Meta>
        </Feed.Content>
      </Feed.Event>
    );
  }

}

export default FeedEvent;