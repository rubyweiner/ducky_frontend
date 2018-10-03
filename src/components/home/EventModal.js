import React, { Component } from 'react';
import { Modal, Card, Divider, Image } from 'semantic-ui-react'

class EventModal extends Component {

  state = {
    first_name: null,
    last_name: null,
    profileId: null
  }

  componentDidMount() {
    this.fetchUser(this.props.e.host_id)
  }

  fetchUser = (userId) => {
    fetch(`http://localhost:3000/users/${userId}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        first_name: json.profile.first_name,
        last_name: json.profile.last_name,
        profileId: json.profile.id
      })
    })
  }

  render() {
    return (
      <Modal.Content>
        <Card fluid raised>
          <div className="eventImage">
            <Image src={this.props.e.cover_photo}/>
          </div>
         <Card.Content>
          <Card.Header>{this.props.e.name}</Card.Header>
          <Card.Meta>
            {this.state.first_name && this.state.last_name ?
              <span className='date'>Hosted By: {this.state.first_name} {this.state.last_name}</span>
            :
              null
            }
          </Card.Meta>
          <Divider />
          <Card.Description><h5>Date: </h5>{this.props.e.date}</Card.Description>
          <Card.Description><h5>Time: </h5>{this.props.e.time}</Card.Description>
          <Card.Description><h5>Location: </h5>{this.props.e.location}</Card.Description>
          <Card.Description><h5>Description: </h5>{this.props.e.description}</Card.Description>
        </Card.Content>
        </Card>
      </Modal.Content>
    )
  }
}

export default EventModal
