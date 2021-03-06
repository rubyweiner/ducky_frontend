import React, { Component } from 'react'
import SignInButton from '../components/login/SignInButton'
import SignUpButton from '../components/login/SignUpButton'
import LoginForm from '../components/login/LoginForm'
import { Card, Segment, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setCurrentUser, setCurrentProfile, setCurrentSkills, setCurrentFollowers, setCurrentFollowing, setCurrentPosts } from '../actions/actions.js'

class LoginContainer extends Component {
  state = {
    formMode: false,
    newUserMode: false
  }

  handleBackClick = () => {
    this.setState(
      {
        formMode: false,
        newUserMode: false
      }
    )
  }

  handleSignIn = () => {
    this.setState(
      {
        formMode: true,
        newUserMode: false
      }
    )
  }

  handleSignUp = () => {
    this.setState(
      {
        formMode: true,
        newUserMode: true
      }
    )
  }

  handleNewUser = (event) => {
    event.preventDefault()
    let email = event.currentTarget[0].value
    let pw = event.currentTarget[1].value
    this.postUser(email, pw)
  }

  postUser = (email, pw) => {
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email: email,
          password: pw
        }
      })
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.props.setCurrentUser(json.user);
        this.props.setCurrentProfile(null)
        this.props.setCurrentSkills([])
        this.props.setCurrentFollowers([])
        this.props.setCurrentFollowing([])
        this.props.setCurrentPosts([])
        localStorage.setItem("token", json.jwt);
        this.props.history.push('/profile')
      })
  }

  handleExistingUser = (event) => {
    event.preventDefault()
    let email = event.currentTarget[0].value
    let pw = event.currentTarget[1].value
    this.fetchExistingUser(email, pw)
  }

  fetchExistingUser = (email, pw) => {

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(
        {
          email: email,
          password: pw
        }
      )
    })
      .then(response => {
        if (response.status === 401) {
          alert("Incorrect email or password. Please try again.")
        } else {
          return response.json()
        }
      })
      .then(json => {
        if (json !== undefined){
          this.props.setCurrentUser(json.user);
          this.props.setCurrentProfile(json.user.profile)
          this.props.setCurrentSkills(json.user.skills)
          this.props.setCurrentFollowers(json.user.followers)
          this.props.setCurrentFollowing([])
          this.props.setCurrentPosts(json.user.posts)
          localStorage.setItem("token", json.jwt);
          this.props.history.push('/about')
        }
      })
  }


  render() {

    return(
    <div className="background">
      <div className="center">
        <Card centered>
          {this.state.formMode ?
            <LoginForm
              handleNewUser={this.handleNewUser}
              handleExistingUser={this.handleExistingUser}
              newUserMode={this.state.newUserMode}
              backClick={this.handleBackClick}
            />
          :
          <Segment padded>
            <Segment>
              <Card.Header as="h2" id="loginTitle" centered >Welcome to Ducky</Card.Header>
            </Segment>
            <Card.Content>
              <SignInButton onClick={this.handleSignIn}/>
              <Divider horizontal>Or</Divider>
              <SignUpButton onClick={this.handleSignUp}/>
            </Card.Content>
          </Segment>
          }
        </Card>
      </div>
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
    setCurrentSkills: skills => dispatch(setCurrentSkills(skills)),
    setCurrentFollowers: followers => dispatch(setCurrentFollowers(followers)),
    setCurrentFollowing: following => dispatch(setCurrentFollowing(following)),
    setCurrentPosts: posts => dispatch(setCurrentPosts(posts))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
