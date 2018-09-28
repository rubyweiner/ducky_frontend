import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addFollowing } from '../../actions/actions.js'
import { Button } from 'semantic-ui-react'

class AddFriendButton extends Component {
  state = {
    following: this.props.following
  }

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
      this.setState({following: true})
      debugger
      this.props.addFollowing(json.user_id)
      // debugger
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

const mapDispatchToProps = dispatch => {
  return {
    addFollowing: following => dispatch(addFollowing(following))
  }
}

export default connect(mapStateToProps)(AddFriendButton)
