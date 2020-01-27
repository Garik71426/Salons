import React, { Component } from 'react';
import { Button, ButtonGroup, ButtonToolbar } from 'reactstrap';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

@observer
class Navigator extends Component {
    static contextTypes = {
        AppStore: PropTypes.shape({
            ui: PropTypes.shape({
                getAllCategories: PropTypes.func,
                allCategories: PropTypes.array,
            }),
        }).isRequired
    }

    state = {
        categorys: []
    }

    componentDidMount() {
       this.context.AppStore.ui.getAllCategories()
    };
    
    render() {
        const { allCategories } = this.context.AppStore.ui;
        return (
            <ButtonToolbar className="mt-5">
                <ButtonGroup className="group">
                    {allCategories.map(item => {
                        return <Link to={`/category/${item.id}`} key={item.id} >
                            <Button className="category_button" color="info">{item.name}</Button>
                        </Link>
                    })}
                </ButtonGroup>
            </ButtonToolbar>
        );
    }
}

export default Navigator;
