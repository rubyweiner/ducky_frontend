import React, { Component } from 'react';
import { Segment, Grid, Card, Image, Item, Menu, Header, Divider, List, Button, Modal } from 'semantic-ui-react'
import { setCurrentUser, setCurrentProfile, setCurrentSkills, setCurrentFollowers, setCurrentPosts, setOtherUser, setOtherProfile, setOtherSkills, setOtherFollowers, setOtherPosts } from '../actions/actions.js'
import { connect } from 'react-redux'
import EventListItem from '../components/events/EventListItem'
import EventDisplayItem from '../components/events/EventDisplayItem'
import Invited from '../components/events/Invited'
import EventForm from '../components/events/EventForm'
import EventDisplay from '../components/events/EventDisplay'
import SearchUsers from '../components/events/SearchUsers'


class EventsContainer extends Component {

  state = {
    currentEvent: null,
    hosting: this.props.user.events,
    attending: [],
    open: false,
    inviteMode: false
  }


  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
  }

  close = () => this.setState({ open: false })

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

  createEvent = (e) => {
    let name = e[0].value
    let date = e[1].value
    let time = e[2].value
    let location = e[3].value
    let cover_photo = e[4].value
    let description = e[5].value
    fetch('http://localhost:3000/events', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: name,
        date: date,
        time: time,
        location: location,
        cover_photo: cover_photo,
        description: description,
        host_id: this.props.user.id
      })
    })
      .then(response => response.json())
      .then(this.close())
  }

  fetchUser = () => {
    fetch(`http://localhost:3000/user/${this.props.user.id}`)
    .then(response => response.json())
    .then(json => this.props.setCurrentUser(json))
  }

  switchEditMode = () => {
    this.setState({editMode: !this.state.editMode})
  }

  setInviteMode = () => {
    this.setState({inviteMode: true})
  }

  addInvitee = (userId) => {
    this.setState({inviteMode: false})
    fetch('http://localhost:3000/userevents', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        invitee_id: userId,
        event_id: this.state.currentEvent.id
      })
    })
    .then(response => response.json())
    .then(json => this.fetchEvent(json.event_id))
  }

  render() {
    const { open, closeOnEscape, closeOnDimmerClick } = this.state

		return (
    <Segment >
    <Header as="h2" textAlign="left" fluid>Events<Button basic floated="right" onClick={this.closeConfigShow(false, true)}>Host an Event</Button></Header>
    <Modal
      open={open}
      closeOnEscape={closeOnEscape}
      closeOnDimmerClick={closeOnDimmerClick}
      onClose={this.close}
      basic size='large'
    >
        <EventForm onSubmit={this.createEvent} />
    </Modal>

    <Divider />
      <Grid columns="equal">
        <Grid.Column width={5} textAlign="left">
          <Header as="h3">Hosting</Header>
          <Divider />
            <Menu divided vertical fluid>
              {this.state.hosting[0] ?
                  this.state.hosting.map(e =>
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
                      <EventListItem e={e} onClick={this.onClick} />
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
                <EventDisplayItem currentEvent={this.state.currentEvent} />
              :
                <Segment />
              }

            </Grid.Column>
            <Grid.Column width={4}>
                <Header as="h3">Invited
                {this.state.currentEvent ?
                  <Button basic floated="right" size="tiny" onClick={this.setInviteMode}>Invite Someone</Button>
                :
                  null
                }
                </Header>
                <Divider />
                {this.state.inviteMode ?
                  <SearchUsers e={this.state.currentEvent} addInvitee={this.addInvitee}/>
                :
                  null
                }
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
