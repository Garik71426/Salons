import React, { Component } from 'react';
import { Card, Button, Media } from 'reactstrap';
import PropTypes from 'prop-types';
import {Link}  from 'react-router-dom';


import './../../../assets/stylesheets/table.css';

import Messages from './../../Messages';

class CardSearch extends Component {
    static propTypes = {

    }
    render() {
        const { image, nameSurname, address, salonTitle, url, name} = this.props;
        return (
            <Card className = "Card_top">
                    <Media className = "text">
                        <Media left href="#">
                            <img src={image} alt = "specialistImg" className = "img_size"/>
                        </Media>
                        <Media body className="full_text">
                        <Media heading className="name_title">
                            {nameSurname}
                        </Media>
                            {Messages.table.userAddress}` {address}
                            <div>{Messages.table.beautySalonName}`  {salonTitle}</div>
                        </Media>
                        <Link to = {`${url}/${name}`}>
                            <Button className = "btn_card_category" outline color = "info">Մանրամասն</Button>
                        </Link>
                </Media>
            </Card>
        );
    }
}

export default CardSearch;
