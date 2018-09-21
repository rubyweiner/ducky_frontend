import React, { Component } from 'react';
import { Container, Image, Grid, Segment, Divider } from 'semantic-ui-react'
import Bio from '../components/profile/Bio'
import Skills from '../components/profile/Skills'
import Meetups from '../components/profile/Meetups'

const coverphoto = "https://payload495.cargocollective.com/1/2/68904/12201373/terrarium_hoeckel-1_640.jpg"
const profilePic = "https://pbs.twimg.com/profile_images/378800000529980137/5c27bdc4efce5e0777d93965157b2078_400x400.jpeg"

class Profile extends Component {

  render() {
		return (
    <div className="profilcontainer">
    <Segment>
      <div className="parent">
        <div className="coverphoto">
            <Image id="coverphoto" src={coverphoto} />
        </div>
        <div className="profilepic">
          <Image id="profilepic" src={profilePic} />
        </div>
      </div>

      <Divider />

      <Bio />
      <Skills />
      <Meetups />

    </Segment>
    </div>

		)
	}
}

export default Profile


// <Grid celled>
//   <Grid.Row>
//     <Grid.Column width={3}>
//       <Image src='/images/wireframe/image.png' />
//     </Grid.Column>
//     <Grid.Column width={10}>
//       <Image src='/images/wireframe/paragraph.png' />
//     </Grid.Column>
//     <Grid.Column width={3}>
//       <Image src='/images/wireframe/image.png' />
//     </Grid.Column>
//   </Grid.Row>
// </Grid>
