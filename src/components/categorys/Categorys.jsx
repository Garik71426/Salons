import React, { Component } from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';

import SearchWorker from './SearchWorker';
import CardSearch from './../common/cards/CardSearch';
import CategorysNavigator from './CategorysNavigator';

import './../../../assets/stylesheets/table.css';

@observer
class Categorys extends Component {
    static contextTypes = {
        AppStore: PropTypes.shape({
            getCategoryWorkers: PropTypes.func,
            getCategory: PropTypes.func,
            category: PropTypes.object,
            categoryWorkers: PropTypes.array,
        }).isRequired
    }
    componentDidMount() {
        const category_id = this.props.match.params.whichCategory;
        this.context.AppStore.getCategoryWorkers(category_id);
        this.context.AppStore.getCategory(category_id);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.whichCategory !== this.props.match.params.whichCategory) {
            const category_id = this.props.match.params.whichCategory;
            this.context.AppStore.getCategoryWorkers(category_id);
            this.context.AppStore.getCategory(category_id);
        }
    }
    render() {
        const { category, categoryWorkers } = this.context.AppStore;
        return (
            <Container>
                <CategorysNavigator />
                <SearchWorker />
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

export default Categorys;
