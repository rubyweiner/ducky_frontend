import React, { Component } from 'react';
import { connect } from 'react-redux'
import NotMyProfile from '../components/profile/NotMyProfile'

class ProfileContainer extends Component {

  render() {
		return (
      <div className="profilecontainer">
        <NotMyProfile />
      </div>
		)
	}
}

const mapStateToProps = state => {
  return {
    user: state.user,
    profile: state.profile,
    skills: state.skills,
    notMyProfile: state.notMyProfile
   }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     setCurrentUser: user => dispatch(setCurrentUser(user)),
//     setCurrentProfile: profile => dispatch(setCurrentProfile(profile)),
//     setCurrentSkills: skills => dispatch(setCurrentSkills(skills)),
//     setOtherProfile: notMyProfile => dispatch(setOtherProfile(notMyProfile))
//   }
// }

export default connect(mapStateToProps)(ProfileContainer)
