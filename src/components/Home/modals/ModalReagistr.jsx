import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import Messages from './../../../Messages';

import './../../../../assets/stylesheets/setting.css';

@observer
class ModalRegister extends Component {
      static contextTypes = {
      AppStore : PropTypes.shape({
        _Data : PropTypes.array,
        InfoRegister : PropTypes.func,
        SaveValues : PropTypes.func,
        Registr : PropTypes.object,
        RegistraciaUser : PropTypes.func,
        RegistraciaSalon : PropTypes.func,
      }).isRequired
  }

  constructor(props) {
      super(props);
      this.state = {
        modal: false
      };

      this.toggle = this.toggle.bind(this);
  }

  toggle(event) {
      this.setState(prevState => ({
        modal: !prevState.modal
      }));
  }
  render() {
  const {_Data,  InfoRegister, SaveValues, Registr, RegistraciaUser, RegistraciaSalon, RegIsUser} = this.context.AppStore;
  return (
    <div>
        <Button className="ml-0 mod_btn" outline color="link" onClick={this.toggle}>{this.props.buttonLabel }{Messages.header.signUp.signUp}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>{Messages.header.signUp.signUpTitle}</ModalHeader>
        <FormGroup>
          <div className="dis_flex">
            <p className="login_Log">{Messages.header.signUp.signUpAs}</p>
            <a className="btn_1" onClick={RegistraciaUser}>{Messages.header.signUp.signUpAsUser}</a>
            <a className="btn_2" onClick={RegistraciaSalon}>{Messages.header.signUp.signUpAsSalon}</a>
          </div>
        </FormGroup>
          {(RegIsUser)?
            <>
                <ModalBody>
                  <Form>
                      <FormGroup>
                          <Label for="examplePassword">{Messages.header.signUp.signUpName}</Label>
                          <Input type="text" onChange={InfoRegister} name="Անուն" id="examplePassword" />

                          <Label for="examplePassword1">{Messages.header.signUp.signUpSurname}</Label>
                          <Input type="text" onChange={InfoRegister} name="Ազգանուն" id="examplePassword1" />

                          <Label for="exampleEmail">{Messages.header.signUp.signUpEmail}</Label>
                          <Input type="email" onChange={InfoRegister} name="Էլ. փոստ" id="exampleEmail" placeholder={Messages.header.signUp.signUpEmailPlaceholder} />

                          <Label for="exampleEmail1">{Messages.header.signUp.signUpNickName}</Label>
                          <Input type="text" onChange={InfoRegister} name="Հեռախոս" id="exampleEmail1"/>
                      </FormGroup>
                      <FormGroup>
                          <Label for="examplePassword2">{Messages.header.signUp.signUpPassword}</Label>
                          <Input type="password" onChange={InfoRegister} name="Գաղտնաբառ" id="examplePassword2" placeholder={Messages.header.signUp.signUpPasswordPlaceholder} />

                          <Label for="examplePassword3">{Messages.header.signUp.signUpRepeatPassword}</Label>
                          <Input type="password" onChange={InfoRegister} name="krknel gaxtnabar@" id="examplePassword3" placeholder={Messages.header.signUp.signUpwordPlaceholder} />
                      </FormGroup>
                  </Form>
              </ModalBody>
              <ModalFooter onClick = {this.toggle}>
                <Button color="info" onClick={SaveValues} className="modal_button">{Messages.settings.saveChange}</Button>
              </ModalFooter>
          </>:
          <>
              <ModalBody>
                <Form>
                    <FormGroup>
                        <select>
                            <option></option>
                            {_Data.map((item,index) =>{
                                return<option key={index}>{item.name}</option>
                            })}
                        </select>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">{Messages.header.signUp.signUpEmail}</Label>
                        <Input type="email" onChange={InfoRegister} id="examplePassword" />

                        <Label for="examplePassword">{Messages.header.signUp.signUpPassword}</Label>
                        <Input type="password" onChange={InfoRegister} id="examplePassword" />

                        <Label for="examplePassword">{Messages.header.signUp.signUpRepeatPassword}</Label>
                        <Input type="password" onChange={InfoRegister} id="examplePassword" />
                    </FormGroup>
                </Form>
              </ModalBody>
              <ModalFooter onClick = {this.toggle}>
                <Button color="info" onClick={SaveValues} className="modal_button">{Messages.settings.saveChange}</Button>
              </ModalFooter>
          </>
      }

        </Modal>
    </div>
  );
  }
}

export default ModalRegister;

//////////////////////////////////
