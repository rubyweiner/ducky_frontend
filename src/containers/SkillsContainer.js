import React, { Component } from 'react';
import { Segment, Grid, Card, Image, Item, Menu, Header, Divider, List, Input, Button } from 'semantic-ui-react'
import { setOtherUser, setOtherProfile, setOtherSkills, setOtherFollowers, setOtherPosts} from '../actions/actions.js'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import SearchResults from '../components/skills/SearchResults'


class SkillsContainer extends Component {

  state = {
    query: '',
    allSkills: [],
    filteredSkills: [],
    skill: null,
    user: null,
    profile: null
  }

  onChange = (event) => {
    event.preventDefault()
    let searchTerm = event.currentTarget.parentElement.querySelector("input").value
    fetch('http://localhost:3000/skills')
    .then(response => response.json())
    .then(json => {
      this.setState({allSkills: json})
      })
    .then(this.filterSkills(this.state.query))
  }

  filterSkills = (query) => {
    let skills = this.state.allSkills
    let filtered = []
    filtered = skills.filter(skill => skill.name.toLowerCase().includes(query.toLowerCase()))
    this.setState({filteredSkills: filtered})
  }

  onClick = (event) => {
    event.preventDefault()
    let skillId = event.currentTarget.parentElement.className
    this.fetchSkill(skillId)
  }

  fetchSkill = (skillId) => {
    fetch(`http://localhost:3000/skills/${skillId}`)
    .then(response => response.json())
    .then(json => this.setState({skill: json}))
  }

  profileView = (profile) => {
    this.fetchUser(profile.user_id)
    this.fetchProfile(profile.id)
    this.props.setOtherProfile(this.state.profile)
    this.props.setOtherUser(this.state.user)
    this.props.setOtherSkills(this.state.user.skills)
    this.props.setOtherFollowers(this.state.user.followers)
    this.props.setOtherPosts(this.state.user.posts)
  }

  fetchUser = (userId) => {
    fetch(`http://localhost:3000/users/${userId}`)
    .then(response => response.json())
    .then(json => this.setState({user: json}))
    .then({

    })
  }

  fetchProfile = (profileId) => {
    fetch(`http://localhost:3000/profiles/${profileId}`)
    .then(response => response.json())
    .then(json => this.setState({profile: json}))
  }

  clearCoders = () => {
    this.setState({skill: null})
  }

  render() {
		return (
    <Segment >
    <Header as="h2" textAlign="left">Skills</Header>
    <Divider />
      <Grid columns="equal">
        <Grid.Column width={5} textAlign="left">
        <Header as="h3">Search by Skill</Header>
        <Divider />
          <Input
            fluid
            type="text"
            icon="search"
            placeholder="Search"
            value={this.state.query}
            onChange={(event) => {
              this.setState({query: event.currentTarget.value})
              this.onChange(event)
              }
            }
          />

          {this.state.query === '' ?
            null
          :
              <Menu size="large" vertical fluid>
                {this.state.filteredSkills.map(skill =>
                  <SearchResults skill={skill} onClick={this.onClick}/>
                )}
              </Menu>
          }
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as="h3">Search Results <Button basic floated="right" size="tiny" onClick={this.clearCoders}>Clear</Button></Header>
          <Divider />
          <Menu size="large" vertical fluid>
            { this.state.skill ?
                this.state.skill.profiles.map(profile =>
                <Menu.Item link onClick={() => this.profileView(profile)}>
                  <Link
                    to={`/profile/${profile.first_name}_${profile.last_name}`}
                  >
                    <div className={profile.id}>
                      <Image src={profile.profile_pic} avatar/> {profile.first_name} {profile.last_name}
                    </div>
                  </Link>
                </Menu.Item>
              )
            :
              null
            }
          </Menu>
        </Grid.Column>
        <Grid.Column width={5}>
          <Header as="h3">My Skills </Header>
          <Divider />
          <List>
            {this.props.skills.map(skill =>
              <List.Item>{skill.name}</List.Item>
            )}
          </List>
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
    setOtherUser: notMyUser => dispatch(setOtherUser(notMyUser)),
    setOtherProfile: notMyProfile => dispatch(setOtherProfile(notMyProfile)),
    setOtherSkills: notMySkills => dispatch(setOtherSkills(notMySkills)),
    setOtherFollowers: notMyFollowers => dispatch(setOtherFollowers(notMyFollowers)),
    setOtherPosts: notMyPosts => dispatch(setOtherPosts(notMyPosts))
  }
}


export default connect(mapStateToProps)(SkillsContainer)

// <Button basic floated="right" size="tiny" onClick={this.clearCoders}>Edit</Button>
