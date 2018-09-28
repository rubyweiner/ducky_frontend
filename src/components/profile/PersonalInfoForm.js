import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'

class PersonalInfoForm extends Component {

  render() {
    return (
      <Form size="tiny" onSubmit={(event) => this.props.onSubmit(event)}>
        <Form.Field>
          <label>Current Location</label>
          <input placeholder={this.props.profile.current_location}/>
        </Form.Field>
        <Form.Field>
          <label>Hometown</label>
          <input placeholder={this.props.profile.hometown}/>
        </Form.Field>
        <Form.Field>
          <label>Date of Birth</label>
          <input type="date" placeholder={this.props.profile.dob}/>
        </Form.Field>
        <Button basic type='submit'>Save</Button>

      </Form>

    )
  }
}

const mapStateToProps = state => {
  return { user: state.user, profile: state.profile }
}


export default connect(mapStateToProps)(PersonalInfoForm)
