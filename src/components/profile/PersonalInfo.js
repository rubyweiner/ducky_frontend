import React from 'react'
import { List } from 'semantic-ui-react'

// import { connect } from 'react-redux'

const PersonalInfo = props => {
  return (
    <List >
      <List.Item>Based in {props.current_location}</List.Item>
      <List.Item>From {props.hometown}</List.Item>
      <List.Item>Studied at {props.education}</List.Item>
      {props.company ?
        <List.Item icon='brief case' content={props.company}/>
      :
        null
      }
      <List.Item icon='birthday cake' content={props.dob}/>
    </List>
  )
}


export default PersonalInfo
