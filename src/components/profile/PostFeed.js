import React, { Component } from 'react';
// import { connect } from 'react-redux'
import { Feed, Icon, Button } from 'semantic-ui-react'

class PostFeed extends Component {

  render() {
    return (
      <Feed.Event>
        <Feed.Label>
          <img src={this.props.profile_pic} />
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>
            <a>{this.props.first_name} {this.props.last_name}</a>

          </Feed.Summary>
          <Feed.Extra text>
            {this.props.post.content}
          </Feed.Extra>
        </Feed.Content>
        <Icon link name="trash alternate outline" floated="right" size="small" onClick={() => this.props.onClick(this.props.postId)}/>
      </Feed.Event>


    )
  }
}
//
// const mapStateToProps = state => {
//   return {
//
//     profile: state.profile,
//     notMyProfile: s
//    }
// }

export default PostFeed
