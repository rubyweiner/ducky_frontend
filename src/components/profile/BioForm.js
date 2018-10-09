import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'

class BioForm extends Component {

  render() {
    return (
      <Form size="tiny" onSubmit={(event) => this.props.onSubmit(event)}>
        <Form.Field>
          <label>Profile Picture URL</label>
          <input placeholder={this.props.profile.profile_pic}/>
          <label>Cover Photo URL</label>
          <input placeholder={this.props.profile.cover_photo}/>
          <label>Bio</label>
          <input placeholder={this.props.profile.bio}/>
        </Form.Field>
        <Button basic type='submit' >Save</Button>

      </Form>

    )
  }
}

const mapStateToProps = state => {
  return { user: state.user, profile: state.profile }
}


export default connect(mapStateToProps)(BioForm)
