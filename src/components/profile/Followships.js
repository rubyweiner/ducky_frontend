import React, { Component } from 'react';
import { connect } from 'react-redux'
import { List } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { setOtherUser, setOtherProfile, setOtherSkills, setOtherFollowers, setOtherPosts} from '../../actions/actions.js'

class Followships extends Component {

  state = {
    follower: {},
    profile: {},
    first_name: '',
    last_name: ''
  }

  componentDidMount() {
    this.setFollowerName()
  }

  setFollowerName = () => {
    fetch(`http://localhost:3000/users/${this.props.follower.id}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        follower: json,
        profile: json.profile,
        first_name: json.profile.first_name,
        last_name: json.profile.last_name
      })
    })
  }

  onClick = () => {
    this.props.setOtherProfile(this.state.profile)
    this.props.setOtherUser(this.state.follower)
    this.props.setOtherSkills(this.state.follower.skills)
    this.props.setOtherFollowers(this.state.follower.followers)
    this.props.setOtherPosts(this.state.follower.posts)
  }

  render() {

  return (
    <List.Item onClick={this.onClick}>
      <p>
        <Link
          to={`/profile/${this.state.first_name}_${this.state.last_name}`}
        >
          {this.state.first_name} {this.state.last_name}
        </Link>
      </p>
    </List.Item>
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

export default connect(null, mapDispatchToProps)(Followships)
//
// <Grid.Row>
//  {this.props.followships.map(followship =>
//    <Grid.Column>
//      {followship.user_id}
//    </Grid.Column>
//  )}
// </Grid.Row>
// <a href=``>{this.state.first_name} {this.state.last_name}</a>
