import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Menu, Image, Input, Icon, Modal, Header } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
import SearchResults from './SearchResults'


const duckyIcon = 'https://cdn3.iconfinder.com/data/icons/solidix-toys/128/toy_children-15-512.png'

class NavBar extends Component {

  state = {
    query: '',
    profiles: [],
    filteredProfiles: []
  }

  fetchProfiles = (query) => {
    fetch('http://localhost:3000/profiles')
    .then(response => response.json())
    .then(json => this.setState({profiles: json}))
    .then(this.filterProfiles(query))

  }

  filterProfiles = (query) => {
    let profiles = this.state.profiles
    let filtered = profiles.filter(profile => profile.first_name.toLowerCase().includes(query))
    this.setState({filteredProfiles: filtered})
  }

  onClick = (profileId) => {
    this.props.viewProfile(profileId).then((json) => this.props.history.push(`/profile/${json.first_name}_${json.last_name}`))
  }



  render() {
		return (
    <div className={`ui menu navbar`}>
      <NavLink
        activeClassName="ui active item"
        className="ui item"
        to="/about"
      >
        <h3>Ducky</h3>
      </NavLink>


      <div className="item">
      <Menu secondary vertical>
        <Menu.Item>

          <div className="ui large icon input">
            <Input
              type="text"
              size="mini"
              icon="search"
              placeholder="Search"
              value={this.state.query}
              onChange={(event) => {
                this.setState({query: event.currentTarget.value.toLowerCase()})
                this.fetchProfiles(event.currentTarget.value.toLowerCase())
                }
              }
            />
          </div>
        </Menu.Item>

          {this.state.query === '' ?
            null
          :
            <div className="searchresults">
              <SearchResults profiles={this.state.filteredProfiles} onClick={this.onClick}/>
            </div>
          }
      </Menu>
      </div>
      <div className="right menu">

        <NavLink
          activeClassName="ui active item"
          className="ui item"
          to="/home"
        >
          <Icon fitted name='home' size="large"/>
        </NavLink>

        <NavLink
          activeClassName="ui active item"
          className="ui item"
          to="/events"
        >
          <Icon fitted name='calendar' size="large"/>
        </NavLink>

        <NavLink
          activeClassName="ui active item"
          className="ui item"
          to="/skills"
        >
          <Icon fitted name='clipboard list' size="large"/>
        </NavLink>

<Modal trigger={
        <div className="item">
          <Icon link fitted name='keyboard' size="large"/>
        </div>
} basic size='small'>
    <Modal.Content>
      <Header as='h1' textAlign='center' inverted>
        MySnippets Coming Soon
      </Header>
    </Modal.Content>

</Modal>

<Modal trigger={
        <div className="item">
          <Icon link fitted name='mail' size="large"/>
        </div>
} basic size='small'>
    <Modal.Content>
      <Header as='h1' textAlign='center' inverted>
        Inbox Coming Soon
      </Header>
    </Modal.Content>

  </Modal>



        <NavLink
          exact
          to="/profile"
          className="ui item"
          activeClassName="ui active item"
        >
          <Image src={this.props.profile.profile_pic} avatar/>
          {this.props.profile.first_name} {this.props.profile.last_name}
        </NavLink>

        <NavLink
          exact
          to="/login"
          className="ui item"
          activeClassName="ui active item"
          onClick={() => this.props.onClick()}

        >
          LogOut
        </NavLink>
      </div>
    </div>

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

export default connect(mapStateToProps)(NavBar)
