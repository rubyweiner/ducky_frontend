import React, { Component } from 'react';
// import { connect } from 'react-redux'
import { Feed, Icon } from 'semantic-ui-react'

class PostFeed extends Component {

  render() {
    return (
      <Feed>
        <Feed.Event>
          <Feed.Label>
            <img src='https://react.semantic-ui.com/images/avatar/small/elliot.jpg' />
          </Feed.Label>
        <Feed.Content>
        <Feed.Summary>
          <Feed.User>Elliot Fu</Feed.User> added you as a friend
          <Feed.Date>1 Hour Ago</Feed.Date>
        </Feed.Summary>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />
               4 Likes
             </Feed.Like>
           </Feed.Meta>
         </Feed.Content>
       </Feed.Event>
      </Feed>

    )
  }
}


export default PostFeed
