import React from 'react'
import { Item, Menu, Header, Image, Icon, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'

const EventListItem = props => {
  return (
    <Menu.Item link onClick={(event) => props.onClick(event)}>
        <Header as="h4">
          {props.e.name}
          <Header sub>{props.e.date}</Header>
        </Header>
    </Menu.Item>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    profile: state.profile
  }
}


export default connect(mapStateToProps)(EventListItem)
