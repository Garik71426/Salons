import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
        CardTitle, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import {Link}  from 'react-router-dom';

import './UserCard.css'

class UserCard extends Component {
    static propTypes = {
        img : PropTypes.string,
        title : PropTypes.string,
        explaText : PropTypes.string,
        buttonText : PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    }
	render() {   
        const { img, title, explaText, buttonText, url, id} = this.props;
		return(
            <Col sm={3}>
                <Card className = "card_design">
                    <CardImg variant="top" src={img || '/images/specialist.png'} />
                    <CardBody>
                        <CardTitle>{title}</CardTitle>
                        <CardText>{explaText}</CardText>
                        <Link to={`/${url}/${id}`} className = 'btn_salmon'>
                            {buttonText}
                        </Link>
                    </CardBody>
                </Card>
            </Col>
		);
	}
}

export default UserCard;
