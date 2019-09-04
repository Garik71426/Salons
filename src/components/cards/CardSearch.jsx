import React, { Component } from 'react';
import { Card, Button, Media } from 'reactstrap';
import PropTypes from 'prop-types';
import {Link}  from 'react-router-dom';


import './../../../assets/stylesheets/table.css';

import Messages from './../../Messages';

class CardSearch extends Component {
    static propTypes = {
        nameSurname: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        id: PropTypes.number.isRequired
    }
    state = {
        salon: {}
    }
    componentDidMount(){
        fetch(`http://localhost:3001/salon/specialist/${this.props.id}`)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({ salon: result });
            },
            (error) => {
                console.log(error);
            }
        )
    }
    render() {
        const { image, nameSurname, id} = this.props;
        const { salon } = this.state;
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
                            {Messages.table.userAddress}` {salon.address}
                            <div>{Messages.table.beautySalonName}`  {salon.name}</div>
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
