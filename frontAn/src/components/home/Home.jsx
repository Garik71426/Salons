import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Services  from './services'

import './home.css'

class Home extends Component {
    render() {
        return (
            <Container fluid className = 'section'>
                <Row className="home-container justify-content-end">
                    <Col xs = {12} sm = {5} className = 'description'>
                        <h2>
                            Փնտրում եք պրոֆեսիոնալ գեղեցկության սրա՞հ։
                        </h2>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident totam, error veniam odio nemo amet sunt corporis officiis rem. Architecto saepe nisi praesentium necessitatibus libero veritatis cumque ullam doloremque porro!
                        </p>
                        <a href = "#services" className = 'btn_salmon'>Մեր Սերվիսները</a>
                    </Col>
                </Row>
                <Services/>
            </Container>
        );
    }
}
export default Home;
