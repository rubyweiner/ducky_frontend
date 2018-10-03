import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setCurrentUser, setCurrentProfile, setCurrentSkills, setCurrentFollowers, setCurrentPosts } from '../../actions/actions.js'
import { Image, Grid, Segment, Divider, Header, Button, Icon, List, Feed, Modal, Card } from 'semantic-ui-react'
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
import EventModal from './EventModal'


class MyProfile extends Component {
  state = {
    editBioMode: false,
    editPersonalInfoMode: false,
    editContactInfoMode: false,
    editSkillsMode: false,
    addSkillsMode: false
  }

  componentDidMount() {
    this.fetchPosts()
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
    let skillId = event.target.parentElement.className
    this.deleteUserSkill(skillId)
  }

  deleteUserSkill = (skillId) => {
    //doesnt work
  }

  createPost = (event) => {
    event.preventDefault()
    let content = event.currentTarget.parentElement.querySelector(".ui input").value
    event.currentTarget.parentElement.querySelector('input').value = ""

    fetch ('http://localhost:3000/posts', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(
        {
          content: content,
          user_id: this.props.user.id
        }
      )
    })
    .then(response => response.json())
    .then(this.fetchPosts)
  }

  fetchPosts = () => {
    fetch(`http://localhost:3000/users/${this.props.user.id}`)
    .then(response => response.json())
    .then(json => {
      this.props.setCurrentPosts(json.posts)
    })
  }

  deletePost = (postId) => {
    fetch(`http://localhost:3000/posts/${postId}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(this.fetchPosts)
  }

  // fetchUser = () => {
  //   fetch(`http://localhost:3000/usrs/${this.props.user.id}`)
  //   .then(response => response.json())
  //   .then(json => this.props.setCurrentUser(json))
  // }


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
            <p> {this.props.profile.bio} {<Icon link name='pencil' size="small" onClick={this.editBio}/>}</p>
          }

          <Divider />

          <Grid columns="equal">
            <Grid.Column width={5}>
              <Segment>
                <h4>Personal Info {<Icon link name='pencil' size="small" onClick={this.editPersonalInfo}/>}</h4>

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
                <h4>Contact Info {<Icon link name='pencil' size="small" floated="right" onClick={this.editContactInfo}/>}</h4>
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
                <h4>Skills {<Icon link name='pencil' size="small" onClick={this.editSkills}/>}</h4>
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
            </Grid.Column>
            <Grid.Column width={6}>
              <PostInput onClick={this.createPost}/>
              <Segment>
                <Feed>
                  {this.props.posts[0] ?
                    this.props.posts.reverse().map(post =>
                      <PostFeed
                        post={post}
                        postId={post.id}
                        first_name={this.props.profile.first_name}
                        last_name={this.props.profile.last_name}
                        profile_pic={this.props.profile.profile_pic}
                        onClick={this.deletePost}
                      />
                    )
                  :
                    <p>No Posts to Share</p>

                  }

                </Feed>
              </Segment>

            </Grid.Column>
            <Grid.Column width={5}>
              <Segment>
                <h4>Events</h4>
                <Divider />
                <List>
                  {this.props.user.events.map(e =>
                    <Modal trigger={<List.Item as="a">{e.name}</List.Item>} basic size='small' >
                       <EventModal e={e}/>
                     </Modal>
                  )}
                </List>
              </Segment>

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

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile)
