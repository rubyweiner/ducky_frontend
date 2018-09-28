import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Feed, Icon } from 'semantic-ui-react'

class PostFeed extends Component {

  render() {
    return (
      <Feed.Event>
        <Feed.Label>
          <img src={this.props.profile.profile_pic} />
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>
            <a>{this.props.profile.first_name} {this.props.profile.last_name}</a>
          </Feed.Summary>
          <Feed.Extra text>
            {this.props.post.content}
          </Feed.Extra>
        </Feed.Content>
      </Feed.Event>

    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    profile: state.profile,
    skills: state.skills,
    followers: state.followers,
    posts: state.posts
   }
}

export default connect(mapStateToProps)(PostFeed)
