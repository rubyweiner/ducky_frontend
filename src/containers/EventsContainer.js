import React, { Component } from 'react';
import { Segment, Grid, Card, Image, Item, Menu, Header, Divider, List } from 'semantic-ui-react'
import { setCurrentUser, setCurrentProfile, setCurrentSkills, setCurrentFollowers, setCurrentPosts, setOtherUser, setOtherProfile, setOtherSkills, setOtherFollowers, setOtherPosts } from '../actions/actions.js'
import { connect } from 'react-redux'
import EventListItem from '../components/events/EventListItem'
import EventDisplayItem from '../components/events/EventDisplayItem'
import Invited from '../components/events/Invited'


class EventsContainer extends Component {

  state = {
    currentEvent: null,
    userEvents: null,
    attending: []
  }

  componentDidMount() {
    this.setAttending()
  }

  setAttending = () => {
    let attending = this.state.attending
    this.props.user.userevents ?
      this.props.user.userevents.map(userevent => {
        fetch (`http://localhost:3000/userevents/${userevent.id}`)
        .then(response => response.json())
        .then(json => {
          attending.push(json.event)
          this.setState({attending: attending})
        })
      })
    :
      null
  }

  onClick = (event) => {
    event.preventDefault()
    let eventId = event.currentTarget.parentElement.className
    this.fetchEvent(eventId)
  }

  fetchEvent = (eventId) => {
    fetch (`http://localhost:3000/events/${eventId}`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({currentEvent: json})
    })
  }

  profileView = (profile) => {
    this.fetchUser(profile.user_id)
    this.props.setOtherProfile(profile)
  }

  fetchUser = (userId) => {
    fetch(`http://localhost:3000/users/${userId}`)
    .then(response => response.json())
    .then(json => {
      this.props.setOtherUser(json)
      this.props.setOtherSkills(json.skills)
      this.props.setOtherFollowers(json.followers)
      this.props.setOtherPosts(json.posts)
    })
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
            <Menu divided vertical fluid>
              {this.props.user.events[0] ?
                  this.props.user.events.map(e =>
                    <div className={e.id}>
                      <EventListItem e={e} onClick={this.onClick}/>
                    </div>
                  )
                :
                  <Menu.Item>No Events</Menu.Item>
              }
            </Menu>
          <Header as="h3">Attending</Header>
          <Divider />
            <Menu divided vertical fluid>
              {this.state.attending[0] ?
                  this.state.attending.map(e =>
                    <div className={e.id}>
                      <EventListItem e={e} onClick={this.onClick}/>
                    </div>
                  )
                :
                  <Menu.Item>No Events</Menu.Item>
              }
            </Menu>
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as="h3">Selected Event</Header>
          <Divider />
          {this.state.currentEvent ?
            <EventDisplayItem currentEvent={this.state.currentEvent}/>
          :
            <Segment />
          }

        </Grid.Column>
        <Grid.Column width={4}>
            <Header as="h3">Invited</Header>
            <Divider />
            <Menu size="large" vertical fluid>
              {this.state.currentEvent ?
                this.state.currentEvent.invitees ?
                  this.state.currentEvent.invitees.map(invitee =>
                    <Invited invitee={invitee} profileView={this.profileView}/>
                  )
                :
                  <Menu.Item>No Guests</Menu.Item>
              :
                null
              }
            </Menu>

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
    posts: state.posts,
    notMyProfile: state.notMyProfile
   }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    setCurrentProfile: profile => dispatch(setCurrentProfile(profile)),
    setCurrentSkills: skills => dispatch(setCurrentSkills(skills)),
    setCurrentFollowers: followers => dispatch(setCurrentFollowers(followers)),
    setCurrentPosts: posts => dispatch(setCurrentPosts(posts)),
    setOtherUser: notMyUser => dispatch(setOtherUser(notMyUser)),
    setOtherProfile: notMyProfile => dispatch(setOtherProfile(notMyProfile)),
    setOtherSkills: notMySkills => dispatch(setOtherSkills(notMySkills)),
    setOtherFollowers: notMyFollowers => dispatch(setOtherFollowers(notMyFollowers)),
    setOtherPosts: notMyPosts => dispatch(setOtherPosts(notMyPosts))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(EventsContainer)
