import React, { Component } from 'react';
import ReactLoading from 'react-loading';

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    }
    render() {
        return (
            <div className = 'loading'>
                <ReactLoading type='bars' color='white' height={100} width={'50%'} />
            </div>
        )
    }
}

export default Loading;