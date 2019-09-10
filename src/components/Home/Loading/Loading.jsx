import React, { Component } from 'react';

import './Loading.css';

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
                Loading...
            </div>
        )
    }
}

export default Loading;