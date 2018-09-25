import React from 'react'
import { Card, List } from 'semantic-ui-react'
import { connect } from 'react-redux'

const ContactInfo = props => {
  return (
    <List >
      <List.Item icon='mail' content={<a href>{props.user.email}</a>}/>
      {props.profile.github ?
        <List.Item>GitHub: <a href={props.profile.github}> {props.profile.github}</a></List.Item>
      :
        null
      }

      {props.profile.blog ?
        <List.Item>Blog: <a href={props.profile.blog}> {props.profile.blog}</a></List.Item>
      :
        null
      }

    </List>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user,
    profile: state.profile
  }
}


export default connect(mapStateToProps)(ContactInfo)
