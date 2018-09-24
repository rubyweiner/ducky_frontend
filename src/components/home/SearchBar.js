import React, {Component} from 'react'
import { Form, Button } from 'semantic-ui-react'

class SearchBar extends Component {
  state = {
    query: '',
    users: []
  }

  handleInputChange = () => {
    this.setState(
      {query: this.search.value}
    )
  }

  fetchUsers = () => {
    fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(json => {
      debugger
      this.setState(
        {users: json}
      )
    })
  }


  render() {
    return (
      <Form onSubmit={this.fetchUsers}>
        <Form.Field >
          <input
            placeholder="Search for..."
            ref={input => this.search = input}
            onChange={this.handleInputChange}
          />
        </Form.Field>
         <p>{this.state.query}</p>
        <Button type='submit'>Search</Button>
      </Form>
    )
  }

}

export default SearchBar
