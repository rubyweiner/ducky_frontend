import React from 'react'
import { Card } from 'semantic-ui-react'

const Bio = props => {
  return (
    <Card padded>
      <h3>{props.bio}</h3>
    </Card>
  )
}

export default Bio
