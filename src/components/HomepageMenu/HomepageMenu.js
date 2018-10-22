import {Button, Container, Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";
import React from "react";


const HomepageMenu = ({fixed, desktop}) => (
  <Container>
    <Menu.Item as={Link} to="/" active>Home</Menu.Item>
    <Menu.Item as={Link} to="/public">Public</Menu.Item>

    <Menu.Item as='a'>Company</Menu.Item>
    <Menu.Item as='a'>Careers</Menu.Item>

    {desktop ? (
      <Menu.Item position='right'>
        <Button as='a' inverted={!fixed}>
          Log in
        </Button>
        <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
          Sign Up
        </Button>
      </Menu.Item>
    ) : (
      <div>
        <Menu.Item as='a'>Log in</Menu.Item>
        <Menu.Item as='a'>Sign up</Menu.Item>
      </div>
    )}

  </Container>
);

export default HomepageMenu;