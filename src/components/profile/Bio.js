import React from 'react'
import { connect } from 'react-redux'
import { Header, Icon } from 'semantic-ui-react'

const Bio = props => {
  return (

      <p> {props.bio}  {<Icon name='pencil' size="small" onClick={() => props.onClick()}/>}</p>

  )
}

const mapStateToProps = state => {
  return { user: state.user, profile: state.profile }
}

export default connect(mapStateToProps)(Bio)
