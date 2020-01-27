import React, { Component } from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import Search from './search/Search';
import CardSearch from './../common/cards/CardSearch';
import Navigator from './navigator/Navigator';

@observer
class Categories extends Component {
    static contextTypes = {
        AppStore: PropTypes.shape({
            ui: PropTypes.shape({
                getCategoryWorkers: PropTypes.func,
                getCategory: PropTypes.func,
                category: PropTypes.object,
                categoryWorkers: PropTypes.array,
            })
        }).isRequired
    }
    componentDidMount() {
        const category_id = this.props.match.params.category_id;
        this.context.AppStore.ui.getCategoryWorkers(category_id);
        this.context.AppStore.ui.getCategory(category_id);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.category_id !== this.props.match.params.category_id) {
            const category_id = this.props.match.params.category_id;
            this.context.AppStore.ui.getCategoryWorkers(category_id);
            this.context.AppStore.ui.getCategory(category_id);
        }
    }
    render() {
        const { category, categoryWorkers } = this.context.AppStore.ui;
        return (
            <Container>
                <Navigator />
                <Search />
                <div>
                    <h3 align="center" className="mt-5 mb-5 text_color">{category.name}</h3>
                    {categoryWorkers.map(item => {
                        return <React.Fragment key={item.id}>
                            <CardSearch
                                worker={item}
                            />
                        </React.Fragment>
                    })
                    }
                </div>
            </Container>
        );
    }
}

export default Categories;
