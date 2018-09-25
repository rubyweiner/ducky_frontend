import React, { Component } from 'react';
import { Container, Image, Grid, Segment, Divider } from 'semantic-ui-react'
import ProfileForm from '../components/profile/ProfileForm'
import Profile from '../components/profile/Profile'
import { connect } from 'react-redux'
import { setCurrentUser, setCurrentProfile } from '../actions/actions.js'


class ProfileContainer extends Component {

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
        <Profile />
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
    profile: state.profile
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    setCurrentProfile: profile => dispatch(setCurrentProfile(profile))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
