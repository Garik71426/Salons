import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import Messages from './../../Messages';

@observer
class SpecialistInfo extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            
        }).isRequired
    };
    state = {
        salon: {},
        category: {},
        socialNetwork: []
    }
    componentDidMount() {
        fetch(`http://localhost:3001/salon/${this.props.specialist.salon_id}`)
                .then(res => res.json())
                .then(
                    (salon) => {
                        fetch(`http://localhost:3001/category/${this.props.specialist.category_id}`)
                        .then(res => res.json())
                        .then(
                            (category) => {
                                fetch(`http://localhost:3001/worker/${this.props.specialist.id}/social`)
                                .then(res => res.json())
                                .then(
                                    (socialNetwork) => {
                                        this.setState({ salon: salon, category: category, socialNetwork: socialNetwork })    
                                    },
                                    (error) => {
                                        console.log(error);
                                    }
                                )        
                            },
                            (error) => {
                                console.log(error);
                            }
                        )        
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
        const { salon, category, socialNetwork } =  this.state;
        const { specialist } = this.props;
        const age = this.calculate_age(new Date(specialist.b_day));
        return (
            <div>
                <h2 className = "textBlue"> {Messages.specialist.information} </h2>
                <p> {Messages.specialist.salonPhone} {salon.phone} </p>
                <p> {Messages.specialist.age} {age} </p>
                <p> {Messages.specialist.salonName}{salon.name}</p>
                <p>{Messages.specialist.salonAddress} {salon.address}</p>
                <p> {Messages.specialist.prof} {category.name} </p>
                <p>{Messages.specialist.socialMedia} {socialNetwork.map(item => {
                    return <a target="blank" href={item.path} key={item.id}>{item.name} </a>
                })}</p>
            </div>
        );
    }
}

export default SpecialistInfo;
