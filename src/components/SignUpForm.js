import React, { Component } from 'react';
import { Button, Checkbox, Form, Segment} from 'semantic-ui-react'

class SignUpForm extends Component {
  render() {
    return (
    <Segment padded>
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
      </Form>
    </Segment>
    )
  }
}

export default SignUpForm
