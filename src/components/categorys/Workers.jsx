import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

import CardSearch from './../cards/CardSearch';

@observer
class Workers extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            
        }).isRequired
    }
    state = {
        workers:[]
    }
    componentDidMount() {
        fetch(`http://localhost:3001/category/${this.props.category_id}/workers`)
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({ workers: result });
            },
            (error) => {
                console.log(error);
            }
        )
    }
    componentDidUpdate(prevProps) {
        if(prevProps.category_id !== this.props.category_id){
            fetch(`http://localhost:3001/category/${this.props.category_id}/workers`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({ workers: result });
                },
                (error) => {
                    console.log(error);
                }
            )
        }
    }
    render(){
        const { workers } = this.state;
        
        return(
            <>
                {workers.map(item => {
                    return <React.Fragment key = {item.id}>
                        <CardSearch 
                            id = {item.id}
                        /> 
                    </React.Fragment>
                    })
                }
            </>
        );
    }
}
export default Workers;