import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Services  from './Services';

import './home.css'

class Home extends Component {
    render() {
        return (
            <>
                <Container fluid className = 'home-container'>
                    <Row className="justify-content-end">
                        <Col xs = {12} sm = {5} className = 'description'>
                            <h2>
                                Փնտրում եք պրոֆեսիոնալ գեղեցկության սրա՞հ։
                            </h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident totam, error veniam odio nemo amet sunt corporis officiis rem. Architecto saepe nisi praesentium necessitatibus libero veritatis cumque ullam doloremque porro!
                            </p>
                            <a href = "#services">Մեր Սերվիսները</a>
                        </Col>
                    </Row>
                </Container>
                <Services/>
            </>
        );
    }
}
export default Home;
