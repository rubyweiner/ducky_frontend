import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addFollowing } from '../../actions/actions.js'
import { Button } from 'semantic-ui-react'

class UnfollowButton extends Component {

  deleteFollowship = () => {
    fetch(`http://localhost:3000/followships/${this.props.currentFollowship.id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.props.removeFollowing()
    })
  }

  render() {
    return (
        <Button basic fluid onClick={this.deleteFollowship}>
          Un-Follow
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

export default connect(mapStateToProps)(UnfollowButton)
