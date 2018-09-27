import React, { Component } from 'react';
import {Segment, Feed, Menu, Label, Image } from 'semantic-ui-react'


class SearchResults extends Component {
  render() {


		return (
    <Segment>
      <Menu secondary vertical>
        {this.props.profiles.map(profile =>
          <Menu.Item link>
          <Image src={profile.profile_pic} avatar/> {profile.first_name} {profile.last_name}
          </Menu.Item>
        )}
      </Menu>
    </Segment>


		)
	}
}

export default SearchResults

// <Feed.Event>
//   <Feed.Summary><Image src={profile.profile_pic} avatar/>{profile.first_name} {profile.last_name}</Feed.Summary>
// </Feed.Event>
//   //
  // <Menu.Item link >{profile.first_name} {profile.last_name}</Menu.Item>


// <Menu secondary vertical>
//     <Menu.Item
//       name='account'
//       active={activeItem === 'account'}
//       onClick={this.handleItemClick}
//     />
