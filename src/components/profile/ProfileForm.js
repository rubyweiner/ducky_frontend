import React, { Component } from 'react';
import { Button, Form, Card, Header, Input, Select, Container, Segment} from 'semantic-ui-react'

const options = [
  { key: 's', text: 'Student', value: 'student' },
  { key: 'e', text: 'Employed', value: 'employed' },
  { key: 'u', text: 'Unemployed', value: 'unemployed' }
]
class ProfileForm extends Component {
  render() {
    return (
      <Segment>
        <Form onSubmit={(event) => this.props.onSubmit(event)}>
          <Form.Group widths='equal'>
            <Form.Field control={Input} label='First Name' placeholder='First Name' />
            <Form.Field control={Input} label='Last Name' placeholder='Last Name' />
            <Form.Field control={Select} label='Occupation' options={options} placeholder='Occupation' />
          </Form.Group>
          <Form.Field>
            <label>Bio</label>
            <input placeholder='please enter a short description of yourself' />
          </Form.Field>
          <Form.Field>
            <label>Profile Picture</label>
            <input placeholder='image url' />
          </Form.Field>
          <Form.Field>
            <label>Cover Photo</label>
            <input placeholder='image url' />
          </Form.Field>
          <Button basic type='submit'>Create Profile</Button>
        </Form>
      </Segment>
    )
  }
}

export default ProfileForm
