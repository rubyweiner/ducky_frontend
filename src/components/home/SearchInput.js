import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Input, Button, Segment, Menu } from 'semantic-ui-react'
import SearchResults from './SearchResults'

class SearchInput extends Component {

  state = {
    skills: [],
    query: '',
    profiles: [],
    filteredProfiles: []
  }

  componentDidMount() {
    this.fetchSkills()
  }

  fetchSkills = () => {
    fetch('http://localhost:3000/skills')
    .then(response => response.json())
    .then(json => this.setState({skills: json}))
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
    let skills = this.state.skills
    let skill = []
    let filtered = []
    if (this.props.filter === "name") {
      filtered = profiles.filter(profile => profile.first_name.toLowerCase().includes(query))
    } else if (this.props.filter === "skill") {
        skill = skills.filter(skill => skill.name.toLowerCase().includes(query))
        filtered = skill[0].profiles
    } else if (this.props.filter === "location") {
        filtered = profiles.filter(profile => profile.current_location.toLowerCase().includes(query))
    }
    this.setState({filteredProfiles: filtered})
  }

  onClick = (event) => {
    event.preventDefault()
    let profileId = event.target.className
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
          <Menu.Menu>
            {this.state.filteredProfiles.map(profile =>
              <SearchResults profile={profile} />
            )}
          </Menu.Menu>
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
