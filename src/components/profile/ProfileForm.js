import React, { Component } from 'react';
import { Button, Form, Input, Select, Segment} from 'semantic-ui-react'

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
              <Form.Field>
                <label>Date of Birth</label>
                <input type="date" />
              </Form.Field>
            </Form.Group>
            <Form.Group widths='equal'>
              <Form.Field control={Input} label='Education' placeholder='Education' />
              <Form.Field control={Select} label='Occupation' options={options} placeholder='Occupation' />
              <Form.Field control={Input} label='Company' placeholder='Company' />
            </Form.Group>
            <Form.Field>
              <label>Hometown</label>
              <input placeholder='Hometown'/>
            </Form.Field>
            <Form.Field>
              <label>Current Location</label>
              <input placeholder='Current Location'/>
            </Form.Field>
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

            <Form.Field>
              <label>GitHub</label>
              <input placeholder='GitHub' />
            </Form.Field>
            <Form.Field>
              <label>Blog</label>
              <input placeholder='Blog' />
            </Form.Field>

            <Button basic type='submit'>Create Profile</Button>
        </Form>
      </Segment>
    )
  }
}

export default ProfileForm
