import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react'

import { Form, FormGroup, Label, Input } from 'reactstrap';

import Workers from './workers';
import AddWorker from './../../common/modals/AddWorker';

import { serverPath } from './../../../server';

import Messages from './../../../Messages';

import './salon.css';

@observer
class SalonAdmin extends Component {
    static contextTypes = {
        AppStore: PropTypes.shape({
            salonAdmin: PropTypes.shape({
                salon: PropTypes.object,
                salonWorkers: PropTypes.array,
                changeSalonInfo: PropTypes.func,
                saveSalonInfo: PropTypes.func,
            }).isRequired,
            ui: PropTypes.shape({
                getSalon: PropTypes.func,
                getSalonWorkers: PropTypes.func,
                getSalonCategories: PropTypes.func,
                salon: PropTypes.object,
                salonWorkers: PropTypes.array,
                salonCategories: PropTypes.array,
            }).isRequired,
        }).isRequired
    }
    componentDidMount() {
        const salon_id = this.props.match.params.salon_id;
        this.context.AppStore.ui.getSalonCategories(salon_id);
        this.context.AppStore.ui.getSalonWorkers(salon_id);
        this.context.AppStore.ui.getSalon(salon_id);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.salon_id !== prevProps.match.params.salon_id) {
            const salon_id = this.props.match.params.salon_id;
            this.context.AppStore.ui.getSalonCategories(salon_id);
            this.context.AppStore.ui.getSalonWorkers(salon_id);
            this.context.AppStore.ui.getSalon(salon_id);
        }
    }

    saveInfo = () => {
        const { salonAdmin, ui } = this.context.AppStore;
        salonAdmin.saveSalonInfo(ui.salon, salonAdmin.salon);
    };

    handleOnchange = event => {
        this.context.AppStore.salonAdmin.changeSalonInfo('salon', event);
    };

    render() {
        const { salon, salonWorkers } = this.context.AppStore.salonAdmin;
        const { saveInfo, handleOnchange } = this;
        return (
            <Container className="salon-page section">
                <Form >
                    <FormGroup>
                        <Label for="exampleFile">{Messages.settings.insertImg}</Label>
                        <Input type="file" name="file" id="exampleFile" onChange = {handleOnchange} />
                        <img src = {`${serverPath}${salon.img}`} id="target" width="250px" height="250px" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleName">{Messages.settings.name}</Label>
                        <Input type="text" name="name" id="exampleName"
                            onChange = {handleOnchange} 
                            value={salon.name} 
                            />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleInfo">{Messages.settings.ourSet}</Label>
                        <Input type="textarea" name="info" id="exampleInfo" 
                            onChange = {handleOnchange} 
                            value = {salon.info} 
                            />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleAddress">{Messages.settings.adress}</Label>
                        <Input type="text" name="address" id="exampleAddress" 
                            onChange = {handleOnchange} 
                            value = {salon.address} 
                            />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePhone">{Messages.settings.phone}</Label>
                        <Input type="text" name="phone" id="examplePhone" 
                            value = {salon.phone} 
                            onChange = {handleOnchange} 
                            />
                    </FormGroup>
                </Form>
                <Workers
                    workers={salonWorkers} 
                    url={this.props.match.url}
                />
                <AddWorker salon_id = {this.props.match.params.salon_id} />
                <Button onClick = {saveInfo}>{Messages.AddWorker.save}</Button>
            </Container>
        );
    }
}

export default SalonAdmin;