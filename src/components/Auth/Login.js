import React, {Component} from 'react';
import { Button, Modal } from 'react-bootstrap';


class LoginComponent extends Component {
  constructor(props){
    super(props)
    this.state ={
      showModal : false
    }
    this.loginAlert = "hello santosh";
    this.open = false;
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal (text) {
   console.log(text)
    this.setState({ showModal: !this.state.showModal}) ;
  }
  render() {
    return (
        <div>
          <p>Click to get the full Modal experience!</p>

          <Button
            bsStyle="primary"
            bsSize="large"
            onClick={this.toggleModal}
          >
            Launch demo modal
        </Button>

          <Modal show={this.state.showModal}>
            <Modal.Header>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>Text in a modal</h4>
              <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>

              <h4>Popover in a modal</h4>


              <hr />

            </Modal.Body>
            <Modal.Footer>
            <Button onClick={this.toggleModal}>Close</Button>
            </Modal.Footer>
          </Modal>
      </div>
    )
  }
} 

export default LoginComponent; 