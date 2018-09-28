import React from 'react'
import { connect } from 'react-redux'
// import { Header, Icon } from 'semantic-ui-react'

const Bio = props => {
  return (

      <p> {props.bio} </p>

  )
}

const mapStateToProps = state => {
  return { user: state.user, profile: state.profile }
}

export default connect(mapStateToProps)(Bio)
