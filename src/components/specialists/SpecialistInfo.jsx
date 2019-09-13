import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import Social from './Social';

import Messages from './../../Messages';

class SpecialistInfo extends Component {
    static contextTypes = {
        UIStore : PropTypes.shape({
            calculate_age: PropTypes.func
        }).isRequired
    };
    state = {
        specialist: {}
    }
    componentDidMount() {
        axios.get(`http://localhost:3001/worker/${this.props.specialist_id}/full`)
        .then(result => {
            this.setState({ specialist: result.data });
        })
        .catch(err => {
            return err;
        });
    }

    render() {
        const { specialist } =  this.state;
        const age = this.context.UIStore.calculate_age(new Date(specialist.b_day));
        return (
            <div>
                <h2 className = "textBlue"> {Messages.specialist.information} </h2>
                <p> {Messages.specialist.salonPhone} {specialist.salon_phone} </p>
                <p> {Messages.specialist.age} {age} </p>
                <p> {Messages.specialist.salonName}{specialist.salon_name}</p>
                <p>{Messages.specialist.salonAddress} {specialist.salon_address}</p>
                <p> {Messages.specialist.prof} {specialist.category_name} </p>
                {specialist.id && <Social specialist_id = {specialist.id}/>}
            </div>
        );
    }
}

export default SpecialistInfo;
