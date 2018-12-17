import React, { Component } from 'react';

import {Button, Icon, Modal, Header, Label} from 'semantic-ui-react';


class ModalMessage extends Component {


  render() {

    const header = this.props.header;
    const content = this.props.content;
    const icon = (this.props.icon !== '') ? <Icon name={this.props.icon}/> : '';
    const label = (this.props.label !== '') ? <code>'{this.props.label}'</code> : '';

    return (
      <Modal
        open={this.props.modalOpen}
        onClose={this.props.closeHandler}
        basic size='small'
      >
        <Modal.Header>{icon} {header}</Modal.Header>
        <Modal.Content>
          <p>
            {content} {label}?
          </p>
        </Modal.Content>
        <Modal.Actions>
          <Button basic inverted onClick={this.props.closeHandler}>
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