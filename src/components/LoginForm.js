import React, { Component } from 'react';
import { Button, Form, Segment} from 'semantic-ui-react'

class LoginForm extends Component {
  state = {
    newUserMode: this.props.newUserMode
  }

  render() {
    return (
      this.state.newUserMode ?
        <Segment padded>
          <h2>Sign Up</h2>
          <Form onSubmit={(event) => this.props.handleNewUser(event)}>
             <Form.Field>
               <label>Email</label>
               <input placeholder='email' />
             </Form.Field>
             <Form.Field>
               <label>Password</label>
               <input placeholder='password' />
             </Form.Field>
             <Button type='submit'>Sign Up</Button>
             <Button onClick={() => this.props.backClick()}>Back</Button>
          </Form>
        </Segment>
      :
        <Segment padded>
          <h2>Sign In</h2>
          <Form onSubmit={(event) => this.props.handleExistingUser(event)}>
             <Form.Field>
               <label>Email</label>
               <input placeholder='email' />
             </Form.Field>
             <Form.Field>
               <label>Password</label>
               <input placeholder='password' />
             </Form.Field>
             <Button type='submit'>Sign In</Button>
             <Button onClick={() => this.props.backClick()}>Back</Button>
          </Form>
        </Segment>


    )
  }
}

export default LoginForm
