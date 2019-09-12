import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

import Messages from './../../Messages';

class WorkImages extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({

        }).isRequired
    };
    state = {
        workImgs: []
    }
    componentDidMount() {
        axios.get(`http://localhost:3001/worker/${this.props.specialist}/works`)
        .then(result => {
            this.setState({ workImgs: result.data });
        })
        .catch(err => {
            return err;
        });       
    }

    render() {
        const { workImgs } =  this.state;
        return (
            <>
                { workImgs.length !== 0 ? 
                <Row className = "mt-5">
                    <h1>{Messages.specialist.myWorkes}</h1>
                    <Row className = "mt-5">
                        {workImgs.map(item => {
                        return <Col align = "center" key = {item.img}>
                            <img src={item.img} alt="works image" className ="d-inline " width="200px" height="200px" />
                        </Col>})}
                    </Row>
                </Row> : null}
            </>
        );
    }
}

export default WorkImages;
