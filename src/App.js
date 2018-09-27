import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import './index.css';
import LoginContainer from './containers/LoginContainer'
import NavBar from './containers/NavBar'
import MyProfileContainer from './containers/MyProfileContainer'
import ProfileContainer from './containers/ProfileContainer'
import HomePageContainer from './containers/HomePageContainer'
import { connect } from 'react-redux'
import { setCurrentUser, setCurrentProfile, setCurrentSkills, setOtherUser, setOtherProfile, setOtherSkills } from './actions/actions.js'

class App extends Component {

  viewProfile = (profileId) => {
  return fetch(`http://localhost:3000/profiles/${profileId}`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.props.setOtherProfile(json)
      this.fetchUser(json.user_id)
      return json
    })
  }

  fetchUser = (userId) => {
    fetch (`http://localhost:3000/users/${userId}`)
    .then(response => response.json())
    .then(json => {
      this.props.setOtherUser(json)
      this.props.setOtherSkills(json.skills)
    })
  }

  logOut = () => {
    localStorage.clear()
    this.props.setCurrentUser({})
    this.props.setCurrentProfile({})
    this.props.setCurrentSkills({})
    this.props.setOtherUser({})
    this.props.setOtherProfile({})
    this.props.setOtherSkills({})
  }

  render() {
    const LoginRouting = () => (
    <div className="container">
      <Route path="/login" component={LoginContainer} />
    </div>
    )


    const DefaultRouting = () => (
     <div className="parent">
        <Route path='/' render={(props) => <NavBar {...props} onClick={this.logOut} viewProfile={this.viewProfile}/>} />
        <Route exact path="/profile" component={MyProfileContainer} />
        <Route exact path={`/profile/${this.props.notMyProfile.first_name}_${this.props.notMyProfile.last_name}`} component={ProfileContainer}/>
        <Route exact path="/home" component={HomePageContainer} />
     </div>
    )

    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/(login)" component={LoginRouting}/>
            {this.props.user.id ? <Route component={DefaultRouting}/> : null}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    profile: state.profile,
    skills: state.skills,
    notMyUser: state.notMyUser,
    notMyProfile: state.notMyProfile,
    notMySkills: state.notMySkills
  }
}


const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    setCurrentProfile: profile => dispatch(setCurrentProfile(profile)),
    setCurrentSkills: skills => dispatch(setCurrentSkills(skills)),
    setOtherUser: notMyUser => dispatch(setOtherUser(notMyUser)),
    setOtherProfile: notMyProfile => dispatch(setOtherProfile(notMyProfile)),
    setOtherSkills: notMySkills => dispatch(setOtherSkills(notMySkills))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
