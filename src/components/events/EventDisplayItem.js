import React, { Component } from 'react';
import { Card, Image, Button, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'

class EventDisplayItem extends Component {

  state = {
    host: false,
    first_name: null,
    last_name: null,
    hostId: null
  }

  componentDidMount() {
    this.fetchUser(this.props.currentEvent.host_id)
  }

  fetchUser = (userId) => {
    fetch(`http://localhost:3000/users/${userId}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        first_name: json.profile.first_name,
        last_name: json.profile.last_name,
        hostId: json.profile.id
      })
    })
  }

  leaveEvent = () => {
    if (this.state.hostId === this.props.user.id) {
      this.patchEvent()
    } else {
      this.deleteUserEvent()
    }
  }

  patchEvent = () => {
    fetch(`http://localhost:3000/events/${this.props.currentEvent.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        host_id: null
      })
    })
    .then(response => response.json())
    .then(json => console.log(json))
  }


  render() {
    
    return (
      <Card fluid raised>
        <div className="eventImage">
          <Image src={this.props.currentEvent.cover_photo}/>
        </div>
       <Card.Content>
        <Card.Header>{this.props.currentEvent.name}</Card.Header>
        <Card.Meta>
          {this.state.first_name && this.state.last_name ?
            <span className='date'>Hosted By: {this.state.first_name} {this.state.last_name}</span>
          :
            null
          }
        </Card.Meta>
        <Divider />
        <Card.Description><h5>Date: </h5>{this.props.currentEvent.date}</Card.Description>
        <Card.Description><h5>Time: </h5>{this.props.currentEvent.time}</Card.Description>
        <Card.Description><h5>Location: </h5>{this.props.currentEvent.location}</Card.Description>
        <Card.Description><h5>Description: </h5>{this.props.currentEvent.description}</Card.Description>
      </Card.Content>

        <Button onClick={this.leaveEvent}>Leave Event</Button>

      </Card>
    )
  }

}

const mapStateToProps = state => {
  return {
    user: state.user,
    profile: state.profile
  }
}


export default connect(mapStateToProps)(EventDisplayItem)
