import React, { Component } from 'react';
import { Card, Button, Media } from 'reactstrap';

import Messages from './../../Messages'



import './../../../assets/stylesheets/acount.css';


class AcountVisits extends Component {

    render() {
        return (
            <Card className = "Card_visit">
                    <Media className = "text">
                        <Media left href="#">
                        </Media>
                        <Media body className="modal_body">
                        <Media heading className = "vis_text">
                        <div className="p_text">
                            <p>{Messages.AcountUser.acountNameVisits} Name</p>
                            <p>{Messages.AcountUser.acountSurnameVisits} Surname</p>
                            <p>{Messages.AcountUser.acountPhoneNumberVisits} PhoneNumber</p>
                            <p>{Messages.AcountUser.acountBeuthySalonName} SalonName</p>
                        </div>
                           <div className="date">
                                <p>{Messages.AcountUser.aountVisitsData}</p>
                                <p>{Messages.AcountUser.acountVisitsHours}</p>
                            </div>
                        </Media>

                        </Media>

                </Media>
            </Card>
        );
    }
}

export default AcountVisits;
