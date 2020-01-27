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
            }),
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
        const { allCategories } = this.context.AppStore.ui;
        return (
            <div>
                <Button color="info" outline className="button" onClick={this.toggle}>{Messages.AddWorker.AddWorker}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{Messages.AddWorker.AddWorker}</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="exampleAnun">{Messages.AddWorker.name}</Label>
                                <Input type="text" name="Անուն" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleAnun">{Messages.AddWorker.surname}</Label>
                                <Input type="text" name="Ազգանուն" />
                            </FormGroup>
                            <FormGroup>
                                <p>Կատեգորիա</p>
                                {allCategories.map(item => {
                                    return <CustomInput 
                                        key = {item.id}
                                        type="radio" 
                                        id={item.id}
                                        name="customRadio" 
                                        label={item.name} 
                                    />
                                })}
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter onClick={this.toggle}>
                        <Button className="modal_button" onClick={AddWorker} >{Messages.AddWorker.save}</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
export default AddWorker
