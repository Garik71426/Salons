import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

import WorkImages from './WorkImages';
import SpecialistInfo from './SpecialistInfo';

import Messages from './../../Messages';

import './../../../assets/stylesheets/specialist.css';

class SpecialistUser extends Component {
    static contextTypes = {
        AppStore: PropTypes.shape({

        }).isRequired
    };

    state = {
        specialist: {},
    }

    componentDidMount() {
        axios.get(`http://localhost:3001/worker/${this.props.match.params.specialistIndex}`)
            .then(res => {
                this.setState({ specialist: res.data });
            })
            .catch(err => {
                return err;
            });
    }

    render() {
        let { specialist } = this.state;
        return (
            <Container className="mb-5 sections mt-5 section">
                <Row>
                    <Col sm="8" >
                        <h3 className="textBlue" > {specialist.name} {specialist.surname}</h3>
                        <div className="user" >
                            <img src={specialist.img} height="200px" alt="user image" width="200px" className="d-inline" />
                            <div className="info">
                                <p>{specialist.about}</p>
                            </div>
                        </div>
                        {specialist.id && <SpecialistInfo specialist_id={specialist.id} />}
                    </Col>
                </Row>
                <WorkImages
                    specialist={this.props.match.params.specialistIndex}
                />

            </Container>
        );
    }
}

export default SpecialistUser;
