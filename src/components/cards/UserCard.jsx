import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
        CardTitle, Button, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import {Link}  from 'react-router-dom';

import './../../../assets/stylesheets/card.css'

class UserCard extends Component {
    static propTypes = {
        img : PropTypes.string.isRequired,
        title : PropTypes.string,
        explaText : PropTypes.string,
        CardClass : PropTypes.string,
        buttonText : PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    }
	render() {   
        const { img, title, explaText, CardClass, buttonText, url, id} = this.props;
		return(
            <Col lg = {3} md={6} sm = {6} xs = {8} className="cardOne">
                <Card className = "card_design">
                    <CardImg variant="top" src={img} />
                    <CardBody>
                        <CardTitle>{title}</CardTitle>
                        <CardText className = {CardClass}>{explaText}</CardText>
                        <Link to={`/${url}/${id}`} >
                            <Button color="info" >{buttonText}</Button>
                        </Link>
                    </CardBody>
                </Card>
            </Col>
		);
	}
}



export default UserCard;