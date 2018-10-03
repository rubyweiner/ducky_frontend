import React, { Component } from 'react';
import { Form, Modal, Input, TextArea, Button, Header, Segment, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'

class EventForm extends Component {

  onSubmit = (event) => {
    this.props.onSubmit(event.currentTarget)
  }
  render() {
    return (
      <Modal.Content>
      <Segment>
        <Form onSubmit={(event) => this.onSubmit(event)}>
          <Header as="h2" >New Event</Header>
          <Divider />
          <Form.Field control={Input} label='Name' placeholder='Name' />
          <Form.Group widths='equal'>
            <Form.Field control={Input} type="date" label='Date' />
            <Form.Field control={Input} type="time" label='Time' />
            <Form.Field control={Input} label='Location' placeholder='Location' />
          </Form.Group>
          <Form.Field control={Input} label='Image' placeholder='img url' />
          <Form.Field
            id='description'
            control={TextArea}
            label='Description'
            placeholder='Description'
          />
          <Form.Field control={Button} >Create Event</Form.Field>
        </Form>
      </Segment>
      </Modal.Content>
    )
  }

}


export default EventForm
