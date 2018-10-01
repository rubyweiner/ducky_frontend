import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setOtherUser, setOtherProfile, setOtherSkills, setOtherFollowers, setOtherPosts} from '../../actions/actions.js'


class SearchResults extends Component {
  state = {
    user: {}
  }

  componentDidMount() {
    this.fetchUser(this.props.profile.user_id)
  }

  fetchUser = (userId) => {
    fetch(`http://localhost:3000/users/${userId}`)
    .then(response => response.json())
    .then(json => this.setState({user: json}))
  }

  onClick = (event) => {
    event.preventDefault()
    this.props.setOtherProfile(this.props.profile)
    this.props.setOtherUser(this.state.user)
    this.props.setOtherFollowers(this.state.user.followers)
    this.props.setOtherPosts(this.state.user.posts)
  }

  render() {
		return (
      <Menu.Item link onClick={(event) => this.onClick(event)}>
        <Link
          to={`/profile/${this.props.profile.first_name}_${this.props.profile.last_name}`}
        >
          <div className={this.props.profile.id}>
            <Image src={this.props.profile.profile_pic} avatar/> {this.props.profile.first_name} {this.props.profile.last_name}
          </div>
        </Link>
      </Menu.Item>
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

export default connect(null, mapDispatchToProps)(SearchResults)
