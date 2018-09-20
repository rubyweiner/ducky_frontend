import React, { Component } from 'react'
import SignInButton from '../components/SignInButton'
import SignUpButton from '../components/SignUpButton'
import LoginForm from '../components/LoginForm'
import { Card, Segment, Divider, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { setCurrentUser } from '../actions/actions.js'

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
      .then(json => console.log(json))
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
      .then(response => response.json())
      .then(json => {
        console.log(json.user);
        this.props.setCurrentUser(json.user);
        console.log('new state', this.props.user);
        localStorage.setItem("token", json.jwt);
      })
  }


  render() {

    return(
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
        <Header as='h1' textAlign='center'> Ducky </Header>
          <SignInButton onClick={this.handleSignIn}/>
        <Divider horizontal>Or</Divider>
          <SignUpButton onClick={this.handleSignUp}/>
        </Segment>
        }
      </Card>

    )
  }
}

const mapStateToProps = state => {
  return { user: state.user }
}

const mapDispatchToProps = dispatch => {
  return { setCurrentUser: user => dispatch(setCurrentUser(user)) }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)
