import React from "react";


import {Header, Image, Segment, Grid} from "semantic-ui-react";


const HomeContent2 = () => (
  <Segment style={{ padding: '0em' }} vertical>
    <Grid celled='internally' columns='equal' stackable>
      <Grid.Row textAlign='center'>
        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Header as='h3' style={{ fontSize: '2em' }}>
            "What a Company"
          </Header>
          <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
        </Grid.Column>
        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Header as='h3' style={{ fontSize: '2em' }}>
            "I shouldn't have gone with their competitor."
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            <Image avatar src='/img/nan.jpg' />
            <b>Nan</b> Chief Fun Officer Acme Toys
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default HomeContent2;