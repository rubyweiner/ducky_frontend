import React, { Component } from 'react';
import {Segment, Feed, Menu, Label, Image } from 'semantic-ui-react'


class SearchResults extends Component {
  render() {


		return (
      <Menu.Menu>
        {this.props.profiles.map(profile =>
          <Menu.Item link>
            <Image src={profile.profile_pic} avatar/> {profile.first_name} {profile.last_name}
          </Menu.Item>
        )}
      </Menu.Menu>
		)
	}
}

export default SearchResults
