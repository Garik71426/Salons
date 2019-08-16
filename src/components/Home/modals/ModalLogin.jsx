import React, { Component }  from 'react';
import {Modal, ModalHeader, ModalBody,ModalFooter, Form, FormGroup, Label, Input, Button} from 'reactstrap';
import PropTypes from 'prop-types';

import Messages from './../../../Messages';
import Validator from './../../../stores/validator';

import './../../../../assets/stylesheets/header.css';

import {observer} from "mobx-react";
import {observable} from "mobx";

@observer
class ModalLogin extends Component {
  static contextTypes = {
  AppStore : PropTypes.shape({
    _Data : PropTypes.array,
    InfoLogIn : PropTypes.func,
    LogInTest : PropTypes.func,
    Login : PropTypes.object,
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
      const {_Data,Login, LoginTest, InfoLogin} = this.context.AppStore;
    return(
      <div>
          <Button className="ml-auto mod_btn" outline color="link" onClick={this.toggle}>{this.props.buttonLabel}{Messages.header.signIn.signIn}</Button>
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
              <ModalHeader toggle={this.toggle}>{Messages.header.signIn.signInTitle}</ModalHeader>
              <ModalBody>
                  <Form>
                      <FormGroup>
                          <Label for="exampleEmail">{Messages.header.signIn.signInEmail}</Label>
                          <Input type="email" onChange={InfoLogin} name="Էլ. փոստ" id="exampleEmail" placeholder={Messages.header.signIn.signInEmailPlaceholder} />
                          {/*<p className="has-error">{this.Validator.informationModalLogin.fieldName === 'emailLogin' && this.Validator.validateModalLogin}</p>*/}
                      </FormGroup>
                      <FormGroup>
                          <Label for="examplePassword">{Messages.header.signIn.signInPassword}</Label>
                          <Input type="password" onChange={InfoLogin} name="Գաղտնաբառ" id="examplePassword" placeholder={Messages.header.signIn.signInPasswordPlaceholder} />
                          {/*<p className="has-error">{this.Validator.informationModalLogin.fieldName === 'passwordLogin' && this.Validator.validateModalLogin}</p>*/}
                      </FormGroup>
                  </Form>
              </ModalBody>
              <ModalFooter onClick={this.toggle}>
                  <Button onClick={LoginTest} className="modal_button">{Messages.header.signIn.signInButton}</Button>
              </ModalFooter>


          </Modal>
      </div>
    );
  }
}
export default ModalLogin;
