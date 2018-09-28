import React, { Component } from 'react';
import { Grid, Segment, Divider, Feed } from 'semantic-ui-react'
import Map from '../components/home/Map'
import PostInput from '../components/profile/PostInput'
import PostFeed from '../components/home/PostFeed'

class HomePageContainer extends Component {
  state = {
    allPosts: [],
    user: {},
    profile: {}
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

  fetchUser = (post) => {

    fetch (`http://localhost:3000/users/${post.user.id}`)
    .then(response => response.json())
    .then(json => {
      console.log(json)
      this.setState({
        user: json,
        profile: json.profile
      })
    })
  }

  render() {
		return (
    <Segment>
        <Divider/>

        <Grid columns="equal">
          <Grid.Column width={5}>
            <Segment>
              {Date.now()}
            </Segment>
            <Segment>
            </Segment>
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
            <Map />
          </Grid.Column>

        </Grid>

    </Segment>
		)
	}
}

export default HomePageContainer

// first_name={this.props.profile.first_name}
// last_name={this.props.profile.last_name}
// profile_pic={this.props.profile.profile_pic}
