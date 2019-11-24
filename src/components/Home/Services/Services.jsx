import React, { Component } from 'react';
import { observer } from 'mobx-react'
import { Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';

import CardCategory from './../../cards/CardCategory';

import './../../../../assets/stylesheets/services.css';

@observer
class Services extends Component {
    static contextTypes = {
        AppStore: PropTypes.shape({
            getAllCategorys: PropTypes.func,
            allCategorys: PropTypes.array,
        }).isRequired
    }

    componentDidMount() {
        this.context.AppStore.getAllCategorys();
    }

    render() {
        const { allCategorys } = this.context.AppStore;
        return (
            <div id='services' className='services'>
                <Container>
                    <h1 className='services-title'>Սերվիսներ</h1>
                    <Row>
                        {allCategorys.map(item => {
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
