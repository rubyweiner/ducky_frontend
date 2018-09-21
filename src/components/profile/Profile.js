import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Image, Grid, Segment, Divider, Header } from 'semantic-ui-react'
import Bio from './Bio'
import Skills from './Skills'
import Meetups from './Meetups'

class Profile extends Component {

  render() {
    return (
      <Segment>
        <div className="parent">
          <div className="coverphoto">
              <Image id="coverphoto" src={this.props.user.profile.cover_photo} />
          </div>
          <div className="profilepic">
            <Image id="profilepic" src={this.props.user.profile.profile_pic} />
          </div>
        </div>

        <Divider />
        <Header as="h2">{this.props.user.profile.first_name} {this.props.user.profile.last_name}</Header>

        <Bio bio={this.props.user.profile.bio}/>
        <Skills />
        <Meetups />
      </Segment>
    )
  }
}

const mapStateToProps = state => {
  return { user: state.user }
}


export default connect(mapStateToProps)(Profile)
