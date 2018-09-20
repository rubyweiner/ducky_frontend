import React from 'react'
import { Button } from 'semantic-ui-react'

const SignUpButton = props => {
  return (

    <Button basic fluid onClick={() => props.onClick()}>
      Sign Up
    </Button>

  )
}

export default SignUpButton
