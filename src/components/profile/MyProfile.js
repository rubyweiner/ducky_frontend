import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCurrentUser, setCurrentProfile, setCurrentSkills, setCurrentFollowers } from '../../actions/actions.js'
import { Image, Grid, Segment, Divider, Header, Button, Icon, List } from 'semantic-ui-react'
import BioForm from './BioForm'
import PersonalInfo from './PersonalInfo'
import PersonalInfoForm from './PersonalInfoForm'
import ContactInfo from './ContactInfo'
import ContactInfoForm from './ContactInfoForm'
import Skill from './Skill'
import SkillForm from './SkillForm'
import Meetups from './Meetups'
import Followships from './Followships'
import PostInput from './PostInput'
import PostFeed from './PostFeed'


class MyProfile extends Component {
  state = {
    editBioMode: false,
    editPersonalInfoMode: false,
    editContactInfoMode: false,
    editSkillsMode: false,
    addSkillsMode: false
  }

  editBio = () => {
    this.setState({editBioMode: !this.state.editBioMode})
  }

  editPersonalInfo = () => {
    this.setState({editPersonalInfoMode: !this.state.editPersonalInfoMode})
  }

  editContactInfo = () => {
    this.setState({editContactInfoMode: !this.state.editContactInfoMode})
  }

  editSkills = () => {
    this.setState({editSkillsMode: !this.state.editSkillsMode})
  }

  addSkills = () => {
    this.setState({addSkillsMode: true})
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

  findSkill = (event, skillId) => {
    event.preventDefault()
    this.postUserSkill(skillId)
  }

  postUserSkill = (skillId) => {
    fetch(`http://localhost:3000/userskills`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(
        {
          user_id: this.props.user.id,
          skill_id: skillId
        }
      )
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        this.fetchSkills(json.user_id)
      })

  }

  fetchSkills = (user_id) => {
    fetch(`http://localhost:3000/users/${user_id}`)
    .then(response => response.json())
    .then(json => {
      this.props.setCurrentSkills(json.skills)
      this.setState({editSkillsMode: false})
    })

  }

  deleteSkill = (event) => {
    event.preventDefault()
    let skill = event.currentTarget.parentElement.innerText
    this.deleteUserSkill(skill)
  }

  deleteUserSkill = (skill) => {
    //doesnt work
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
            <p> {this.props.profile.bio} {<Icon name='pencil' size="small" onClick={this.editBio}/>}</p>
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
                  <PersonalInfo
                    current_location={this.props.profile.current_location}
                    hometown={this.props.profile.hometown}
                    education={this.props.profile.education}
                    company={this.props.profile.company}
                    dob={this.props.profile.dob}
                  />
                }
              </Segment>

              <Segment>
                <h4>Contact Info {<Icon name='pencil' size="small" floated="right" onClick={this.editContactInfo}/>}</h4>
                <Divider />
                {this.state.editContactInfoMode ?
                  <ContactInfoForm onSubmit={this.updateContactInfo} />
                :
                  <ContactInfo
                    email={this.props.user.email}
                    github={this.props.profile.github}
                    blog={this.props.profile.blog}
                  />
                }
              </Segment>

              <Segment>
                <h4>Skills {<Icon name='pencil' size="small" onClick={this.editSkills}/>}</h4>
                <Divider />
                {this.state.addSkillsMode ?
                  <SkillForm onSubmit={this.findSkill}/>
                  :
                  this.props.skills[0] ?
                    <List>
                      {this.props.skills.map(skill =>
                        <Skill skill={skill} editSkillsMode={this.state.editSkillsMode} onClick={this.deleteSkill}/>
                      )}
                      {this.state.editSkillsMode ?
                        <Button basic onClick={this.addSkills}>Add Skill</Button>
                      :
                        null
                      }
                    </List>
                  :
                    <Button basic onClick={this.addSkills}>Add Skill</Button>
                }


              </Segment>

              <Segment>
                <h4>MeetUps</h4>
                <Divider />
                <Meetups />
              </Segment>

            </Grid.Column>
            <Grid.Column width={6}>
              <PostInput />
              <Segment>
                <PostFeed />
              </Segment>

            </Grid.Column>
            <Grid.Column width={5}>
              <Segment>
                <h4>Following</h4>
                <Divider />
              </Segment>
              <Segment>
                <h4>Followers</h4>
                <Divider />
                {this.props.followers ?
                  this.props.followers.map(follower =>
                    <Followships follower={follower}/>
                  )
                :
                  null
                }
              </Segment>

              <Segment>
                SPOTIFY PLAYLIST?
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
    followers: state.followers
   }
}

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    setCurrentProfile: profile => dispatch(setCurrentProfile(profile)),
    setCurrentSkills: skills => dispatch(setCurrentSkills(skills)),
    setCurrentFollowers: followers => dispatch(setCurrentFollowers(followers))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile)
