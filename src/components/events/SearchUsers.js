import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Button, Segment, Menu } from 'semantic-ui-react'
import SearchResults from './SearchResults'


class SearchUsers extends Component {
  state = {
    skills: [],
    query: '',
    profiles: [],
    filteredProfiles: []
  }


  onClick = (userId) => {
    this.props.addInvitee(userId)
  }

  onChange = (event) => {
    event.preventDefault()
    let searchTerm = event.currentTarget.parentElement.querySelector("input").value
    fetch('http://localhost:3000/profiles')
    .then(response => response.json())
    .then(json => this.setState({profiles: json}))
    .then(this.filterProfiles(this.state.query))
  }

  filterProfiles = (query) => {
    let profiles = this.state.profiles
    let filtered = []
    filtered = profiles.filter(profile => profile.first_name.toLowerCase().includes(query.toLowerCase()))
    this.setState({filteredProfiles: filtered})
  }

  render() {
    return (
    <div>
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

        <Menu vertical fluid>
          {this.state.filteredProfiles.map(profile =>
            <SearchResults profile={profile} onClick={this.onClick}/>
          )}
        </Menu>
      }

    </div>

    )
  }

}

const mapStateToProps = state => {
  return { user: state.user, profile: state.profile }
}

export default connect(mapStateToProps)(SearchUsers)
