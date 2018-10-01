import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Feed, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { setOtherUser, setOtherProfile, setOtherSkills, setOtherFollowers, setOtherPosts} from '../../actions/actions.js'

class PostFeed extends Component {
  state = {
    user: {},
    profile: {}
  }

  componentDidMount() {
    this.fetchUser()
  }

  componentWillUnmount() {
    this.setState({
      user: {},
      profile: {}
    })
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

  onClick = (event) => {
    event.preventDefault()
    this.props.setOtherProfile(this.state.profile)
    this.props.setOtherUser(this.state.user)
    this.props.setOtherSkills(this.state.user.skills)
    this.props.setOtherFollowers(this.state.user.followers)
    this.props.setOtherPosts(this.state.user.posts)
  }


  render() {

    return (
      <Feed.Event>
        <Feed.Label>
          <img src={this.state.profile.profile_pic} />
        </Feed.Label>
          <Feed.Content>
            <Feed.Summary onClick={this.onClick}>
              <Link
                to={`/profile/${this.state.profile.first_name}_${this.state.profile.last_name}`}
              >
                <a>{this.state.profile.first_name} {this.state.profile.last_name}</a>
              </Link>
            </Feed.Summary>
            <Feed.Extra text>
              {this.props.post.content}
            </Feed.Extra>
          </Feed.Content>
      </Feed.Event>

    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setOtherUser: notMyUser => dispatch(setOtherUser(notMyUser)),
    setOtherProfile: notMyProfile => dispatch(setOtherProfile(notMyProfile)),
    setOtherSkills: notMySkills => dispatch(setOtherSkills(notMySkills)),
    setOtherFollowers: notMyFollowers => dispatch(setOtherFollowers(notMyFollowers)),
    setOtherPosts: notMyPosts => dispatch(setOtherPosts(notMyPosts))
  }
}

export default connect(null, mapDispatchToProps)(PostFeed)
