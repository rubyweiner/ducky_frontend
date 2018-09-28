import React, { Component } from 'react';
import { connect } from 'react-redux'
import { List } from 'semantic-ui-react'

class Followships extends Component {

  state = {
    follower: {},
    first_name: '',
    last_name: ''
  }

  componentDidMount() {
    this.setFollowerName()
  }

  setFollowerName = () => {
    fetch(`http://localhost:3000/users/${this.props.follower.id}`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        follower: json,
        first_name: json.profile.first_name,
        last_name: json.profile.last_name
      })
    })
  }

  render() {
    
    return (
      <List.Item>
        <p>
        <a href>{this.state.first_name} {this.state.last_name}</a>
        </p>
      </List.Item>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    notMyUser: state.notMyUser
  }
}


export default connect(mapStateToProps)(Followships)
//
// <Grid.Row>
//  {this.props.followships.map(followship =>
//    <Grid.Column>
//      {followship.user_id}
//    </Grid.Column>
//  )}
// </Grid.Row>
