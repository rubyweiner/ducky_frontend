import React, { Component } from 'react';
import { Menu, Container, Header, Card } from 'semantic-ui-react'
import SearchBar from '../components/home/SearchBar'
import Map from '../components/home/Map'


class HomePageContainer extends Component {


  

  render() {
		return (
      <Card padded>
        <Header as="h2">Search:</Header>
        <SearchBar onSubmit={this.onSearch}/>
      </Card>

		)
	}
}

export default HomePageContainer
