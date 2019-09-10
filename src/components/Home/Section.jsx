import React, { Component } from 'react';
import { Container,  Row } from 'reactstrap';
import PropTypes from 'prop-types';

import Carusel from './Carusel';
import CardCategory from './../cards/CardCategory';

import Messages from './../../Messages';

import './../../../assets/stylesheets/section.css';

class Section extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            getAllCategorys: PropTypes.func,
            categorys: PropTypes.object
        }).isRequired
    }

    state = {
        categorys: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/category')
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({ categorys : result })
            }
        )
    }
    render() {
        const { categorys } = this.state;
        return (
            <section>
                <Container fluid className = "carusel">
                    <Carusel/>
                </Container>
                <Container className = "cardSection">
                    <Row>
                        {categorys.map(item => {
                            return  <React.Fragment key = {item.name}>
                                <CardCategory 
                                    img={item.img}
                                    title={item.name}
                                    explaText={item.description}
                                    CardClass = "cardSection1"
                                    buttonText = {Messages.section.homeCardButtonText}
                                    url = {'category'}
                                    id ={`${item.id}`}
                                />
                            </React.Fragment>
                        })}
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Section;
