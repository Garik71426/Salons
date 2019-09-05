import React, { Component } from 'react';
import {Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import DateHourse from './form/DateHourse'
import ChangeSpecialistInfo from './modals/ChangeSpecialistInfo'
import WorkImages from './WorkImages';
import SpecialistInfo from './SpecialistInfo';

import Messages from './../../Messages';

import './../../../assets/stylesheets/specialist.css';

@observer
class SpecialistUser extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            isUser : PropTypes.string,
            deleteWorksImage : PropTypes.func,
        }).isRequired
    };
    state = {
        specialist: {},
    }
    componentDidMount() {
        fetch(`http://localhost:3001/worker/${this.props.match.params.specialistIndex}`)
        .then(res => res.json())
        .then(
            (specialist) => {
                this.setState({ specialist: specialist })  
            },
            (error) => {
                console.log(error);
            }
        )
    }

    render() {
        const { isUser } = this.context.AppStore;
        let { specialist } =  this.state;
        return (
            <Container className="mb-5 sections mt-5">
                <Row>
                <Col sm="8" >
                    <h3 className = "textBlue" > {specialist.name} {specialist.surname}</h3>
                    <div className="user" >
                        <img src={specialist.img} height = "200px" alt="user image" width="200px" className ="d-inline" />
                        <div className="info">
                            {isUser === 'salon' && <ChangeSpecialistInfo salonIndex={specialist.salon_id} categoryIndex={specialist.category_id} specialistIndex = {specialist.id}/>}
                            <p>{specialist.about}</p>
                        </div>
                    </div>
                    {specialist.id && <SpecialistInfo specialist_id = {specialist.id}/>}
                </Col>
                    {isUser === 'user' && <DateHourse />}
                </Row>
                <h1 className = "textBlue" >{Messages.specialist.myWorkes}</h1>
                <Row className = "mt-5">
                <WorkImages 
                    specialist = {this.props.match.params.specialistIndex}
                />
                </Row>
        </Container>
        );
    }
}

export default SpecialistUser;
