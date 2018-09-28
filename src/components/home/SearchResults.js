import React, { Component } from 'react';
import { Menu, Image } from 'semantic-ui-react'


class SearchResults extends Component {
  render() {


		return (
      <Menu.Menu>
        {this.props.profiles.map(profile =>
          <Menu.Item link onClick={(event) => this.props.onClick(event)}>
            <div className={profile.id}>
              <Image src={profile.profile_pic} avatar/> {profile.first_name} {profile.last_name}
            </div>
          </Menu.Item>
        )}
      </Menu.Menu>
		)
	}
}

export default SearchResults
