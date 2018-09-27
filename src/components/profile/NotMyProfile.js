import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setCurrentUser, setCurrentProfile, setCurrentSkills, setOtherProfile } from '../../actions/actions.js'
import { Container, Image, Grid, Segment, Divider, Header, Button, Icon, List } from 'semantic-ui-react'
import Bio from './Bio'
import PersonalInfo from './PersonalInfo'
import ContactInfo from './ContactInfo'
import Skill from './Skill'
import Meetups from './Meetups'

class NotMyProfile extends Component {

  render() {
		return (

      <Segment>
        <div className="parent">
          <div className="coverphoto">
              <Image id="coverphoto" src={this.props.notMyProfile.cover_photo} />
          </div>
          <div className="profilepic">
            <Image id="profilepic" src={this.props.notMyProfile.profile_pic} />
          </div>
        </div>

        <Divider />

        <Header as="h2">{this.props.notMyProfile.first_name} {this.props.notMyProfile.last_name}</Header>

        <Bio bio={this.props.notMyProfile.bio} />

        <Divider />

        <Grid columns="equal">
          <Grid.Column width={5}>
            <Segment>
              <h4>Personal Info</h4>
              <Divider />
              <PersonalInfo />
            </Segment>

            <Segment>
              <h4>Contact Info</h4>
              <Divider />
              <ContactInfo />
            </Segment>

            <Segment>
              SPOTIFY PLAYLIST?
            </Segment>
          </Grid.Column>
          <Grid.Column width={5}>
            <Segment>
              <h4>Skills</h4>
              <Divider />
                <List>
                  <List.Item>HELLo</List.Item>
                </List>
            </Segment>

            <Segment>
              <h4>MeetUps</h4>
              <Divider />
              <Meetups />
            </Segment>
          </Grid.Column>
          <Grid.Column width={5}>
            <Segment>
              <h4>Friends</h4>
              <Divider />
            </Segment>
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
    notMyProfile: state.notMyProfile
   }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    setCurrentProfile: profile => dispatch(setCurrentProfile(profile)),
    setCurrentSkills: skills => dispatch(setCurrentSkills(skills)),
    setOtherProfile: notMyProfile => dispatch(setOtherProfile(notMyProfile))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotMyProfile)
