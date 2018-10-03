import React, { Component } from 'react';
import { Card, Image, Button, Divider, Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'

class Invited extends Component {

  state = {
    profile: null
  }

  componentDidMount() {
    this.fetchUser(this.props.invitee.id)
  }

  fetchUser = (userId) => {
    fetch(`http://localhost:3000/users/${userId}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        profile: json.profile
      })
    })
  }

  render() {
    return (
      <Menu.Item link onClick={() => this.props.profileView(this.state.profile)}>
        {this.state.profile ?
          <Link
            to={`/profile/${this.state.profile.first_name}_${this.state.profile.last_name}`}
          >
            <div className={this.state.profile.id}>
              <Image src={this.state.profile.profile_pic} avatar/> {this.state.profile.first_name} {this.state.profile.last_name}
            </div>
          </Link>
        :
          null
        }

      </Menu.Item>
    )
  }

}

// const mapStateToProps = state => {
//   return {
//     user: state.user,
//     profile: state.profile
//   }
// }
//

export default Invited
