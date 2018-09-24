import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Image, Grid, Segment, Divider, Header, Button } from 'semantic-ui-react'
import Bio from './Bio'
import Skills from './Skills'
import Meetups from './Meetups'

class Profile extends Component {

  render() {
    return (
      <Segment>
        <div className="parent">
          <div className="coverphoto">
              <Image id="coverphoto" src={this.props.profile.cover_photo} />
          </div>
          <div className="profilepic">
            <Image id="profilepic" src={this.props.profile.profile_pic} />
          </div>
        </div>

        <Divider />
        <Header as="h2">{this.props.profile.first_name} {this.props.profile.last_name}</Header>
        <Button>Edit</Button>
        <Bio bio={this.props.profile.bio}/>
        <Skills />
        <Meetups />
      </Segment>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.user, profile: state.profile }
}


export default connect(mapStateToProps)(Profile)
