import React, { Component } from 'react';
import { Container } from 'reactstrap';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import SearchWorker from './SearchWorker';
import CardSearch from './../cards/CardSearch';
import CategorysNavigator from './CategorysNavigator';
@observer
export class Categorys extends Component {
    static contextTypes = {
        AppStore: PropTypes.shape({}).isRequired
    };
    state = {
        category: {},
        workers: []
    };
    componentDidMount() {
        fetch(`http://localhost:3001/category/${this.props.match.params.whichCategory}`)
            .then(res => res.json())
            .then((category) => {
                fetch(`http://localhost:3001/category/${this.props.match.params.whichCategory}/workers`)
                    .then(res => res.json())
                    .then((result) => {
                        this.setState({ category: category, workers: result });
                    }, (error) => {
                        console.log(error);
                    });
            }, (error) => {
                console.log(error);
            });
    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.whichCategory !== this.props.match.params.whichCategory) {
            fetch(`http://localhost:3001/category/${this.props.match.params.whichCategory}`)
                .then(res => res.json())
                .then((category) => {
                    fetch(`http://localhost:3001/category/${this.props.match.params.whichCategory}/workers`)
                        .then(res => res.json())
                        .then((result) => {
                            this.setState({ category: category, workers: result });
                        }, (error) => {
                            console.log(error);
                        });
                }, (error) => {
                    console.log(error);
                });
        }
    }
    render() {
        const { category, workers } = this.state;
        return (<Container>
            <CategorysNavigator />
            <SearchWorker />
            <div>
                <h3 align="center" className="mt-5 mb-5 text_color">{category.name}</h3>
                {workers.map(item => {
                    return <React.Fragment key={item.id}>
                        <CardSearch 
                            image={item.img} 
                            nameSurname={`${item.name} ${item.surname}`} 
                            id={item.id} 
                        />
                    </React.Fragment>;
                })}

            </div>
        </Container>);
    }
}
