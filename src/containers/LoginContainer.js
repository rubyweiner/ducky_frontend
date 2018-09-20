import React, { Component } from 'react'
import SignInButton from '../components/SignInButton'
import SignUpButton from '../components/SignUpButton'
import SignInForm from '../components/SignInForm'
import SignUpForm from '../components/SignUpForm'
import { Card, Button, Segment, Divider } from 'semantic-ui-react'

class LoginContainer extends Component {
  handleSignIn = () => {
    debugger
  }

  handleSignUp = () => {

  }

  render() {
    return(
      <Card centered>
        <Segment padded>
          <SignInButton onClick={this.handleSignIn}/>
        <Divider horizontal>Or</Divider>
          <SignUpButton onClick={this.handleSignUp}/>
        </Segment>
      </Card>

    )
  }
}

export default LoginContainer
