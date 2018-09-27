import React, { Component } from 'react';
import {Segment, Header, Grid, Search } from 'semantic-ui-react'
import Map from '../components/home/Map'
import SearchResults from '../components/home/SearchResults'


class HomePageContainer extends Component {

  state = {
    query: '',
    profiles: [],
    filteredProfiles: []
  }

  fetchProfiles = (query) => {
    fetch('http://localhost:3000/profiles')
    .then(response => response.json())
    .then(json => this.setState({profiles: json}))
    this.filterProfiles(query)

  }

  filterProfiles = (query) => {
    let profiles = this.state.profiles
    let filtered = profiles.filter(profile => profile.first_name.toLowerCase().includes(query))
    this.setState({filteredProfiles: filtered})
  }

  render() {
		return (
      <Grid columns="equal">
        <Grid.Column width={5}>
          <Segment>
            <div className="ui large icon input">
              <input
                type="text"
                placeholder="Search"
                value={this.state.query}
                onChange={(event) => {
                  this.setState({query: event.currentTarget.value})
                  this.fetchProfiles(event.currentTarget.value.toLowerCase())
                  }
                }
              />
              <i className="search icon" />
            </div>
          </Segment>

          {this.state.query === '' ?
            null
          :
            <SearchResults profiles={this.state.filteredProfiles}/>
          }


        </Grid.Column>
        <Grid.Column width={5}>
          <Map />
        </Grid.Column>
      </Grid>

		)
	}
}

export default HomePageContainer
