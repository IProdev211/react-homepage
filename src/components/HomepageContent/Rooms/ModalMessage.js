import React, { Component } from 'react';

import { Button,Icon, Modal, Form, Label, Header } from 'semantic-ui-react';


class ModalMessage extends Component {


  render() {

    const header = this.props.header;
    const content = this.props.content;


    return (
      <Modal
        //trigger={<Button>Basic Modal</Button>}
        open={this.props.modalOpen}
        onClose={this.props.closeHandler}
        basic size='small'
      >
        <Header icon='archive' >
          {header}
        </Header>
        <Modal.Content>
          <p>
            {content}
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic color='red' inverted onClick={this.props.closeHandler}>
            <Icon name='remove' /> No
          </Button>
          <Button color='green' inverted onClick={this.props.okHandler}>
            <Icon name='checkmark' /> Yes
          </Button>
        </Modal.Actions>
      </Modal>
    );
  }
}

export default ModalMessage;