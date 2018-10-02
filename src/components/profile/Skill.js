import React from 'react'
import { List, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Skill = props => {
  return (

  <Link
    to={`/skills`}
  >
    <List.Item>
      <p>
      <div className={props.skill.id}>
      <a href>{props.skill.name}</a>
      {props.editSkillsMode ?
          <Icon name="trash bin" size="small" onClick={(event) => props.onClick(event)}/>
      :
        null
      }
      </div>
      </p>
    </List.Item>
  </Link>

  )
}

export default Skill
