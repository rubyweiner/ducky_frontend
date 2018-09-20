import React, { Component } from 'react'
import SignInButton from '../components/SignInButton'
import SignUpButton from '../components/SignUpButton'
import SignInForm from '../components/SignInForm'
import SignUpForm from '../components/SignUpForm'
import { Card, Button, Segment, Divider } from 'semantic-ui-react'

class LoginContainer extends Component {
  state = {
    newUserMode: false
  }

  handleSignIn = () => {

  }

  handleSignUp = () => {
    this.setState(
      {newUserMode: true}
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
      .then(json => console.log(json))
  }

  render() {
    return(
      <Card centered>
        {this.state.newUserMode ?
          <SignUpForm handleNewUser={this.handleNewUser}/>
        :
        <Segment padded>
          <SignInButton onClick={this.handleSignIn}/>
        <Divider horizontal>Or</Divider>
          <SignUpButton onClick={this.handleSignUp}/>
        </Segment>
        }
      </Card>

    )
  }
}

export default LoginContainer
