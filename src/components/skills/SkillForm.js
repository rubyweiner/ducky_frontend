import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Form, Select} from 'semantic-ui-react'

const options = [
  { key: 'ruby', text: 'Ruby', value: '1' },
  { key: 'rails', text: 'Rails', value: '2' },
  { key: 'javascript', text: 'JavaScript', value: '3' },
  { key: 'reac', text: 'React', value: '4' },
  { key: 'redux', text: 'Redux', value: '5' }
]

class SkillForm extends Component {

  state = {
    skillId: null
  }

  render() {
    return (
      <Form size="tiny" onSubmit={(event, skillId) => {this.props.onSubmit(event, this.state.skillId)}}>
        <Form.Field
          onChange={(e, data) => {
            this.setState({skillId: data.value})
          }}
          control={Select}
          label='Skill'
          options={options}
          placeholder='Skill' />
        <Button basic type='submit'>Add Skill</Button>
      </Form>

    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user,
    profile: state.profile,
    skills: state.skills
  }
}


export default connect(mapStateToProps)(SkillForm)
