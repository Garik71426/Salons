import React, { Component }  from 'react';
import { Modal, ModalHeader, ModalBody,ModalFooter, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import PropTypes from 'prop-types';

import Messages from './../../../Messages';

import './../../../../assets/stylesheets/header.css';

class ModalLogin extends Component {
  static contextTypes = {
  AppStore : PropTypes.shape({

  }).isRequired
  }
    constructor(props) {
          super(props);
          this.toggle = this.toggle.bind(this);
          this.state = {
              modal: false
          };
    }
    toggle() {
        this.setState(prevState => ({
          modal: !prevState.modal
        }));
    }

    
    render(){
    return(
      <div>
          <Button onClick={this.toggle} className="ml-auto mod_btn" outline color="link" >{this.props.buttonLabel}{Messages.header.signIn.signIn}</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle}>
                {this.props.login}
          </Modal>
      </div>
    );
  }
}
export default ModalLogin;
