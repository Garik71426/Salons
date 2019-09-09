import React, { Component } from 'react';
import { Card, Button, Media } from 'reactstrap';
import PropTypes from 'prop-types';
import {Link}  from 'react-router-dom';

import Error from '../Error';

import './../../../assets/stylesheets/table.css';

import Messages from './../../Messages';

class CardSearch extends Component {
    static propTypes = {
        id: PropTypes.number.isRequired
    }
    state = {
        specialist: {},
        status: {}
    }
    componentDidMount(){
        fetch(`http://localhost:3001/worker/${this.props.id}/full`)
        .then(
            (res) => {
                this.setState({ status: {code: res.status, message: res.statusText} });
                return res.json();
            }
        )
        .then(
            (result) => {
                this.setState({ specialist: result });
            }
        )
    }

    render() {
        const { id } = this.props;
        const { specialist, status } = this.state;
        console.log(this.state.status)

        return (<>
            { (status.code === 200 || status.code === 304) ? <Card className = "Card_top">
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
            </Card> : <></> }
            </>
        );
    }
}

export default CardSearch;
