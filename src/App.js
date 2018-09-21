import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './index.css';
import LoginContainer from './containers/LoginContainer'
import NavBar from './containers/NavBar'
import Profile from './containers/Profile'
import HomePageContainer from './containers/HomePageContainer'
import { connect } from 'react-redux'
import { setCurrentUser } from './actions/actions.js'

class App extends Component {

  logOut = () => {
    console.log(this.props.user)
    localStorage.clear()
    this.props.setCurrentUser({})
    console.log(this.props.user)
  }

  render() {
    const LoginRouting = () => (
    <div className="container">
      <Route path="/login" component={LoginContainer} />
    </div>
    )


    const DefaultRouting = () => (
     <div className="container">
       <NavBar />
       <Route exact path="/profile" component={Profile} />
       <Route exact path="/home" component={HomePageContainer} />
     </div>
    )

    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/(login)" component={LoginRouting}/>
            <Route component={DefaultRouting}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user }
}


const mapDispatchToProps = dispatch => {
  return { setCurrentUser: user => dispatch(setCurrentUser(user)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


//
// {this.props.user ?
//
//   <Switch>
//     <Route exact path="/profile" render={props => <NavBar {...props} logOut={this.logOut}/>} />
//     <Route exact path="/home" render={props => <HomePageContainer {...props} logOut={this.logOut}/>} />
//   </Switch>
// : null
// }
