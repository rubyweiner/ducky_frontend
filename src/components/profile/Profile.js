import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCurrentUser, setCurrentProfile } from '../../actions/actions.js'
import { Container, Image, Grid, Segment, Divider, Header, Button, Icon } from 'semantic-ui-react'
import Bio from './Bio'
import BioForm from './BioForm'
import PersonalInfo from './PersonalInfo'
import PersonalInfoForm from './PersonalInfoForm'
import ContactInfo from './ContactInfo'
import ContactInfoForm from './ContactInfoForm'
import Skills from './Skills'
import Meetups from './Meetups'




class Profile extends Component {
  state = {
    editBioMode: false,
    editPersonalInfoMode: false,
    editContactInfoMode: false

  }

  editBio = () => {
    this.setState({editBioMode: true})
  }

  editPersonalInfo = () => {
    this.setState({editPersonalInfoMode: true})
  }

  editContactInfo = () => {
    this.setState({editContactInfoMode: true})
  }

  updatePersonalInfo = (event) => {
    event.preventDefault()
    let data = event.currentTarget
    this.patchPersonalInfo(data)
  }

  patchPersonalInfo = (data) => {

    fetch (`http://localhost:3000/profiles/${this.props.profile.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          hometown: data[1].value,
          current_location: data[0].value,
          dob: data[2].value
        }
      )
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.props.setCurrentProfile(json)
      })
  }

  updateContactInfo = (event) => {
    event.preventDefault()
    let data = event.currentTarget
    this.patchContactInfo(data)
  }


    patchContactInfo = (data) => {
      fetch (`http://localhost:3000/profiles/${this.props.profile.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          {
            github: data[0].value
          }
        )
      })
        .then(response => response.json())
        .then(json => {
          console.log(json)
          this.props.setCurrentProfile(json)
        })
    }

  updateBio = (event) => {
    event.preventDefault()
    let userData = event.currentTarget
    this.patchBio(userData)
  }

  patchBio = (data) => {
    fetch(`http://localhost:3000/profiles/${this.props.profile.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          bio: data[0].value
        })
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.props.setCurrentProfile(json)
      })
  }

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
          {this.state.editBioMode ?
            <BioForm onSubmit={this.updateBio}/>
          :
            <Bio bio={this.props.profile.bio} onClick={this.editBio}/>
          }



          <Divider />

          <Grid columns="equal">
            <Grid.Column width={5}>
              <Segment>
                <h4>Personal Info {<Icon name='pencil' size="small" onClick={this.editPersonalInfo}/>}</h4>

                <Divider />
                {this.state.editPersonalInfoMode ?
                  <PersonalInfoForm onSubmit={this.updatePersonalInfo} />
                :
                  <PersonalInfo />
                }
              </Segment>

              <Segment>
                <h4>Contact Info {<Icon name='pencil' size="small" floated="right" onClick={this.editContactInfo}/>}</h4>
                <Divider />
                {this.state.editContactInfoMode ?
                  <ContactInfoForm onSubmit={this.updateContactInfo} />
                :
                  <ContactInfo />
                }
              </Segment>

              <Segment>
                SPOTIFY PLAYLIST?
              </Segment>
            </Grid.Column>
            <Grid.Column width={5}>
              <Segment>
                <h4>Skills</h4>
                <Divider />
                <Skills />
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
  return { user: state.user, profile: state.profile }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    setCurrentProfile: profile => dispatch(setCurrentProfile(profile))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
