import React from 'react'
import { Card, List } from 'semantic-ui-react'
import { connect } from 'react-redux'

const PersonalInfo = props => {
  return (
    <List >
      <List.Item>Based in <a href>{props.profile.current_location}</a></List.Item>
      <List.Item>From <a href>{props.profile.hometown}</a></List.Item>
      <List.Item>Studied at {props.profile.education}</List.Item>
      {props.profile.company ?
        <List.Item icon='brief case' content={props.profile.company}/>
      :
        null
      }
      <List.Item icon='birthday cake' content={props.profile.dob}/>


    </List>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    profile: state.profile
  }
}


export default connect(mapStateToProps)(PersonalInfo)
