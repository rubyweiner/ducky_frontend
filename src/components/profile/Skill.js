import React from 'react'
import { List, Icon } from 'semantic-ui-react'

const Skill = props => {
  return (
    <List.Item>
      <p>
      <a href>{props.skill.name}</a>
      {props.editSkillsMode ?
        <Icon name="trash bin" size="small" onClick={(event) => props.onClick(event)}/>
      :
        null
      }
      </p>


    </List.Item>
  )
}

export default Skill
