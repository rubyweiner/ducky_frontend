import React from 'react'
import { Card, Image, Button, Divider } from 'semantic-ui-react'
import { connect } from 'react-redux'

const EventDisplayItem = props => {
  return (
    <Card fluid raised>
      <div className="eventImage">
        <Image src={props.currentEvent.cover_photo}/>
      </div>
     <Card.Content>
      <Card.Header>{props.currentEvent.name}</Card.Header>
      <Card.Meta>
        <span className='date'>Hosted By: </span>
      </Card.Meta>
      <Divider />
      <Card.Description><h5>Date: </h5>{props.currentEvent.date}</Card.Description>
      <Card.Description><h5>Time: </h5>{props.currentEvent.time}</Card.Description>
      <Card.Description><h5>Location: </h5>{props.currentEvent.location}</Card.Description>
      <Card.Description><h5>Description: </h5>{props.currentEvent.description}</Card.Description>
    </Card.Content>

      <Button>Leave Event</Button>

    </Card>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    profile: state.profile
  }
}


export default connect(mapStateToProps)(EventDisplayItem)
