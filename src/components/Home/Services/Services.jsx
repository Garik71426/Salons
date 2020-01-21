import React, { Component } from 'react';
import { observer } from 'mobx-react'
import { Container, Row } from 'reactstrap';
import PropTypes from 'prop-types';

import CardCategory from './../../common/cards/CardCategory';

import './../../../../assets/stylesheets/services.css';

@observer
class Services extends Component {
    static contextTypes = {
        AppStore: PropTypes.shape({
            getAllCategories: PropTypes.func,
            allCategories: PropTypes.array,
        }).isRequired
    }

    componentDidMount() {
        this.context.AppStore.getAllCategories();
    }

    render() {
        const { allCategories } = this.context.AppStore;
        return (
            <div id='services' className='services'>
                <Container>
                    <h1 className='services-title'>Սերվիսներ</h1>
                    <Row>
                        {allCategories.map(item => {
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
