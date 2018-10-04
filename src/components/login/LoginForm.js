import React, { Component } from 'react';
import { Button, Form, Segment, Header} from 'semantic-ui-react'

class LoginForm extends Component {
  state = {
    newUserMode: this.props.newUserMode
  }

  render() {
    return (
      this.state.newUserMode ?
        <Segment padded>
          <Header as='h2'> Sign Up </Header>
          <Form onSubmit={(event) => this.props.handleNewUser(event)}>
             <Form.Field>
               <label>Email</label>
               <input placeholder='email' />
             </Form.Field>
             <Form.Field>
               <label>Password</label>
               <input placeholder='password' type='password'/>
             </Form.Field>
             <div className='ui two buttons'>
               <Button basic color="grey" type='submit'>Sign Up</Button>
               <Button basic color="grey" onClick={() => this.props.backClick()}>Back</Button>
              </div>
          </Form>
        </Segment>
      :
        <Segment padded>
          <Header as='h2'> Sign In </Header>
          <Form onSubmit={(event) => this.props.handleExistingUser(event)}>
             <Form.Field>
               <label>Email</label>
               <input placeholder='email' />
             </Form.Field>
             <Form.Field>
               <label>Password</label>
               <input placeholder='password' type='password'/>
             </Form.Field>
             <div className='ui two buttons'>
               <Button basic color="grey" type='submit'>Sign In</Button>
               <Button basic color="grey" onClick={() => this.props.backClick()}>Back</Button>
             </div>
          </Form>
        </Segment>


    )
  }
}

export default LoginForm
