import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
        CardTitle, Button, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import {Link}  from 'react-router-dom';
import {observer} from 'mobx-react';

import './../../../assets/stylesheets/card.css'

@observer
class CardCategory extends Component {
    static propTypes = {
        img : PropTypes.string.isRequired,
        deleteCard : PropTypes.object,
        title : PropTypes.string,
        explaText : PropTypes.string,
        cardClick : PropTypes.func,
        CardClass : PropTypes.string,
        buttonText : PropTypes.string.isRequired,
    }
	render() {   
        const {deleteCard, img, title, explaText, cardClick, CardClass, buttonText, url, id} = this.props;
		return(
            <Col lg = {3} md={6} sm = {6} xs = {8} className="cardOne">
                <Card className = "card_design">
                    {deleteCard}
                    <CardImg variant="top" src={img} />
                    <CardBody>
                        <CardTitle>{title}</CardTitle>
                        <CardText className = {CardClass}>{explaText}</CardText>
                        <Link to={`/${url}/${id}`} >
                            <Button color="info" onClick = {cardClick} prof = {id} >{buttonText}</Button>
                        </Link>
                    </CardBody>
                </Card>
            </Col>
		);
	}
}



export default CardCategory;