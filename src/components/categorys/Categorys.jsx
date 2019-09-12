import React, { Component } from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import axios from 'axios';

import SearchWorker from './SearchWorker';
import Workers from './Workers';
import CategorysNavigator from './CategorysNavigator';

import './../../../assets/stylesheets/table.css';

@observer
class Categorys extends Component {
    static contextTypes = {
        AppStore: PropTypes.shape({

        }).isRequired
    }
    state = {
        category: {}
    }
    componentDidMount() {
        axios.get(`http://localhost:3001/category/${this.props.match.params.whichCategory}`)
            .then(res => {
                this.setState({ category: res.data });
            })
            .catch(err => {
                return err;
            });
    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.whichCategory !== this.props.match.params.whichCategory) {
            axios.get(`http://localhost:3001/category/${this.props.match.params.whichCategory}`)
                .then(res => {
                    this.setState({ category: res.data });
                })
                .catch(err => {
                    return err;
                });
        }
    }
    render() {
        const { category } = this.state;

        return (
            <Container>
                <CategorysNavigator />
                <SearchWorker />
                <div>
                    <h3 align="center" className="mt-5 mb-5 text_color">{category.name}</h3>
                    {category.id && <Workers category_id={category.id} />}
                </div>
            </Container>
        );
    }
}

export default Categorys;
