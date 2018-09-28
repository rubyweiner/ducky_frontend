import React from 'react'
import { connect } from 'react-redux'
import { Input, Button } from 'semantic-ui-react'

const postInput = props => {
  return (
    <Input fluid type='text' placeholder='Say something...' >
      <input />
      <Button type='submit' onClick={(event) => props.onClick(event)}>Post</Button>
    </Input>
  )
}

const mapStateToProps = state => {
  return { user: state.user, profile: state.profile }
}

export default connect(mapStateToProps)(postInput)
