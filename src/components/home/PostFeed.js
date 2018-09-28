import React, { Component } from 'react';
// import { connect } from 'react-redux'
import { Feed, Icon } from 'semantic-ui-react'

class PostFeed extends Component {
  state = {
    user: {},
    profile: {}
  }

  componentDidMount() {
    this.fetchUser()
  }

  fetchUser = () => {
    fetch (`http://localhost:3000/users/${this.props.post.user.id}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        user: json,
        profile: json.profile
      })
    })
  }

  render() {

    return (
      <Feed.Event>
        <Feed.Label>
          <img src={this.state.profile.profile_pic} />
        </Feed.Label>
        <Feed.Content>
          <Feed.Summary>
            <a>{this.state.profile.first_name} {this.state.profile.last_name}</a>
          </Feed.Summary>
          <Feed.Extra text>
            {this.props.post.content}
          </Feed.Extra>
        </Feed.Content>
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
