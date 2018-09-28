import React, { Component } from 'react';
import ProfileForm from '../components/profile/ProfileForm'
import MyProfile from '../components/profile/MyProfile'
import { connect } from 'react-redux'
import { setCurrentUser, setCurrentProfile, setCurrentSkills } from '../actions/actions.js'


class MyProfileContainer extends Component {

  createProfile = (event) => {
    event.preventDefault()
    let userData = event.currentTarget
    this.postProfile(userData)
  }

  postProfile = (userData) => {
    // doesnt work properly
    let user = this.props.user
    fetch('http://localhost:3000/profiles', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        profile: {
          first_name: userData[0].value,
          last_name: userData[1].value,
          dob: userData[2].value,
          education: userData[3].value,
          hometown: userData[5].value,
          current_location: userData[6].value,
          bio: userData[7].value,
          profile_pic: userData[8].value,
          cover_photo: userData[9].value,
          github: userData[10].value,
          company: userData[11].value,
          user_id: user.id
        }
      })
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.props.setCurrentProfile(json)
      })
  }

  render() {
    // debugger
		return (
    <div className="profilecontainer">
      {this.props.profile.id ?
        <MyProfile />
      :
        <ProfileForm onSubmit={this.createProfile}/>
      }
    </div>
		)
	}
}

const mapStateToProps = state => {
  return {
    user: state.user,
    profile: state.profile,
    skills: state.skills
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    setCurrentProfile: profile => dispatch(setCurrentProfile(profile)),
    setCurrentSkills: skills => dispatch(setCurrentSkills(skills))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyProfileContainer)
