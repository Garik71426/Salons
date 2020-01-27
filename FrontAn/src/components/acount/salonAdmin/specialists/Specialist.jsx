import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react'

import { Input, FormGroup, CustomInput, Label, Button, Form } from 'reactstrap';

import Messages from './../../../../Messages';

@observer
class SpecialistUser extends Component {
    static contextTypes = {
        UIStore: PropTypes.shape({
            calculate_age: PropTypes.func,
        }).isRequired,
        AppStore: PropTypes.shape({
            ui: PropTypes.shape({
                getWorker: PropTypes.func,
                getWorkerWorkImages: PropTypes.func,
                getSocial: PropTypes.func,
                getAllCategories: PropTypes.func,
                worker: PropTypes.object,
                workerWorkImages: PropTypes.array,
                social: PropTypes.array,
                allCategories: PropTypes.array,
            }).isRequired,
            salonAdmin: PropTypes.shape({
                getAllSocial: PropTypes.func,
                socialFiltter: PropTypes.func,
                allSocial: PropTypes.array,
                setStoreProps: PropTypes.func,
            }).isRequired,
        }).isRequired
    };

    componentDidMount() {
        const worker_id = this.props.match.params.specialist_id;
        const { getWorker, getWorkerWorkImages, getSocial, getAllCategories } = this.context.AppStore.ui;
        const { getAllSocial, socialFiltter } = this.context.AppStore.salonAdmin;
        getWorker(worker_id);
        getWorkerWorkImages(worker_id);
        getSocial(worker_id);
        getAllCategories();
        getAllSocial();
        // socialFiltter(this.context.AppStore.salonAdmin.allSocial, this.context.AppStore.salonAdmin.social);
    }

    socialFiltter = () => {
        const { allSocial, social, setStoreProps } = this.context.AppStore.salonAdmin;
        for (let allSocialItem of allSocial) {
            for(let socialItem of social) {
                if(allSocialItem.id === socialItem.id) {
                    allSocialItem.path = socialItem.path; 
                }
            }
        }
        setStoreProps(allSocial);
    }

    render() {
        const { worker, workerWorkImages, allSocial } = this.context.AppStore.salonAdmin;
        const { allCategories } = this.context.AppStore.ui;
        const { calculate_age } = this.context.UIStore;
        const age = calculate_age(new Date(worker.b_day));
        this.socialFiltter();
        return (
            <Container className="mb-5 sections mt-5 section">
                {worker && <>
                    <Row>
                        <Form>
                            <div className="user" >
                                <Label for="changeImg">{Messages.AddWorker.image}</Label>
                                <Input type="file" id="changeImg" />
                                <img src={worker.img} height="200px" alt="user image" width="200px" className="d-inline" />
                                <div className="info">
                                    <Label for="workerAbout">{Messages.AddWorker.information}</Label>
                                    <Input type="textarea" id='workerAbout' value={worker.about} />
                                </div>
                            </div>
                            <h2 className="textBlue"> {Messages.specialist.information} </h2>
                            <FormGroup>
                                <Label for="workerName">{Messages.AddWorker.name}</Label>
                                <Input type="text" id='workerName' value={worker.name} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="surname">{Messages.AddWorker.surname}</Label>
                                <Input type="text" id='surname' value={worker.surname} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="age">{Messages.specialist.age}</Label>
                                <Input type="number" id='age' value={age} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="salonPhone">{Messages.specialist.salonPhone}</Label>
                                <Input type="text" id='salonPhone' value={worker.salon_phone} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="salonName">{Messages.specialist.salonName}</Label>
                                <Input type="text" id='salonName' value={worker.salon_name} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="salonAddress">{Messages.specialist.salonAddress}</Label>
                                <Input type="text" id='salonAddress' value={worker.salon_address} />
                            </FormGroup>
                            <FormGroup>
                                <p>Կատեգորիա</p>
                                {allCategories.map(item => {
                                    return <FormGroup check key={item.id}>
                                        <Label check>
                                            <Input type="radio" name="radio2"
                                                checked={item.name === worker.category_name}
                                            />
                                            {item.name}
                                        </Label>
                                    </FormGroup>
                                })}
                            </FormGroup>
                            <p>{Messages.specialist.socialMedia}</p>
                            {allSocial.map(item => {
                                return <FormGroup check key={item.id}>
                                    <Label check>
                                        <Input type="checkbox"
                                            checked={item.path && item.path.length !== 0}
                                        />
                                        {item.name}
                                    </Label>
                                    <input type = 'text' value = {item.path} />
                                </FormGroup>
                            })}
                        </Form>
                    </Row>
                    {workerWorkImages.length !== 0 &&
                        <Row className="mt-5">
                            <h1>{Messages.specialist.myWorkes}</h1>
                            <Row className="mt-5">
                                {workerWorkImages.map(item => {
                                    return <Col align="center" key={item.img}>
                                        <img src={item.img} alt="works image" className="d-inline " width="200px" height="200px" />
                                    </Col>
                                })}
                            </Row>
                        </Row>}
                </>}
                <Button>{Messages.AddWorker.save}</Button>
            </Container>
        );
    }
}

export default SpecialistUser;