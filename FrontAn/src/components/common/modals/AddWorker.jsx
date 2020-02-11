import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from "mobx-react";
import { Input, FormGroup, CustomInput, Label, Modal, ModalBody, ModalHeader, ModalFooter, Button, Form } from 'reactstrap';

import Messages from './../../../Messages';


@observer
class AddWorker extends Component {

    static contextTypes = {
        AppStore: PropTypes.shape({
            ui: PropTypes.shape({
                getAllCategories: PropTypes.func,
                allCategories: PropTypes.array,
            }).isRequired,
            salonAdmin: PropTypes.shape({
                addWorker: PropTypes.func,
                changeAddWorkerForm: PropTypes.func,
                addWorkerInfo: PropTypes.object,
                allCategories: PropTypes.array,
            }).isRequired,
        }).isRequired
    }
    state = {
        modal: false,
    };
    componentDidMount() {
        this.context.AppStore.ui.getAllCategories();
    }
    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal,
        }));
    }

    render() {
        const { allCategories, addWorker, addWorkerInfo, changeAddWorkerForm } = this.context.AppStore.salonAdmin;
        return (
            <div>
                <Button color="info" outline className="button" onClick={this.toggle}>{Messages.AddWorker.AddWorker}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{Messages.AddWorker.AddWorker}</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="exampleAnun">{Messages.AddWorker.name}</Label>
                                <Input 
                                    type="text" 
                                    name="name" 
                                    onChange = {changeAddWorkerForm} 
                                    value = {addWorkerInfo.name}
                                    />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleAnun">{Messages.AddWorker.surname}</Label>
                                <Input 
                                    type="text" 
                                    name="surname" 
                                    onChange = {changeAddWorkerForm} 
                                    value = {addWorkerInfo.surname}
                                    />
                            </FormGroup>
                            <FormGroup>
                                <p>Կատեգորիա</p>
                                {allCategories.map(item => {
                                    return <CustomInput 
                                        key = {item.id}
                                        type="radio" 
                                        id={item.id}
                                        name="category_id" 
                                        label={item.name}
                                        value = {item.id} 
                                        onChange = {changeAddWorkerForm}
                                    />
                                })}
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter onClick={this.toggle}>
                        <Button className="modal_button" onClick={addWorker} >{Messages.AddWorker.save}</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
export default AddWorker
