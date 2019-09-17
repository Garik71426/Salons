import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import axios from 'axios';

import CardCategory from './../cards/CardCategory';

import './../../../assets/stylesheets/services.css';

class Services extends Component {
    static contextTypes = {
        AppStore: PropTypes.shape({
            getAllCategorys: PropTypes.func,
            categorys: PropTypes.object
        }).isRequired
    }

    state = {
        categorys: []
    }

    componentDidMount() {
        axios.get('http://localhost:3001/category')
            .then(res => {
                this.setState({ categorys: res.data });
            })
            .catch(err => {
                return err;
            });
    }

    render() {
        const { categorys } = this.state;
        return (
            <div id='services' className='services'>
                <Container>
                    <h1 className='services-title'>Սերվիսներ</h1>
                    <Row>
                        {categorys.map(item => {
                            return <React.Fragment key={item.name}>
                                <CardCategory
                                    img={item.img}
                                    title={item.name}
                                    url={'category'}
                                    id={`${item.id}`}
                                />
                            </React.Fragment>
                        })}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Services;
