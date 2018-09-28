import React, { Component } from 'react';
import { connect } from 'react-redux'
import { List } from 'semantic-ui-react'

class Followships extends Component {


  render() {

    return (

      <List.Item>
        <p>
        <a href>{this.props.follower.email}</a>
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
