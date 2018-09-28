import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Button, Segment } from 'semantic-ui-react'
import SearchResults from './SearchResults'

class SearchInput extends Component {

  state = {
    query: '',
    profiles: [],
    filteredProfiles: []
  }
  onChange = (event) => {
    event.preventDefault()
    let searchTerm = event.currentTarget.parentElement.querySelector("input").value

    if (this.props.filter === "name") {
      this.fetchProfiles(searchTerm.toLowerCase())
    } else if (this.props.filter === "skill") {
      this.onSkillSearch(searchTerm)
    } else if (this.props.filter === "location") {
      this.onLocationSearch(searchTerm)
    }

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

  onSkillSearch = (searchTerm) => {

  }

  onLocationSearch = (searchTerm) => {

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
        <Segment>
          <SearchResults profiles={this.state.filteredProfiles} onClick={this.onClick}/>
        </Segment>
      }
    </div>

    )
  }

}

const mapStateToProps = state => {
  return { user: state.user, profile: state.profile }
}

export default connect(mapStateToProps)(SearchInput)

// this.fetchProfiles(event.currentTarget.value.toLowerCase())
