import React, { Component } from 'react';
import { Menu, Container, Header, Segment } from 'semantic-ui-react'
import SearchBar from '../components/home/SearchBar'
import Map from '../components/home/Map'


class HomePageContainer extends Component {



  render() {
		return (
      <Segment>
        <Header as="h2">Search:</Header>
        <SearchBar />
        <Map />
      </Segment>

		)
	}
}

export default HomePageContainer
