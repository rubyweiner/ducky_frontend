import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'

class AddFriendButton extends Component {

  createFollowship= () => {
    fetch(`http://localhost:3000/followships`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        user_id: this.props.notMyUser.id,
        follower_id: this.props.user.id

      })
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      debugger
    })

  }

  render() {
    return (
      <Button basic onClick={this.createFollowship}>
        Follow
      </Button>

    )
  }

}

const mapStateToProps = state => {
  return {
    user: state.user,
    notMyUser: state.notMyUser
   }
}

export default connect(mapStateToProps)(AddFriendButton)
