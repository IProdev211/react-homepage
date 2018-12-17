import React, { Component } from 'react';

import {Button, Icon, Modal, Form} from 'semantic-ui-react';


class ModalNewRoom extends Component {

  constructor(props) {
    super(props);

    this.state = {
      roomName: ''
    };

    this.inputChangeHandler = this.inputChangeHandler.bind(this);
    this.closeAndReset = this.closeAndReset.bind(this);
    this.actionAndReset = this.actionAndReset.bind(this);

  }

  inputChangeHandler(evt, {name, value}) {
    this.setState({[name]: value});
  }

  closeAndReset() {
    this.setState({roomName: ''});
    this.props.closeHandler();
  }

  actionAndReset() {
    this.props.actionHandler(this.state.roomName);
    this.setState({roomName: ''});
  }

  render() {
    return (
      <Modal
        open={this.props.modalOpen}
        onClose={this.closeAndReset}
        size='small'
      >
        <Modal.Header>Create Room</Modal.Header>
        <Modal.Content>
          <Form >
            <Form.Field>
              <label>Name</label>
              <Form.Group widths="equal">
                <Form.Input
                  focus
                  name='roomName'
                  placeholder='Enter a room name'
                  value={this.state.roomName}
                  onChange={this.inputChangeHandler}
                />
              </Form.Group>
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button onClick={this.closeAndReset}>
            <Icon name='cancel' /> Cancel
          </Button>
          <Button color='green' inverted onClick={this.actionAndReset}>
            <Icon name='checkmark' /> Create new room
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }

}
export default ModalNewRoom;