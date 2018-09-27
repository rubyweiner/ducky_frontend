import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'

class AddFriendButton extends Component {

  onClick = () => {
    debugger
  }
  render() {
    return (
      <Button basic onClick={this.onClick}>
        Add Friend
      </Button>

    )
  }

}

const mapStateToProps = state => {
  return { user: state.user, profile: state.profile }
}

export default connect(mapStateToProps)(AddFriendButton)
