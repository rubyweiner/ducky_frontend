import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setOtherUser, setOtherProfile, setOtherSkills, setOtherFollowers, setOtherPosts} from '../../actions/actions.js'


class SearchResults extends Component {

  render() {

		return (
    <div className={this.props.skill.id}>
      <Menu.Item link onClick={(event) => this.props.onClick(event)}>

          <a href='#'>{this.props.skill.name}</a>
      </Menu.Item>
    </div>
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
