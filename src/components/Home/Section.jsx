import React, { Component } from 'react';
import { Container,  Row } from 'reactstrap';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react'

import Carusel from './Carusel';
import CardCategory from './../cards/CardCategory';

import Messages from './../../Messages';
import {homeConfigs} from './../../config/categoryConfig';

import './../../../assets/stylesheets/section.css';

@observer
class Section extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            cardClick : PropTypes.func,
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
            this.setState({categorys: result})
            },
            (error) => {
                console.log(error);
            }
        )
    }
    render() {
        const {cardClick} = this.context.AppStore;
        return (
            <section>
                <Container fluid className = "carusel">
                    <Carusel/>
                </Container>
                <Container className = "cardSection">
                    <Row>
                        {this.state.categorys.map(item => {
                            return  <React.Fragment key = {item.name}>
                                <CardCategory 
                                    img={item.img}
                                    title={item.name}
                                    explaText={item.description}
                                    CardClass = "cardSection1"
                                    buttonText = {Messages.section.homeCardButtonText}
                                    url = {'Category'}
                                    name ={`${item.id}`}
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
