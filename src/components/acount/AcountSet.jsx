import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import Messages from './../../Messages'

import AppStor from './../../stores/AppStore.js';
import UserData from './../../data/userData';

import './../../../assets/stylesheets/setting.css';
@observer
class AcountSetting extends Component {

  static contextTypes = {
      AppStore : PropTypes.shape({
          _UserData : PropTypes.array,
          changeUserInfo: PropTypes.func,
          changeUserSubmit: PropTypes.func,
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
    if(event.target.textContent === Messages.AcountUser.acountChangeData){
        const {_UserData, changeUser} = this.context.AppStore;
        const user = _UserData[this.props.userId];
        changeUser.name = user.name;
        changeUser.surname = user.surname;
        changeUser.phone = user.phoneNumber;
    }   
  }

  render() {
    const {changeUserSubmit, changeUserInfo, changeUser} = this.context.AppStore;
    const {userId} = this.props;
    return (
      <div>
        <Button outline color="info" onClick={this.toggle}>{Messages.AcountUser.acountChangeData}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>{Messages.AcountUser.acountChangeData}</ModalHeader>
            <ModalBody>
                <Form >
                    <FormGroup>
                        <Label></Label>
                        <Input type="file" name="file"  accept="image/png, image/jpeg" id="exampleFile" className="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label>{Messages.AcountUser.acountNameSetting}</Label>
                        <Input onChange={changeUserInfo} type="text" name="name" id="exampleEmail" value={changeUser.name}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>{Messages.AcountUser.acountSurnameSetting}</Label>
                        <Input onChange={changeUserInfo} type="text" name="surname" id="exampleEmail" value={changeUser.surname}/>
                    </FormGroup>
                    <FormGroup>
                        <Label>{Messages.AcountUser.acountPhoneNumberSetting}</Label>
                        <Input onChange={changeUserInfo} type="text" name="phone" id="exampleEmail" value={changeUser.phone}/>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter onClick={this.toggle}>
                <Button onClick={changeUserSubmit} color="info" user-id={userId}>{Messages.AcountUser.acountChangeDataSave}</Button>
            </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AcountSetting;
