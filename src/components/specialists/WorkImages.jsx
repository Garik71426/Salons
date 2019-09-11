import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';

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
        fetch(`http://localhost:3001/worker/${this.props.specialist}/works`)
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
                this.setState({ workImgs: result })    
            },
            (error) => {
                console.log(error);
            }
        )        
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
