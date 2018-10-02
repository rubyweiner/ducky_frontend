import React, { Component } from 'react';
import { Segment, Grid, Card, Image, Item, Menu, Header, Divider } from 'semantic-ui-react'
import { setCurrentUser, setCurrentProfile, setCurrentSkills, setCurrentFollowers, setCurrentPosts } from '../actions/actions.js'
import { connect } from 'react-redux'
import EventListItem from '../components/events/EventListItem'
import EventDisplayItem from '../components/events/EventDisplayItem'


class EventsContainer extends Component {

  state = {
    currentEvent: null
  }
  onClick = (event) => {
    event.preventDefault()
    let eventId = event.currentTarget.parentElement.className
    this.fetchEvent(eventId)
  }

  fetchEvent = (eventId) => {
    fetch (`http://localhost:3000/events/${eventId}`)
    .then(response => response.json())
    .then(json => this.setState({currentEvent: json}))
  }

  render() {
		return (
    <Segment >
    <Header as="h2" textAlign="left">Events</Header>
    <Divider />
      <Grid columns="equal">
        <Grid.Column width={5} textAlign="left">
          <Header as="h3">Hosting</Header>
          <Divider />
          <Header as="h3">Attending</Header>
            <Divider />
            <Menu divided vertical fluid>
            {this.props.user.events ?
                this.props.user.events.map(e =>
                  <div className={e.id}>
                    <EventListItem e={e} onClick={this.onClick}/>
                  </div>
                )
              :
                <p>No Events</p>
            }
            </Menu>
        </Grid.Column>
        <Grid.Column width={1}>
        </Grid.Column>
        <Grid.Column width={8}>
          {this.state.currentEvent ?
            <EventDisplayItem currentEvent={this.state.currentEvent}/>
          :
            <Segment />
          }

        </Grid.Column>
      </Grid>
    </Segment>
		)
	}
}


const mapStateToProps = state => {
  return {
    user: state.user,
    profile: state.profile,
    skills: state.skills,
    followers: state.followers,
    posts: state.posts
   }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    setCurrentProfile: profile => dispatch(setCurrentProfile(profile)),
    setCurrentSkills: skills => dispatch(setCurrentSkills(skills)),
    setCurrentFollowers: followers => dispatch(setCurrentFollowers(followers)),
    setCurrentPosts: posts => dispatch(setCurrentPosts(posts))
  }
}


export default connect(mapStateToProps)(EventsContainer)
