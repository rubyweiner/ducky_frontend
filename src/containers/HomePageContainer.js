import React, { Component } from 'react';
import { Grid, Segment, Divider, Feed, Header, Tab, List, Modal, Button, Icon, Card, Image } from 'semantic-ui-react'
import { connect } from 'react-redux'
import Map from '../components/home/Map'
import PostInput from '../components/profile/PostInput'
import PostFeed from '../components/home/PostFeed'
import SearchInput from '../components/home/SearchInput'


const panes = [
  { menuItem: 'Name', render: () => <SearchInput filter="name" /> },
  { menuItem: 'Skill', render: () => <SearchInput filter="skill" /> },
  { menuItem: 'Location', render: () => <SearchInput filter="location" /> },
]

class HomePageContainer extends Component {
  state = {
    allPosts: [],
    user: {},
    profile: {},
    menuItem: ''
  }

  componentDidMount() {
    this.fetchAllPosts()
  }

  fetchAllPosts = () => {
    fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(json => {
      this.setState({allPosts: json})
    })

  }

  createPost = (event) => {
    event.preventDefault()
    let content = event.currentTarget.parentElement.querySelector(".ui input").value
    // this.setState(user: this.props.user)
    event.currentTarget.parentElement.querySelector('input').value = ""

    fetch ('http://localhost:3000/posts', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(
        {
          content: content,
          user_id: this.props.user.id
        }
      )
    })
    .then(response => response.json())
    .then(this.fetchAllPosts)
  }


  render() {
		return (
    <Segment >
        <Divider/>

        <Grid columns="equal">
          <Grid.Column width={5}>
            <h3>Search Coders By...</h3>
            <Tab menu={{ text: true }} panes={panes} />
          </Grid.Column>
          <Grid.Column width={6}>
            <PostInput onClick={this.createPost}/>
            <Segment>
              <Feed>
                {this.state.allPosts[0] ?
                  this.state.allPosts.reverse().map(post =>
                    <PostFeed post={post} />
                  )
                :
                  <p>No Posts to Share</p>
                }

              </Feed>
            </Segment>
          </Grid.Column>
          <Grid.Column width={5}>
            <Segment>
              <h3>Events</h3>
              <Divider />
              <List>
                {this.props.user.events.map(event =>
                  <Modal trigger={<List.Item as="a">{event.name}</List.Item>} basic size='small' >
                     <Modal.Content>
                       <Card fluid raised>
                         <div className="eventImage">
                           <Image src={event.cover_photo}/>
                         </div>
                        <Card.Content>
                         <Card.Header>{event.name}</Card.Header>
                         <Card.Meta>
                           <span className='date'>Hosted By: </span>
                         </Card.Meta>
                         <Divider />
                         <Card.Description><h5>Date: </h5>{event.date}</Card.Description>
                         <Card.Description><h5>Time: </h5>{event.time}</Card.Description>
                         <Card.Description><h5>Location: </h5>{event.location}</Card.Description>
                         <Card.Description><h5>Description: </h5>{event.description}</Card.Description>
                       </Card.Content>
                       </Card>
                     </Modal.Content>
                   </Modal>
                )}
              </List>
            </Segment>
            <Segment>
              SPOTIFY PLAYLIST ?
            </Segment>
          </Grid.Column>

        </Grid>

    </Segment>
		)
	}
}

const mapStateToProps = state => {
  return {
    user: state.user
   }
}


export default connect(mapStateToProps)(HomePageContainer)
