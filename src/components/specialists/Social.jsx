import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Messages from './../../Messages';

class Social extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            
        }).isRequired
    };
    state = {
        socialNetwork: []
    }
    componentDidMount() {
        fetch(`http://localhost:3001/worker/${this.props.specialist_id}/social`)
        .then(res => res.json())
        .then(
            (socialNetwork) => {
                this.setState({ socialNetwork: socialNetwork })            
            },
            (error) => {
                console.log(error);
            }
        )        
    }
    render() {
        const { socialNetwork } =  this.state;
        return (
            <>
                { socialNetwork.length !== 0 
                    ? <p>
                        {Messages.specialist.socialMedia} {socialNetwork.map(item => {
                            return <a target="blank" href={item.path} key={item.id}>{item.name} </a>
                        })}
                    </p> 
                    : null }
            </>
        );
    }
}

export default Social;
