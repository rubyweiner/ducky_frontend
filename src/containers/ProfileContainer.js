import React, { Component } from 'react';
import { Container, Image, Grid, Segment, Divider } from 'semantic-ui-react'
import ProfileForm from '../components/profile/ProfileForm'
import Profile from '../components/profile/Profile'
import { connect } from 'react-redux'
import { setCurrentUser, setCurrentProfile } from '../actions/actions.js'


class ProfileContainer extends Component {

  createProfile = (event) => {
    event.preventDefault()
    let first_name = event.currentTarget[0].value
    let last_name = event.currentTarget[1].value
    let bio = event.currentTarget[2].value
    let profile_pic = event.currentTarget[3].value
    let cover_photo = event.currentTarget[4].value
    this.postProfile(first_name, last_name, bio, profile_pic, cover_photo)
  }

  postProfile = (first_name, last_name, bio, profile_pic, cover_photo) => {
    let user = this.props.user

    fetch('http://localhost:3000/profiles', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        profile: {
          first_name: first_name,
          last_name: last_name,
          bio: bio,
          profile_pic: profile_pic,
          cover_photo: cover_photo,
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
