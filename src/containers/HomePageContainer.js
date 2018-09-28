import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'
import Map from '../components/home/Map'

class HomePageContainer extends Component {

  render() {
		return (
    <div className="background">

        <Grid columns="equal">
          <Grid.Column>
            <Map />
          </Grid.Column>

        </Grid>

    </div>
		)
	}
}

export default HomePageContainer
