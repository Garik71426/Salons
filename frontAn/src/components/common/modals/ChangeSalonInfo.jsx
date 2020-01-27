import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import Messages from './../../../Messages';


@observer
class ChangeSalonInfo extends Component {
    static contextTypes = {
        AppStore: PropTypes.shape({
            salon:PropTypes.object
        }).isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle(event) {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        const { salon } = this.context.AppStore;
        // const { name, about, address, phone } = this.state;
        
        return (
            <div>
                <Button outline color="info" onClick={this.toggle}>{Messages.settings.settingsName}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{Messages.settings.settingsName}</ModalHeader>
                    <ModalBody>
                        <Form >
                            <FormGroup>
                                <Label for="exampleFile">{Messages.settings.insertImg}</Label>
                                <Input className="name" width="100px" type="file" name="file" id="exampleFile" />
                                <img id="target" width="250px" height="250px" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleName">{Messages.settings.name}</Label>
                                <Input type="text" name="name" id="exampleName" value = {salon.name} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleInfo">{Messages.settings.ourSet}</Label>
                                <Input type="textarea" name="info" id="exampleInfo" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleAddress">{Messages.settings.adress}</Label>
                                <Input type="text" name="address" id="exampleAddress" min="5" max="30" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePhone">{Messages.settings.phone}</Label>
                                <Input type="text" name="phone" id="examplePhone" />
                            </FormGroup>
                            <FormGroup>
                                <select >
                                    <option></option>
                                </select>
                                <Label for="exampleCategory">{Messages.settings.category}</Label>
                                <Input type="text" name="category" id="exampleCategory" />
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter onClick={this.toggle}>
                        <Button color="info" >{Messages.settings.saveChange}</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ChangeSalonInfo;