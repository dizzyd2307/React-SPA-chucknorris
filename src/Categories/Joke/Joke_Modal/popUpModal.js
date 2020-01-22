import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class popUpModal extends Component{
    constructor(){
        super();
        this.state={
            showModal: true
        }
        this.close = this.close.bind(this);
        this.open = this.close.bind(this);
    }
     close(){
         this.setState({ showModal: false });
      }
    
     open(){
        this.setState({ showModal: true });
      }
render(){
    
    return (<>
    <Modal show={this.state.showModal} onHide={this.close}>
      <Modal.Header closeButton>
        <Modal.Title><img alt="chuckky Norris"src={this.props.joke.icon_url}></img>Chuck Norris Jokes...</Modal.Title>
      </Modal.Header>
      <Modal.Body>{this.props.joke.value}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.close}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    </>
    )
}

}

export default popUpModal;