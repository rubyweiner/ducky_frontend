import React, { Component } from 'react';
import {Segment, Header, Grid } from 'semantic-ui-react'
import SearchBar from '../components/home/SearchBar'
import Map from '../components/home/Map'
import SearchResults from '../components/home/SearchResults'


class HomePageContainer extends Component {




  render() {
		return (
      <Grid columns="equal">
        <Grid.Column width={5}>
          <Segment>
            <Header as="h2">Search:</Header>
            <SearchBar onSubmit={this.onSearch}/>
          </Segment>
          <Segment>
            <SearchResults />
          </Segment>
        </Grid.Column>
        <Grid.Column width={5}>
          <Map />
        </Grid.Column>
      </Grid>

		)
	}
}

export default HomePageContainer
