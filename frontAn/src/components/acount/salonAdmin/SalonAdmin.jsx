import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react'

import { Form, FormGroup, Label, Input } from 'reactstrap';

import Workers from './workers';
import AddWorker from './../../common/modals/AddWorker';

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

    render() {
        const { salon, salonWorkers, changeSalonInfo } = this.context.AppStore.salonAdmin;
        return (
            <Container className="salon-page section">
                <Form >
                    <FormGroup>
                        <Label for="exampleFile">{Messages.settings.insertImg}</Label>
                        <Input type="file" name="file" id="exampleFile" />
                        <img src = {salon.img} id="target" width="250px" height="250px" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleName">{Messages.settings.name}</Label>
                        <Input type="text" name="name" id="exampleName"
                            onChange = {changeSalonInfo} 
                            value={salon.name} 
                            />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleInfo">{Messages.settings.ourSet}</Label>
                        <Input type="textarea" name="info" id="exampleInfo" 
                            onChange = {changeSalonInfo} 
                            value = {salon.info} 
                            />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleAddress">{Messages.settings.adress}</Label>
                        <Input type="text" name="address" id="exampleAddress" 
                            onChange = {changeSalonInfo} 
                            value = {salon.address} 
                            />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePhone">{Messages.settings.phone}</Label>
                        <Input type="text" name="phone" id="examplePhone" 
                            value = {salon.phone} 
                            onChange = {changeSalonInfo} 
                            />
                    </FormGroup>
                </Form>
                <Workers
                    workers={salonWorkers} 
                    url={this.props.match.url}
                />
                <AddWorker />
            </Container>
        );
    }
}

export default SalonAdmin;