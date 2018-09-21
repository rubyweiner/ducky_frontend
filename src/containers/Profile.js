import React, { Component } from 'react';
import { Container, Image, Grid, Segment } from 'semantic-ui-react'
import Bio from '../components/profile/Bio'

const coverphoto = "https://payload495.cargocollective.com/1/2/68904/12201373/terrarium_hoeckel-1_640.jpg"
const profilePic = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Rubber_Duck_%288374802487%29.jpg/220px-Rubber_Duck_%288374802487%29.jpg"
class Profile extends Component {

  render() {
		return (
      <div className="coverphoto">
        <Segment >
          <Image id="coverphoto" src={coverphoto} />
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
