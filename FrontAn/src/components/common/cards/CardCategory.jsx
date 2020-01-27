import React, { Component } from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, Col
} from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './CardCategory.css'

class CardCategory extends Component {
    static propTypes = {
        img: PropTypes.string.isRequired,
        title: PropTypes.string,
        url: PropTypes.string.isRequired,
        id: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number
        ])
    }

    render() {
        const { img, title, url, id } = this.props;
        return (
            <Col lg={3} md={6} sm={6} xs={8} className="cardCategory">
                <Link to={`/${url}/${id}`} >
                    <Card>
                        <CardImg variant="top" src={img} />
                        <CardBody>
                            <CardTitle>{title}</CardTitle>
                        </CardBody>
                    </Card>
                </Link>
            </Col>
        );
    }
}

export default CardCategory;
