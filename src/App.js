import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import LoginContainer from './containers/LoginContainer'
import NavBar from './containers/NavBar'
import ProfileContainer from './containers/ProfileContainer'
import HomePageContainer from './containers/HomePageContainer'
import { connect } from 'react-redux'
import { setCurrentUser, setCurrentProfile } from './actions/actions.js'

class App extends Component {

  logOut = () => {
    localStorage.clear()
    this.props.setCurrentUser({})
    this.props.setCurrentProfile({})
  }

  render() {
    const LoginRouting = () => (
    <div className="container">
      <Route path="/login" component={LoginContainer} />
    </div>
    )


    const DefaultRouting = () => (
     <div className="container">
       <NavBar onClick={this.logOut}/>
       <Route exact path="/profile" component={ProfileContainer} />
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
  return { user: state.user, profile: state.profile }
}


const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    setCurrentProfile: profile => dispatch(setCurrentProfile(profile))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
