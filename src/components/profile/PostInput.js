import React from 'react'
import { connect } from 'react-redux'
import { Input } from 'semantic-ui-react'

const Bio = props => {
  return (
    <Input fluid action='Post' placeholder='Say something...' />
  )
}

const mapStateToProps = state => {
  return { user: state.user, profile: state.profile }
}

export default connect(mapStateToProps)(Bio)
