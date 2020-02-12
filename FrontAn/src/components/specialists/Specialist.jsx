import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react'

import Messages from './../../Messages';

@observer
class SpecialistUser extends Component {
    static contextTypes = {
        UIStore: PropTypes.shape({
            calculate_age: PropTypes.func,
        }).isRequired,
        AppStore: PropTypes.shape({
            getWorker: PropTypes.func,
            getWorkerWorkImages: PropTypes.func,
            getSocial: PropTypes.func,
            worker: PropTypes.object,
            workerWorkImages: PropTypes.array,
            social: PropTypes.array,
        }).isRequired
    };

    componentDidMount() {
        const worker_id = this.props.match.params.specialist_id;
        this.context.AppStore.ui.getWorker(worker_id);
        this.context.AppStore.ui.getWorkerWorkImages(worker_id);
        this.context.AppStore.ui.getSocial(worker_id);
    }

    render() {
        const { worker, workerWorkImages, social } = this.context.AppStore.ui;
        const { calculate_age } = this.context.UIStore;
        const age = worker.b_day ? calculate_age(new Date(worker.b_day)) : '';
        return (
            <Container className="mb-5 sections mt-5 section">
                {worker && <>
                    <Row>
                        <Col sm="8" >
                            <h3 className="textBlue" > {worker.name} {worker.surname}</h3>
                            <div className="user" >
                                <img src={worker.img || '/images/specialist.png'} height="200px" alt="user image" width="200px" className="d-inline" />
                                <div className="info">
                                    <p>{worker.about}</p>
                                </div>
                            </div>
                            <div>
                                <h2 className="textBlue"> {Messages.specialist.information} </h2>
                                <p> {Messages.specialist.salonPhone} {worker.salon_phone} </p>
                                <p> {Messages.specialist.age} {age} </p>
                                <p> {Messages.specialist.salonName} {worker.salon_name}</p>
                                <p>{Messages.specialist.salonAddress} {worker.salon_address}</p>
                                <p> {Messages.specialist.prof} {worker.category_name} </p>
                                {social.length !== 0 && <p>
                                    {Messages.specialist.socialMedia} {social.map(item => {
                                        return <a target="blank" href={item.path} key={item.id}>{item.name} </a>
                                    })}
                                </p>}
                            </div>
                        </Col>
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
            </Container>
        );
    }
}

export default SpecialistUser;
