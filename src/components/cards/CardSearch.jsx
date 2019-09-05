import React, { Component } from 'react';
import { Card, Button, Media } from 'reactstrap';
import PropTypes from 'prop-types';
import {Link}  from 'react-router-dom';


import './../../../assets/stylesheets/table.css';

import Messages from './../../Messages';

class CardSearch extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired
    }
    state = {
        specialist: {}
    }
    componentDidMount(){
        fetch(`http://localhost:3001/worker/${this.props.id}/full`)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({ specialist: result });
            },
            (error) => {
                console.log(error);
            }
        )
    }
    render() {
        const { id } = this.props;
        const { specialist } = this.state;
        return (
            <Card className = "Card_top">
                    <Media className = "text">
                        <Media left href="#">
                            <img src={specialist.img} alt = "specialistImg" className = "img_size"/>
                        </Media>
                        <Media body className="full_text">
                        <Media heading className="name_title">
                            {`${specialist.name} ${specialist.surname}`}
                        </Media>
                            {Messages.table.userAddress}` {specialist.salon_address}
                            <div>{Messages.table.beautySalonName}`  {specialist.salon_name}</div>
                        </Media>
                        <Link to = {`/specialist/${id}`}>
                            <Button className = "btn_card_category" outline color = "info">Մանրամասն</Button>
                        </Link>
                </Media>
            </Card>
        );
    }
}

export default CardSearch;
