import React from 'react'
import { Button } from 'semantic-ui-react'

const SignInButton = props => {
  return (
    <Button basic fluid onClick={() => props.onClick()}>
      Sign In
    </Button>
  )
}

export default SignInButton
