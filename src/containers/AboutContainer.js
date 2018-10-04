import React, { Component } from 'react';
import { Grid, Segment, Divider, Feed, Header, Tab, List, Modal, Button, Icon, Card, Image, Container } from 'semantic-ui-react'
import { connect } from 'react-redux'





class AboutContainer extends Component {


  render() {
		return (
      <Segment>
      <Grid columns="equal">
        <Grid.Column width={6}>
          <Image fluid src="https://images.unsplash.com/photo-1531875506263-dfcc69e73475?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4f8f5baa5c9e3301d280c6c9ddeb8aa1&auto=format&fit=crop&w=750&q=80"/>
        </Grid.Column>
        <Grid.Column width={9}>
          <Container fluid>
            <Header as="h1">Ducky</Header>
            <Header as="h4">A Social Media Platform By Coders for Coders</Header>
            <Divider />
            <p>
              "Rubber Duck Decoding" is a method of debugging code. It suggests that coders keep
              a rubber duck present while debugging to which they must explain their code line by line.
              Through the process of explaining the code in detail to an inanimate object, solutions are realized and deeper
              understanding of the problem is achieved.
            </p>
            <p>
              Find your virtual Ducky.
            </p>
            <p>
              The concept behind Ducky is inspired by "Rubber Duck Decoding." It provides a forum for
              coders of all backgrounds and levels of experience to connect, and perhaps, decode together.
              Ducky is not oriented on job-networking. It is a place for every kind of coder: students,
              freelance workers, job-seekers, and those currently employed as developers full-time. Here,
              you can connect with like-minded people and work through problems on all kinds of projects, personal
              or professional.
            </p>
            <p>
              Search coders by skill, name, education, and location. Ducky allows its users search others and follow them
              with no restriction. Utilize Duckys newsfeed of every coder in the platform to stay updated on the goings-on
              of the coding community. Create a profile that reflects your unique style and personality. Create events and
              to meet up with your virtual duckies in person, or online.
            </p>
            <p>
              Coming soon are features particularly geared towards sharing code, such as Inbox and MySnippets.
            </p>
          </Container>
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


export default connect(mapStateToProps)(AboutContainer)

// <Grid columns="equal">
//   <Grid.Column width={5}>
//
//   </Grid.Column>
//   <Grid.Column width={6}>
//
//     <Segment>
//     about
//     </Segment>
//   </Grid.Column>
//   <Grid.Column width={5}>
//     <Segment>
//
//     </Segment>
//
//   </Grid.Column>
//
// </Grid>
