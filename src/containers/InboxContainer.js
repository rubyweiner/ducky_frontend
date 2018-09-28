import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'


class InboxContainer extends Component {


  render() {
		return (
    <Segment>
        INBOX
    </Segment>
		)
	}
}

const mapStateToProps = state => {
  return {
    user: state.user
   }
}


export default connect(mapStateToProps)(InboxContainer)
