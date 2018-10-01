import React from 'react'
import { List } from 'semantic-ui-react'
import { connect } from 'react-redux'

const ContactInfo = props => {
  return (
    <List >
      <List.Item icon='mail' content={<a href>{props.email}</a>}/>
      {props.github ?
        <List.Item icon='github' content={<a href={props.github}> {props.github}</a>}/>
      :
        null
      }

      {props.blog ?
        <List.Item>Blog: <a href={props.blog}> {props.blog}</a></List.Item>
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
