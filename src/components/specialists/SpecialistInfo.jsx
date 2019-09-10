import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Social from './Social';

import Messages from './../../Messages';

class SpecialistInfo extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            
        }).isRequired
    };
    state = {
        specialist: {}
    }
    componentDidMount() {
        fetch(`http://localhost:3001/worker/${this.props.specialist_id}/full`)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({ specialist: result })            
            },
            (error) => {
                console.log(error);
            }
        )
    }

    calculate_age = (dob) => { 
        const diff_ms = Date.now() - dob.getTime();
        const age_dt = new Date(diff_ms);       
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }

    render() {
        const { specialist } =  this.state;
        const age = this.calculate_age(new Date(specialist.b_day));
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
