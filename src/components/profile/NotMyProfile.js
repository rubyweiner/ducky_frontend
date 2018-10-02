import React, { Component } from 'react';
import { connect } from 'react-redux'
import { setOtherUser, setOtherProfile, setOtherSkills, setOtherFollowers, setOtherPosts} from '../../actions/actions.js'
import { Image, Grid, Segment, Divider, Header, List, Feed } from 'semantic-ui-react'
import Bio from './Bio'
import PersonalInfo from './PersonalInfo'
import ContactInfo from './ContactInfo'
import Skill from './Skill'
import Meetups from './Meetups'
import AddFriendButton from './AddFriendButton'
import Followships from './Followships'
import PostInput from './PostInput'
import PostFeed from './PostFeed'


class NotMyProfile extends Component {
  state = {
    following: false
  }

  render() {

		return (

      <Segment>
        <div className="parent">
          <div className="coverphoto">
              <Image id="coverphoto" src={this.props.notMyProfile.cover_photo} />
          </div>
          <div className="profilepic">
            <Image id="profilepic" src={this.props.notMyProfile.profile_pic} />
          </div>
        </div>

        <Divider />

        <Header as="h2">{this.props.notMyProfile.first_name} {this.props.notMyProfile.last_name}</Header>

        <Bio bio={this.props.notMyProfile.bio} />

        <Divider />

        <Grid columns="equal">
          <Grid.Column width={5}>
            <Segment>
              <h4>Personal Info</h4>
              <Divider />
              <PersonalInfo
                current_location={this.props.notMyProfile.current_location}
                hometown={this.props.notMyProfile.hometown}
                education={this.props.notMyProfile.education}
                company={this.props.notMyProfile.company}
                dob={this.props.notMyProfile.dob}
                />
            </Segment>

            <Segment>
              <h4>Contact Info</h4>
              <Divider />
              <ContactInfo
                email={this.props.notMyUser.email}
                github={this.props.notMyProfile.github}
                blog={this.props.notMyProfile.blog}
              />
            </Segment>

            <Segment>
              <h4>Skills</h4>
              <Divider />
                {this.props.notMySkills ?
                  <List>
                    {this.props.notMySkills.map(skill =>
                      <Skill skill={skill} />
                    )}
                  </List>
                :
                  null
                }
            </Segment>
          </Grid.Column>
          <Grid.Column width={6}>
            <Segment>
              <Feed>
                {this.props.notMyPosts[0] ?
                  this.props.notMyPosts.reverse().map(post =>
                    <PostFeed
                      post={post}
                      first_name={this.props.notMyProfile.first_name}
                      last_name={this.props.notMyProfile.last_name}
                      profile_pic={this.props.notMyProfile.profile_pic}
                    />
                  )
                :
                  <p>No Posts to Share</p>

                }

              </Feed>
          </Segment>

          </Grid.Column>
          <Grid.Column width={5}>
              <AddFriendButton following={this.state.following}/>
            <Segment>
              <h4>Followers</h4>
              <Divider />
              <List>
                {this.props.notMyFollowers ?
                  this.props.notMyFollowers.map(follower =>
                    <Followships follower={follower}/>
                  )
                :
                  null
                }
              </List>
            </Segment>

            <Segment>
              SPOTIFY PLAYLIST?
            </Segment>

          </Grid.Column>
        </Grid>
      </Segment>
		)
	}
}

const mapStateToProps = state => {
  return {
    notMyUser: state.notMyUser,
    notMyProfile: state.notMyProfile,
    notMySkills: state.notMySkills,
    notMyFollowers: state.notMyFollowers,
    notMyPosts: state.notMyPosts
   }
}

const mapDispatchToProps = dispatch => {
  return {
    setOtherUser: notMyUser => dispatch(setOtherUser(notMyUser)),
    setOtherProfile: notMyProfile => dispatch(setOtherProfile(notMyProfile)),
    setOtherSkills: notMySkills => dispatch(setOtherSkills(notMySkills)),
    setOtherFollowers: notMyFollowers => dispatch(setOtherFollowers(notMyFollowers)),
    setOtherPosts: notMyPosts => dispatch(setOtherPosts(notMyPosts))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotMyProfile)

// <Segment>
//   <h4>Followers</h4>
//   <Divider />
// </Segment>
